
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Service.IService;

namespace PersonalCore.Controllers;
[Route("api/[controller]")]
[ApiController]
public class MeasurementTypeController : ControllerBase
{
    private readonly IMeasurementTypeService _mtSvc;
    public MeasurementTypeController(IMeasurementTypeService mtSvc)
    {
        _mtSvc = mtSvc;
    }

    // GET: api/meaurementtype
    [HttpGet]
    public async Task<ActionResult<List<MeasurementType>>> GetAll(ListParams listParams)
    {
        List<MeasurementType> objs = await _mtSvc.GetAll(listParams);
        return Ok(objs);
    }


    // GET: api/chef/5
    [HttpGet("{id}")]
    public async Task<ActionResult<MeasurementType>> Get(int id)
    {
       MeasurementType c = await _mtSvc.Get(id);
       if(c == null)
       {
            ModelState.AddModelError("error", $"Instance not found with ID {id}.");
            return BadRequest(ModelState);
       }
       return Ok(c);
    }

    // POST: api/chef
    [HttpPost]
    public async Task<ActionResult<MeasurementType>> Post(MeasurementTypeDto dto)
    {
        if (!ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        MeasurementType c = await _mtSvc.Create(dto);
        if(c == null)
        {
            ModelState.AddModelError("error", "Error in Creation.");
            return BadRequest(ModelState);
        }    

        return CreatedAtAction("MeasurementType", new { id = c.Id }, c);
    }

    // PUT: api/chef/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, MeasurementType c)
    {
        if (id != c.Id || !ModelState.IsValid)
        {
            ModelState.AddModelError("error", "ModelState is NOT valid.");
            return BadRequest(ModelState);
        }
        try
        {
            await _mtSvc.Update(c);
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!await _mtSvc.Exists(id))
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
        MeasurementType c = await _mtSvc.Get(id);
        if (c == null)
        {
            ModelState.AddModelError("error", "Note Not Found.");
            return BadRequest(ModelState);
        }
        if(await _mtSvc.Delete(id))
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