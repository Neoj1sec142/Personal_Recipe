using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;
using PersonalCore.Service.IService;

namespace PersonalCore.Service;
public class ChefService : IChefService
{
    private readonly IChefRepository _cRepo;
    public ChefService(IChefRepository cRepo)
    {
        _cRepo = cRepo;
    }
    public async Task<Chef> Create(ChefDto dto)
    {
        return await _cRepo.Create(dto);
    }

    public async Task<bool> Delete(int id)
    {
        return await _cRepo.Delete(id);
    }

    public async Task<bool> Exists(int id)
    {
        return await _cRepo.Exists(id);
    }

    public async Task<Chef> Get(int id)
    {
        return await _cRepo.Get(id);
    }

    public async Task<List<Chef>> GetAll(ListParams listParams)
    {
        return await _cRepo.GetAll(listParams);
    }

    public async Task<bool> Update(Chef dto)
    {
        return await _cRepo.Update(dto);
    }
}