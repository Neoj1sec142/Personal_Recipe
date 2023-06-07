using backend.Models;

namespace backend.Repository.IRepository;
public interface IRecipeRepository
{
    Task<IEnumerable<Recipe>> GetAllRecipesAsync();
    Task<Recipe> GetRecipeByIdAsync(int id);
    Task<Recipe> CreateRecipeAsync(Recipe recipe);
    Task UpdateRecipeAsync(Recipe recipe);
    Task DeleteRecipeAsync(Recipe recipe);
}