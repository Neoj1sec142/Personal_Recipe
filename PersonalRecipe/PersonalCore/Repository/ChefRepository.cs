using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;

namespace PersonalCore.Repository;
public class ChefRepository : IChefRepository
{
    public ChefRepository()
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