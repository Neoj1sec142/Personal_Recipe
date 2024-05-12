using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;
using PersonalCore.Service.IService;

namespace PersonalCore.Service;
public class IngredientService : IIngredientService
{
    private readonly IIngredientRepository _ingRepo;
    public IngredientService(IIngredientRepository ingRepo)
    {
        _ingRepo = ingRepo;
    }
    public async Task<Ingredient> Create(IngredientDto dto)
    {
        return await _ingRepo.Create(dto);
    }

    public async Task<bool> Delete(int id)
    {
        return await _ingRepo.Delete(id);
    }

    public async Task<bool> Exists(int id)
    {
        return await _ingRepo.Exists(id);
    }

    public async Task<Ingredient> Get(int id)
    {
        return await _ingRepo.Get(id);
    }

    public async Task<List<Ingredient>> GetAll(ListParams listParams)
    {
        return await _ingRepo.GetAll(listParams);
    }

    public async Task<bool> Update(Ingredient dto)
    {
        return await _ingRepo.Update(dto);
    }
}