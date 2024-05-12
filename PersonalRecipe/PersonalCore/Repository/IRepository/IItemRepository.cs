using PersonalCore.Models;
using PersonalCore.Models.Dto;

namespace PersonalCore.Repository.IRepository;
public interface IItemRepository
{
    Task<Item> Create(ItemDto dto);
    Task<Item> Get(int id);
    Task<List<Item>> GetAll(ListParams listParams);
    Task<bool> Update(Item dto);
    Task<bool> Delete(ItemDto dto);
    Task<bool> Exists(int id);
}