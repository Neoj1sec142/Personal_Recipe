using backend.Models;

namespace backend.Repository.IRepository;
public interface IIngredientRepository
{
    Task<IEnumerable<Ingredient>> GetAllIngredientsAsync(int recipeId);
    Task<Ingredient> GetIngredientByIdAsync(int id);
    Task<Ingredient> CreateIngredientAsync(Ingredient ingredient);
    Task UpdateIngredientAsync(Ingredient ingredient);
    Task DeleteIngredientAsync(Ingredient ingredient);
}