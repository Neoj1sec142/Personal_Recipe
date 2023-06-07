using backend.Models;

namespace backend.Services.IServices;
public interface IRecipeService
{
    Task<IEnumerable<Recipe>> GetAllRecipesAsync();
    Task<Recipe> GetRecipeByIdAsync(int id);
    Task<Recipe> CreateRecipeAsync(Recipe recipe);
    Task UpdateRecipeAsync(Recipe recipe);
    Task DeleteRecipeAsync(Recipe recipe);
}