using PersonalCore.Models;
using PersonalCore.Models.Dto;

namespace PersonalCore.Service.IService;
public interface IChefService
{
    Task<Chef> Create(ChefDto dto);
    Task<Chef> Get(int id);
    Task<List<Chef>> GetAll(ListParams listParams);
    Task<bool> Update(Chef dto);
    Task<bool> Delete(ChefDto dto);
    Task<bool> Exists(int id);
}