using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Service.IService;

namespace PersonalCore.Service;
public class InstructionService : IInstructionService
{
    public InstructionService()
    {
        
    }
    public Task<Instruction> Create(InstructionDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Delete(InstructionDto dto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Exists(int id)
    {
        throw new NotImplementedException();
    }

    public Task<Instruction> Get(int id)
    {
        throw new NotImplementedException();
    }

    public Task<List<Instruction>> GetAll(ListParams listParams)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Update(Instruction dto)
    {
        throw new NotImplementedException();
    }
}