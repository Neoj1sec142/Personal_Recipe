using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Data;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;

namespace PersonalCore.Repository;
public class ItemRepository : IItemRepository
{
    private readonly RecipeContext _db;
    private IMapper _mapper;
    public ItemRepository(IMapper mapper, RecipeContext db)
    {
        _mapper = mapper;
        _db = db;
    }
    
    public async Task<Item> Create(ItemDto dto)
    {
        Item c = _mapper.Map<Item>(dto);
        await _db.Items.AddAsync(c);
        if(await Save())
        {
            return c;
        }
        else
        {
            return null;
        }
    }

    public async Task<bool> Delete(int id)
    {
        Item c = await _db.Items.FirstOrDefaultAsync(x => x.Id == id);
        if(c != null)
        {
            _db.Items.Remove(c);
            return await Save();
        }
        else
        {
            return false;
        }
    }

    public async Task<bool> Exists(int id)
    {
        return await _db.Items.AnyAsync(c => c.Id == id);
    }

    public async Task<Item> Get(int id)
    {
        return await _db.Items.FirstOrDefaultAsync(c => c.Id == id);
    }

    public Task<List<Item>> GetAll(ListParams listParams)
    {
        return _db.Items.ToListAsync();
    }

    public async Task<bool> Update(Item dto)
    {
        Item existing = await _db.Items.FirstOrDefaultAsync(x => x.Id == dto.Id);
        if(existing != null)
        {
            _mapper.Map(dto, existing);
            _db.Update(existing);
            return await Save();
        }
        else
        {
            return false;
        }
    }

    private async Task<bool> Save()
    {
        return await _db.SaveChangesAsync() > 0;
    }
}