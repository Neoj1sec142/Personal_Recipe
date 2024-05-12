using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Service.IService;

namespace PersonalCore.Service;
public class RecipeService : IRecipeService
{
    public RecipeService()
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