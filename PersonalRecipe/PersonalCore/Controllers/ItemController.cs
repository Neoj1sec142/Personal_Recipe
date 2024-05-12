
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Service.IService;

namespace PersonalCore.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ItemController : ControllerBase
{
    private readonly IItemService _iSvc;
    public ItemController(IItemService iSvc)
    {
        _iSvc = iSvc;
    }

    // GET: api/chef
    [HttpGet]
    public async Task<ActionResult<List<Item>>> GetAll(ListParams listParams)
    {
        List<Item> objs = await _iSvc.GetAll(listParams);
        return Ok(objs);
    }


    // GET: api/chef/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Item>> Get(int id)
    {
       Item c = await _iSvc.Get(id);
       if(c == null)
       {
            ModelState.AddModelError("error", $"Instance not found with ID {id}.");
            return BadRequest(ModelState);
       }
       return Ok(c);
    }

    // POST: api/chef
    [HttpPost]
    public async Task<ActionResult<Item>> Post(ItemDto dto)
    {
        if (!ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        Item c = await _iSvc.Create(dto);
        if(c == null)
        {
            ModelState.AddModelError("error", "Error in Creation.");
            return BadRequest(ModelState);
        }    

        return CreatedAtAction("Item", new { id = c.Id }, c);
    }

    // PUT: api/chef/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Item c)
    {
        if (id != c.Id || !ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        try
        {
            await _iSvc.Update(c);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await _iSvc.Exists(id))
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
        Item c = await _iSvc.Get(id);
        if (c == null)
        {
            ModelState.AddModelError("error", "Note Not Found.");
            return BadRequest(ModelState);
        }
        if(await _iSvc.Delete(id))
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