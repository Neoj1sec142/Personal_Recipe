
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Service.IService;

namespace PersonalCore.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ChefController : ControllerBase
{
    private readonly IChefService _cSvc;
    public ChefController(IChefService cSvc)
    {
        _cSvc = cSvc;
    }

    // GET: api/chef
    [HttpGet]
    public async Task<ActionResult<List<Chef>>> GetAll([FromQuery] ListParams listParams)
    {
        List<Chef> objs = await _cSvc.GetAll(listParams);
        return Ok(objs);
    }


    // GET: api/chef/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Chef>> Get(int id)
    {
       Chef c = await _cSvc.Get(id);
       if(c == null)
       {
            ModelState.AddModelError("error", $"Instance not found with ID {id}.");
            return BadRequest(ModelState);
       }
       return Ok(c);
    }

    // POST: api/chef
    [HttpPost]
    public async Task<ActionResult<Chef>> Post(ChefDto dto)
    {
        if (!ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        Chef c = await _cSvc.Create(dto);
        if(c == null)
        {
            ModelState.AddModelError("error", "Error in Creation.");
            return BadRequest(ModelState);
        }    
        return Ok(c);
        // return CreatedAtAction("Chef", new { id = c.Id }, c);
    }

    // PUT: api/chef/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Chef c)
    {
        if (id != c.Id || !ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        try
        {
            await _cSvc.Update(c);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await _cSvc.Exists(id))
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
        Chef c = await _cSvc.Get(id);
        if (c == null)
        {
            ModelState.AddModelError("error", "Note Not Found.");
            return BadRequest(ModelState);
        }
        if(await _cSvc.Delete(id))
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