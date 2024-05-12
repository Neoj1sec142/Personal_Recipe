using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Data;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;

namespace PersonalCore.Repository;
public class IngredientRepository : IIngredientRepository
{
    private readonly RecipeContext _db;
    private IMapper _mapper;
    public IngredientRepository(IMapper mapper, RecipeContext db)
    {
        _mapper = mapper;
        _db = db;
    }
    public async Task<Ingredient> Create(IngredientDto dto)
    {
        Ingredient c = _mapper.Map<Ingredient>(dto);
        await _db.Ingredients.AddAsync(c);
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
        Ingredient c = await _db.Ingredients.FirstOrDefaultAsync(x => x.Id == id);
        if(c != null)
        {
            _db.Ingredients.Remove(c);
            return await Save();
        }
        else
        {
            return false;
        }
    } 

    public async Task<bool> Exists(int id)
    {
        return await _db.Ingredients.AnyAsync(c => c.Id == id);
    }

    public async Task<Ingredient> Get(int id)
    {
        return await _db.Ingredients.FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<Ingredient>> GetAll(ListParams listParams)
    {
        return await  _db.Ingredients.ToListAsync();
    }

    public async Task<bool> Update(Ingredient dto)
    {
        Ingredient existing = await _db.Ingredients.FirstOrDefaultAsync(x => x.Id == dto.Id);
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