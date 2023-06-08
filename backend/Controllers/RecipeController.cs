using backend.Models;
using backend.Services.IServices;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace YourNamespace.Controllers;

[ApiController]
[Route("[controller]")]
public class RecipesController : ControllerBase
{
    private readonly IRecipeService _recipeService;

    public RecipesController(IRecipeService recipeService)
    {
        _recipeService = recipeService;
    }

    // GET: api/recipes
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Recipe>>> GetAllRecipesAsync()
    {
        var recipes = await _recipeService.GetAllRecipesAsync();
        return Ok(recipes);
    }

    // GET: api/recipes/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Recipe>> GetRecipeByIdAsync(int id)
    {
        var recipe = await _recipeService.GetRecipeByIdAsync(id);
        if (recipe == null)
        {
            return NotFound();
        }
        return Ok(recipe);
    }

    // POST: api/recipes
    [HttpPost]
    public async Task<ActionResult<Recipe>> CreateRecipeAsync(Recipe recipe)
    {
        var createdRecipe = await _recipeService.CreateRecipeAsync(recipe);
        return CreatedAtAction(nameof(GetRecipeByIdAsync), new { id = createdRecipe.RecipeId }, createdRecipe);
    }

    // PUT: api/recipes/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateRecipeAsync(int id, Recipe recipe)
    {
        if (id != recipe.RecipeId)
        {
            return BadRequest();
        }

        await _recipeService.UpdateRecipeAsync(recipe);

        return NoContent();
    }

    // DELETE: api/recipes/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRecipeAsync(int id)
    {
        var recipe = await _recipeService.GetRecipeByIdAsync(id);
        if (recipe == null)
        {
            return NotFound();
        }

        await _recipeService.DeleteRecipeAsync(recipe);

        return NoContent();
    }
}

