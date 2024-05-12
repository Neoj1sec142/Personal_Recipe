using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;
using PersonalCore.Service.IService;

namespace PersonalCore.Service;
public class MeasurementTypeService : IMeasurementTypeService
{
    private readonly IMeasurementTypeRepository _mTypeSvc;
    public MeasurementTypeService(IMeasurementTypeRepository mTypeSvc)
    {
        _mTypeSvc = mTypeSvc;
    }
    public async Task<MeasurementType> Create(MeasurementTypeDto dto)
    {
        return await _mTypeSvc.Create(dto);
    }

    public async Task<bool> Delete(int id)
    {
        return await _mTypeSvc.Delete(id);
    }

    public async Task<bool> Exists(int id)
    {
        return await _mTypeSvc.Exists(id);
    }

    public async Task<bool> Exists(string name)
    {
        return await _mTypeSvc.Exists(name);
    }

    public async Task<MeasurementType> Get(int id)
    {
        return await _mTypeSvc.Get(id);
    }

    public async Task<List<MeasurementType>> GetAll(ListParams listParams)
    {
        return await _mTypeSvc.GetAll(listParams);
    }

    public async Task<bool> Update(MeasurementType dto)
    {
        return await _mTypeSvc.Update(dto);
    }
}