using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PersonalCore.Data;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;

namespace PersonalCore.Repository;
public class MeasurementTypeRepository : IMeasurementTypeRepository
{
    private readonly RecipeContext _db;
    private IMapper _mapper;
    public MeasurementTypeRepository(IMapper mapper, RecipeContext db)
    {
        _mapper = mapper;
        _db = db;
    }
    
    public async Task<MeasurementType> Create(MeasurementTypeDto dto)
    {
        MeasurementType c = _mapper.Map<MeasurementType>(dto);
        await _db.MeasurementTypes.AddAsync(c);
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
        MeasurementType c = await _db.MeasurementTypes.FirstOrDefaultAsync(x => x.Id == id);
        if(c != null)
        {
            _db.MeasurementTypes.Remove(c);
            return await Save();
        }
        else
        {
            return false;
        }
    }

    public async Task<bool> Exists(int id)
    {
        return await _db.MeasurementTypes.AnyAsync(c => c.Id == id);
    }

    public async Task<bool> Exists(string name)
    {
        return await _db.MeasurementTypes.AnyAsync(c => c.Name.ToLower() == name.ToLower());   
    }

    public async Task<MeasurementType> Get(int id)
    {
        return await _db.MeasurementTypes.FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<List<MeasurementType>> GetAll(ListParams listParams)
    {
        return await  _db.MeasurementTypes.ToListAsync();
    }

    public async Task<bool> Update(MeasurementType dto)
    {
        MeasurementType existing = await _db.MeasurementTypes.FirstOrDefaultAsync(x => x.Id == dto.Id);
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