using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;
using PersonalCore.Service.IService;

namespace PersonalCore.Service;
public class ItemService : IItemService
{
    private readonly IItemRepository _itemRepo;
    public ItemService(IItemRepository itemRepo)
    {
        _itemRepo = itemRepo;
    }
    public async Task<Item> Create(ItemDto dto)
    {
        return await _itemRepo.Create(dto);
    }

    public async Task<bool> Delete(int id)
    {
        return await _itemRepo.Delete(id);
    }

    public async Task<bool> Exists(int id)
    {
        return await _itemRepo.Exists(id);
    }

    public async Task<bool> Exists(string name)
    {
        return await _itemRepo.Exists(name);
    }

    public async Task<Item> Get(int id)
    {
        return await _itemRepo.Get(id);
    }

    public async Task<List<Item>> GetAll(ListParams listParams)
    {
        return await _itemRepo.GetAll(listParams);
    }

    public async Task<bool> Update(Item dto)
    {
        return await _itemRepo.Update(dto);
    }
}