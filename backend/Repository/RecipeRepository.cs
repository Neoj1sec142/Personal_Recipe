

using backend.Data;
using backend.Models;
using backend.Repository.IRepository;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository;
public class RecipeRepository : IRecipeRepository
{
    private readonly DataBaseContext _db;
    public RecipeRepository(DataBaseContext db)
    {
        _db = db;
    }
    public async Task<Recipe> CreateRecipeAsync(Recipe recipe)
    {
        _db.Recipes.Add(recipe);
        await _db.SaveChangesAsync();
        return recipe;
    }

    public async Task DeleteRecipeAsync(Recipe recipe)
    {
        _db.Recipes.Remove(recipe);
        await _db.SaveChangesAsync();
    }

    public async Task<IEnumerable<Recipe>> GetAllRecipesAsync()
    {
        return await Task.Run(() => _db.Recipes.AsEnumerable());
    }

    public async Task<Recipe> GetRecipeByIdAsync(int id)
    {
        return await _db.Recipes.FindAsync(id);
    }

    public async Task UpdateRecipeAsync(Recipe recipe)
    {
        _db.Entry(recipe).State = EntityState.Modified;
        await _db.SaveChangesAsync();
    }
}