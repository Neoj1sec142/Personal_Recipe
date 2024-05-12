using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;

namespace PersonalCore.Repository;
public class ItemRepository : IItemRepository
{
    public ItemRepository()
    {
        
    }
    public Task<Item> Create(ItemDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Delete(ItemDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Exists(int id)
    {
        throw new NotImplementedException();
    }

    public Task<Item> Get(int id)
    {
        throw new NotImplementedException();
    }

    public Task<List<Item>> GetAll(ListParams listParams)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Update(Item dto)
    {
        throw new NotImplementedException();
    }
}