using PersonalCore.Models;
using PersonalCore.Models.Dto;

namespace PersonalCore.Repository.IRepository;
public interface IIngredientRepository
{
    Task<Ingredient> Create(IngredientDto dto);
    Task<Ingredient> Get(int id);
    Task<List<Ingredient>> GetAll(ListParams listParams);
    Task<bool> Update(Ingredient dto);
    Task<bool> Delete(int id);
    Task<bool> Exists(int id);
    Task<bool> Exists(int itemId, int mtId, int amount);
}