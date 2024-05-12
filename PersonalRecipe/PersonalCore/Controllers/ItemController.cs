
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace PersonalCore.Controllers;
[Route("api/[controller]")]
[ApiController]
public class ItemController : ControllerBase
{

    public ItemController()
    {
        
    }

    // // GET: api/<>
    // [HttpGet]
    // public async Task<ActionResult<List<>>> Get()
    // {
        
    // }


    // // GET: api/<>/5
    // [HttpGet("{id}")]
    // public async Task<ActionResult<>> Get(int id)
    // {
       
    // }

    // // POST: api/<>
    // [HttpPost]
    // public async Task<ActionResult<>> Post()
    // {
    //     if (!ModelState.IsValid)
    //     {
    //         ModelState.AddModelError("error", "ModelState is NOT valid.");
    //         return BadRequest(ModelState);
    //     }
        

    //     // return CreatedAtAction("Note", new { id = note.Id }, note);
    // }

    // // PUT: api/<>/5
    // [HttpPut("{id}")]
    // public async Task<IActionResult> Put(int id, Note note)
    // {
    //     if (id != note.Id || !ModelState.IsValid)
    //     {
    //         ModelState.AddModelError("error", "ModelState is NOT valid.");
    //         return BadRequest(ModelState);
    //     }
    //     try
    //     {
    //         await _noteSvc.Update(note);
    //     }
    //     catch (DbUpdateConcurrencyException)
    //     {
    //         if (!await _noteSvc.Exists(id))
    //         {
    //             return NotFound();
    //         }
    //     }

    //     return NoContent();
    // }

    // // DELETE: api/<>/5
    // [HttpDelete("{id}")]
    // public async Task<IActionResult> DeleteNote(int id)
    // {
    //     var note = await _noteSvc.Get(id);
    //     if (note == null)
    //     {
    //         ModelState.AddModelError("error", "Note Not Found.");
    //         return BadRequest(ModelState);
    //     }
    //     if(await _noteSvc.Delete(id))
    //     {
    //         return Ok();
    //     }
    //     else
    //     {
    //         ModelState.AddModelError("error", "Error In Deleting");
    //         return BadRequest(ModelState);
    //     }
        
    // }
}