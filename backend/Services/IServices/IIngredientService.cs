using backend.Models;

namespace backend.Services.IServices;
public interface IIngredientService
{
    Task<IEnumerable<Ingredient>> GetAllIngredientsAsync(int recipeId);
    Task<Ingredient> GetIngredientByIdAsync(int id);
    Task<Ingredient> CreateIngredientAsync(Ingredient ingredient);
    Task UpdateIngredientAsync(Ingredient ingredient);
    Task DeleteIngredientAsync(Ingredient ingredient);
}