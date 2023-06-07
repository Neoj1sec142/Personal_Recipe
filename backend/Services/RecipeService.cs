
using backend.Models;
using backend.Repository.IRepository;
using backend.Services.IServices;

namespace backend.Services;
public class RecipeService : IRecipeService
{
    private readonly IRecipeRepository _repo;
    public RecipeService(IRecipeRepository repo)
    {
        _repo = repo;
    }
    public async Task<Recipe> CreateRecipeAsync(Recipe recipe)
    {
        return await _repo.CreateRecipeAsync(recipe);
    }

    public async Task DeleteRecipeAsync(Recipe recipe)
    {
        await _repo.DeleteRecipeAsync(recipe);
    }

    public async Task<IEnumerable<Recipe>> GetAllRecipesAsync()
    {
        return await _repo.GetAllRecipesAsync();
    }

    public async Task<Recipe> GetRecipeByIdAsync(int id)
    {
        return await _repo.GetRecipeByIdAsync(id);
    }

    public async Task UpdateRecipeAsync(Recipe recipe)
    {
        await _repo.UpdateRecipeAsync(recipe);
    }
}