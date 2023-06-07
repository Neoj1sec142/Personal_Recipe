using backend.Models;
using backend.Services.IServices;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class IngredientsController : ControllerBase
{
    private readonly IIngredientService _ingredientService;

    public IngredientsController(IIngredientService ingredientService)
    {
        _ingredientService = ingredientService;
    }

    // GET: ingredients?recipeId={recipeId}
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Ingredient>>> GetAllIngredientsAsync([FromQuery] int recipeId)
    {
        var ingredients = await _ingredientService.GetAllIngredientsAsync(recipeId);
        return Ok(ingredients);
    }

    // GET: ingredients/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Ingredient>> GetIngredientByIdAsync(int id)
    {
        var ingredient = await _ingredientService.GetIngredientByIdAsync(id);
        if (ingredient == null)
        {
            return NotFound();
        }
        return Ok(ingredient);
    }

    // POST: ingredients
    [HttpPost]
    public async Task<ActionResult<Ingredient>> CreateIngredientAsync(Ingredient ingredient)
    {
        var createdIngredient = await _ingredientService.CreateIngredientAsync(ingredient);
        return CreatedAtAction(nameof(GetIngredientByIdAsync), new { id = createdIngredient.IngredientId }, createdIngredient);
    }

    // PUT: ingredients/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateIngredientAsync(int id, Ingredient ingredient)
    {
        if (id != ingredient.IngredientId)
        {
            return BadRequest();
        }

        await _ingredientService.UpdateIngredientAsync(ingredient);

        return NoContent();
    }

    // DELETE: ingredients/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteIngredientAsync(int id)
    {
        var ingredient = await _ingredientService.GetIngredientByIdAsync(id);
        if (ingredient == null)
        {
            return NotFound();
        }

        await _ingredientService.DeleteIngredientAsync(ingredient);

        return NoContent();
    }
}

