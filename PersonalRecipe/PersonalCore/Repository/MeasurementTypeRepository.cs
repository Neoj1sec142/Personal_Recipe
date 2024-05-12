using AutoMapper;
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
    
    public Task<MeasurementType> Create(MeasurementTypeDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Delete(int id)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Exists(int id)
    {
        throw new NotImplementedException();
    }

    public Task<MeasurementType> Get(int id)
    {
        throw new NotImplementedException();
    }

    public Task<List<MeasurementType>> GetAll(ListParams listParams)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Update(MeasurementType dto)
    {
        throw new NotImplementedException();
    }
}