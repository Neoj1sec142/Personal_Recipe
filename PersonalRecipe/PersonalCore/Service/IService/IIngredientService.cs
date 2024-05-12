using PersonalCore.Models;
using PersonalCore.Models.Dto;

namespace PersonalCore.Service.IService;
public interface IIngredientService
{
    Task<Ingredient> Create(IngredientDto dto);
    Task<Ingredient> Get(int id);
    Task<List<Ingredient>> GetAll(ListParams listParams);
    Task<bool> Update(Ingredient dto);
    Task<bool> Delete(IngredientDto dto);
    Task<bool> Exists(int id);
}