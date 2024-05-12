using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;
using PersonalCore.Service.IService;

namespace PersonalCore.Service;
public class RecipeService : IRecipeService
{
    private readonly IRecipeRepository _rRepo;
    public RecipeService(IRecipeRepository rRepo)
    {
        _rRepo = rRepo;
    }
    public async Task<Recipe> Create(RecipeDto dto)
    {
        return await _rRepo.Create(dto);
    }

    public async Task<bool> Delete(int id)
    {
        return await _rRepo.Delete(id);
    }

    public async Task<bool> Exists(int id)
    {
        return await _rRepo.Exists(id);
    }

    public async Task<Recipe> Get(int id)
    {
        return await _rRepo.Get(id);
    }

    public async Task<List<Recipe>> GetAll(ListParams listParams)
    {
        return await _rRepo.GetAll(listParams);
    }

    public async Task<bool> Update(Recipe dto)
    {
        return await _rRepo.Update(dto);
    }
}