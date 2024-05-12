using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Data;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;

namespace PersonalCore.Repository;
public class InstructionRepository : IInstructionRepository
{
    private readonly RecipeContext _db;
    private IMapper _mapper;
    public InstructionRepository(IMapper mapper, RecipeContext db)
    {
        _mapper = mapper;
        _db = db;
    }
    
    public async Task<Instruction> Create(InstructionDto dto)
    {
        Instruction c = _mapper.Map<Instruction>(dto);
        await _db.Instructions.AddAsync(c);
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
        Instruction c = await _db.Instructions.FirstOrDefaultAsync(x => x.Id == id);
        if(c != null)
        {
            _db.Instructions.Remove(c);
            return await Save();
        }
        else
        {
            return false;
        }
    }

    public async Task<bool> Exists(int id)
    {
        return await _db.Instructions.AnyAsync(c => c.Id == id);
    }

    public async Task<bool> Exists(string content)
    {
        return await _db.Instructions.AnyAsync(c => c.Content.ToLower() == content.ToLower());
    }

    public async Task<Instruction> Get(int id)
    {
        return await _db.Instructions.FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<Instruction>> GetAll(ListParams listParams)
    {
        return await _db.Instructions.ToListAsync();
    }

    public async Task<bool> Update(Instruction dto)
    {
        Instruction existing = await _db.Instructions.FirstOrDefaultAsync(x => x.Id == dto.Id);
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