using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Service.IService;

namespace PersonalCore.Service;
public class ChefService : IChefService
{
    public ChefService()
    {
        
    }
    public Task<Chef> Create(ChefDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Delete(ChefDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Exists(int id)
    {
        throw new NotImplementedException();
    }

    public Task<Chef> Get(int id)
    {
        throw new NotImplementedException();
    }

    public Task<List<Chef>> GetAll(ListParams listParams)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Update(Chef dto)
    {
        throw new NotImplementedException();
    }
}