using PersonalCore.Models;
using PersonalCore.Models.Dto;

namespace PersonalCore.Service.IService;
public interface IItemService
{
    Task<Item> Create(ItemDto dto);
    Task<Item> Get(int id);
    Task<List<Item>> GetAll(ListParams listParams);
    Task<bool> Update(Item dto);
    Task<bool> Delete(ItemDto dto);
    Task<bool> Exists(int id);
}