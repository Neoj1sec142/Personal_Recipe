using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Data;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;

namespace PersonalCore.Repository;
public class ChefRepository : IChefRepository
{
    private readonly RecipeContext _db;
    private IMapper _mapper;
    public ChefRepository(IMapper mapper, RecipeContext db)
    {
        _mapper = mapper;
        _db = db;
    }

    public async Task<Chef> Create(ChefDto dto)
    {
        Chef c = _mapper.Map<Chef>(dto);
        await _db.Chefs.AddAsync(c);
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
        Chef c = await _db.Chefs.FirstOrDefaultAsync(x => x.Id == id);
        if(c != null)
        {
            _db.Chefs.Remove(c);
            return await Save();
        }
        else
        {
            return false;
        }
    }

    public async Task<bool> Exists(int id)
    {
        return await _db.Chefs.AnyAsync(c => c.Id == id);
    }

    public async Task<bool> Exists(string name)
    {
        return await _db.Chefs.AnyAsync(c => c.Name.ToLower() == name.ToLower());   
    }

    public async Task<Chef> Get(int id)
    {
        return await _db.Chefs.FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<Chef>> GetAll(ListParams listParams)
    {
        return await  _db.Chefs.ToListAsync();
    }

    public async Task<bool> Update(Chef dto)
    {
        Chef existing = await _db.Chefs.FirstOrDefaultAsync(x => x.Id == dto.Id);
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