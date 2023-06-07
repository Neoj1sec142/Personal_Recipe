
using backend.Models;
using backend.Repository.IRepository;
using backend.Services.IServices;

namespace backend.Services;
public class IngredientService : IIngredientService
{
    private readonly IIngredientRepository _iRepo;
    public IngredientService(IIngredientRepository iRepo)
    {
        _iRepo = iRepo;
    }
    public async Task<Ingredient> CreateIngredientAsync(Ingredient ingredient)
    {
        return await _iRepo.CreateIngredientAsync(ingredient);
    }

    public async Task DeleteIngredientAsync(Ingredient ingredient)
    {
        await _iRepo.DeleteIngredientAsync(ingredient);
    }

    public async Task<IEnumerable<Ingredient>> GetAllIngredientsAsync(int recipeId)
    {
        return await _iRepo.GetAllIngredientsAsync(recipeId);
    }

    public async Task<Ingredient> GetIngredientByIdAsync(int id)
    {
        return await _iRepo.GetIngredientByIdAsync(id);
    }

    public async Task UpdateIngredientAsync(Ingredient ingredient)
    {
        await _iRepo.UpdateIngredientAsync(ingredient);
    }
}