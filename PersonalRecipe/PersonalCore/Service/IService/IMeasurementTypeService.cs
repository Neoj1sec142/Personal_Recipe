using PersonalCore.Models;
using PersonalCore.Models.Dto;

namespace PersonalCore.Service.IService;
public interface IMeasurementTypeService
{
    Task<MeasurementType> Create(MeasurementTypeDto dto);
    Task<MeasurementType> Get(int id);
    Task<List<MeasurementType>> GetAll(ListParams listParams);
    Task<bool> Update(MeasurementType dto);
    Task<bool> Delete(int id);
    Task<bool> Exists(int id);
    Task<bool> Exists(string name);
}

