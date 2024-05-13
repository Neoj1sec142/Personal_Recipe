
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Service.IService;

namespace PersonalCore.Controllers;
[Route("api/[controller]")]
[ApiController]
public class RecipeController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly IRecipeService _rSvc;
    private readonly IIngredientService _ingSvc;
    private readonly IInstructionService _insSvc;
    private readonly IItemService _iSvc;
    private readonly IMeasurementTypeService _mtSvc;
    private readonly IChefService _cSvc;
    public RecipeController(
        IRecipeService rSvc, 
        IIngredientService ingSvc,
        IInstructionService insSvc,
        IItemService iSvc,
        IMeasurementTypeService mtSvc,
        IChefService cSvc,
        IMapper mapper)
    {
        _rSvc = rSvc;
        _mapper = mapper;
        _ingSvc = ingSvc;
        _insSvc = insSvc;
        _iSvc = iSvc;
        _mtSvc = mtSvc;
        _cSvc = cSvc;
    }

    // GET: api/recipe
    [HttpGet]
    public async Task<ActionResult<List<Recipe>>> GetAll([FromQuery] ListParams listParams)
    {
        List<Recipe> objs = await _rSvc.GetAll(listParams);
        return Ok(objs);
    }


    // GET: api/chef/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Recipe>> Get(int id)
    {
       Recipe c = await _rSvc.Get(id);
       if(c == null)
       {
            ModelState.AddModelError("error", $"Instance not found with ID {id}.");
            return BadRequest(ModelState);
       }
       return Ok(c);
    }

    // POST: api/recipe
    [HttpPost]
    public async Task<ActionResult<Recipe>> Post(RecipeDto dto)
    {
        if (!ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        Recipe c = await _rSvc.Create(dto);
        if(c == null)
        {
            ModelState.AddModelError("error", "Error in Creation.");
            return BadRequest(ModelState);
        }    
        return Ok(c);
        // return CreatedAtAction("Recipe", new { id = c.Id }, c);
    }

    // PUT: api/recipe/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Recipe c)
    {
        if (id != c.Id || !ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        try
        {
            await _rSvc.Update(c);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await _rSvc.Exists(id))
            {
                return NotFound();
            }
        }

        return NoContent();
    }

    // DELETE: api/recipe/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteNote(int id)
    {
        Recipe c = await _rSvc.Get(id);
        if (c == null)
        {
            ModelState.AddModelError("error", "Note Not Found.");
            return BadRequest(ModelState);
        }
        if(await _rSvc.Delete(id))
        {
            return Ok();
        }
        else
        {
            ModelState.AddModelError("error", "Error In Deleting");
            return BadRequest(ModelState);
        }
        
    }

    // POST: api/recipe/quick
    [HttpPost("quick")]
    public async Task<ActionResult<Recipe>> QuickPost(QuickRecipeDto dto)
    {
        if (!ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        List<Instruction> instructions = new List<Instruction>();
        List<Ingredient> ingredients = new List<Ingredient>();
        Chef chef = new Chef();
        if(dto.ChefId == 0 || (!string.IsNullOrEmpty(dto.ChefName) && !await _iSvc.Exists(dto.ChefName)))
        {
            ChefDto cdto = new ChefDto{
                Name = dto.ChefName,
            };
            chef = await _cSvc.Create(cdto);
        }

        dto.Instructions.ForEach(async i => {
            if(!await _insSvc.Exists(i.Content))
            {
                Instruction ins = await _insSvc.Create(i);
                instructions.Add(ins);
            }
        });

        dto.Ingredients.ForEach(async i => {
            Item item;
            if(i.ItemId == 0 || (i.Item != null && !await _iSvc.Exists(i.Item.Name)))
            {
                ItemDto dto = _mapper.Map<ItemDto>(i.Item);
                item = await _iSvc.Create(dto);
            }

            MeasurementType mt;
            if(i.MeasurementTypeId == 0 || (i.MeasurementType != null && !await _mtSvc.Exists(i.MeasurementType.Name)))
            {
                MeasurementTypeDto dto = _mapper.Map<MeasurementTypeDto>(i.MeasurementType);
                mt = await _mtSvc.Create(dto);
            }
            Ingredient ing = await _ingSvc.Create(i);
            ingredients.Add(ing);
        });

        RecipeDto rDto = new RecipeDto{
            Title = dto.Title,
            Description = dto.Description,
            Instructions = instructions,
            Ingredients = ingredients,
            ChefId = chef.Id,
        };
        Recipe r = await _rSvc.Create(rDto);

        if(r == null)
        {
            ModelState.AddModelError("error", "Error in Creation.");
            return BadRequest(ModelState);
        }    
        return Ok(r);
        // return CreatedAtAction("Recipe", new { id = r.Id }, r);
    }
}