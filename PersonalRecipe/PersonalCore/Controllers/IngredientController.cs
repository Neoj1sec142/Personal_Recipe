
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Service.IService;

namespace PersonalCore.Controllers;
[Route("api/[controller]")]
[ApiController]
public class IngredientController : ControllerBase
{
private readonly IIngredientService _ingSvc;
    public IngredientController(IIngredientService ingSvc)
    {
        _ingSvc = ingSvc;
    }

    // GET: api/chef
    [HttpGet]
    public async Task<ActionResult<List<Ingredient>>> GetAll([FromQuery] ListParams listParams)
    {
        List<Ingredient> objs = await _ingSvc.GetAll(listParams);
        return Ok(objs);
    }


    // GET: api/chef/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Ingredient>> Get(int id)
    {
       Ingredient c = await _ingSvc.Get(id);
       if(c == null)
       {
            ModelState.AddModelError("error", $"Instance not found with ID {id}.");
            return BadRequest(ModelState);
       }
       return Ok(c);
    }

    // POST: api/chef
    [HttpPost]
    public async Task<ActionResult<Ingredient>> Post(IngredientDto dto)
    {
        if (!ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        Ingredient c = await _ingSvc.Create(dto);
        if(c == null)
        {
            ModelState.AddModelError("error", "Error in Creation.");
            return BadRequest(ModelState);
        }    
        return Ok(c);
        // return CreatedAtAction("Ingredient", new { id = c.Id }, c);
    }

    // PUT: api/chef/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Ingredient c)
    {
        if (id != c.Id || !ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        try
        {
            await _ingSvc.Update(c);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await _ingSvc.Exists(id))
            {
                return NotFound();
            }
        }

        return NoContent();
    }

    // DELETE: api/chef/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteNote(int id)
    {
        Ingredient c = await _ingSvc.Get(id);
        if (c == null)
        {
            ModelState.AddModelError("error", "Note Not Found.");
            return BadRequest(ModelState);
        }
        if(await _ingSvc.Delete(id))
        {
            return Ok();
        }
        else
        {
            ModelState.AddModelError("error", "Error In Deleting");
            return BadRequest(ModelState);
        }
        
    }
}