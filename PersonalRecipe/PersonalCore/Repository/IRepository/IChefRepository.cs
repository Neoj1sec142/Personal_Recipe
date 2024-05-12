using PersonalCore.Models;
using PersonalCore.Models.Dto;

namespace PersonalCore.Repository.IRepository;
public interface IChefRepository
{
    Task<Chef> Create(ChefDto dto);
    Task<Chef> Get(int id);
    Task<List<Chef>> GetAll(ListParams listParams);
    Task<bool> Update(Chef dto);
    Task<bool> Delete(ChefDto dto);
    Task<bool> Exists(int id);
}