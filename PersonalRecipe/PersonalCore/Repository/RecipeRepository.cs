using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;

namespace PersonalCore.Repository;
public class RecipeRepository : IRecipeRepository
{
    public RecipeRepository()
    {
        
    }
    public Task<Recipe> Create(RecipeDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Delete(RecipeDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Exists(int id)
    {
        throw new NotImplementedException();
    }

    public Task<Recipe> Get(int id)
    {
        throw new NotImplementedException();
    }

    public Task<List<Recipe>> GetAll(ListParams listParams)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Update(Recipe dto)
    {
        throw new NotImplementedException();
    }
}