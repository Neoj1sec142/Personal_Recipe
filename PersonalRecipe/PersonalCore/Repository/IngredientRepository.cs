using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;

namespace PersonalCore.Repository;
public class IngredientRepository : IIngredientRepository
{
    public IngredientRepository()
    {
        
    }
    public Task<Ingredient> Create(IngredientDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Delete(IngredientDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Exists(int id)
    {
        throw new NotImplementedException();
    }

    public Task<Ingredient> Get(int id)
    {
        throw new NotImplementedException();
    }

    public Task<List<Ingredient>> GetAll(ListParams listParams)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Update(Ingredient dto)
    {
        throw new NotImplementedException();
    }
}