
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Service.IService;

namespace PersonalCore.Controllers;
[Route("api/[controller]")]
[ApiController]
public class InstructionController : ControllerBase
{
private readonly IInstructionService _insSvc;
    public InstructionController(IInstructionService insSvc)
    {
        _insSvc = insSvc;
    }

    // GET: api/chef
    [HttpGet]
    public async Task<ActionResult<List<Instruction>>> GetAll(ListParams listParams)
    {
        List<Instruction> objs = await _insSvc.GetAll(listParams);
        return Ok(objs);
    }


    // GET: api/chef/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Instruction>> Get(int id)
    {
       Instruction c = await _insSvc.Get(id);
       if(c == null)
       {
            ModelState.AddModelError("error", $"Instance not found with ID {id}.");
            return BadRequest(ModelState);
       }
       return Ok(c);
    }

    // POST: api/chef
    [HttpPost]
    public async Task<ActionResult<Instruction>> Post(InstructionDto dto)
    {
        if (!ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        Instruction c = await _insSvc.Create(dto);
        if(c == null)
        {
            ModelState.AddModelError("error", "Error in Creation.");
            return BadRequest(ModelState);
        }    

        return CreatedAtAction("Instruction", new { id = c.Id }, c);
    }

    // PUT: api/chef/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Instruction c)
    {
        if (id != c.Id || !ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        try
        {
            await _insSvc.Update(c);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await _insSvc.Exists(id))
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
        Instruction c = await _insSvc.Get(id);
        if (c == null)
        {
            ModelState.AddModelError("error", "Note Not Found.");
            return BadRequest(ModelState);
        }
        if(await _insSvc.Delete(id))
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