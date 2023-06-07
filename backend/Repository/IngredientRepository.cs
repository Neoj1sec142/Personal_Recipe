using backend.Data;
using backend.Models;
using backend.Repository.IRepository;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository;
public class IngredientRepository : IIngredientRepository
{
    private readonly DataBaseContext _dbContext;

    public IngredientRepository(DataBaseContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<IEnumerable<Ingredient>> GetAllIngredientsAsync(int recipeId)
    {
        return await Task.Run(() => _dbContext.Ingredients.Where(i => i.RecipeId == recipeId).AsEnumerable());
    }

    public async Task<Ingredient> GetIngredientByIdAsync(int id)
    {
        return await _dbContext.Ingredients.FindAsync(id);
    }

    public async Task<Ingredient> CreateIngredientAsync(Ingredient ingredient)
    {
        _dbContext.Ingredients.Add(ingredient);
        await _dbContext.SaveChangesAsync();
        return ingredient;
    }

    public async Task UpdateIngredientAsync(Ingredient ingredient)
    {
        _dbContext.Entry(ingredient).State = EntityState.Modified;
        await _dbContext.SaveChangesAsync();
    }

    public async Task DeleteIngredientAsync(Ingredient ingredient)
    {
        _dbContext.Ingredients.Remove(ingredient);
        await _dbContext.SaveChangesAsync();
    }
}