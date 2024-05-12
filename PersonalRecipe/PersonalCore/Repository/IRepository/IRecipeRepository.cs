using PersonalCore.Models;
using PersonalCore.Models.Dto;

namespace PersonalCore.Repository.IRepository;
public interface IRecipeRepository
{
    Task<Recipe> Create(RecipeDto dto);
    Task<Recipe> Get(int id);
    Task<List<Recipe>> GetAll(ListParams listParams);
    Task<bool> Update(Recipe dto);
    Task<bool> Delete(int id);
    Task<bool> Exists(int id);
}