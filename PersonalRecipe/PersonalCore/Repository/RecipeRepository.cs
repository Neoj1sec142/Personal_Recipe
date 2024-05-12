using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Data;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;

namespace PersonalCore.Repository;
public class RecipeRepository : IRecipeRepository
{
    private readonly RecipeContext _db;
    private IMapper _mapper;
    public RecipeRepository(IMapper mapper, RecipeContext db)
    {
        _mapper = mapper;
        _db = db;
    }
    
    public async Task<Recipe> Create(RecipeDto dto)
    {
        Recipe c = _mapper.Map<Recipe>(dto);
        await _db.Recipes.AddAsync(c);
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
        Recipe c = await _db.Recipes.FirstOrDefaultAsync(x => x.Id == id);
        if(c != null)
        {
            _db.Recipes.Remove(c);
            return await Save();
        }
        else
        {
            return false;
        }
    }

    public async Task<bool> Exists(int id)
    {
        return await _db.Recipes.AnyAsync(c => c.Id == id);
    }

    public async Task<Recipe> Get(int id)
    {
        return await _db.Recipes.FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<Recipe>> GetAll(ListParams listParams)
    {
        return await _db.Recipes.ToListAsync();
    }

    public async Task<bool> Update(Recipe dto)
    {
        Recipe existing = await _db.Recipes.FirstOrDefaultAsync(x => x.Id == dto.Id);
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