using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;

namespace PersonalCore.Repository;
public class InstructionRepository : IInstructionRepository
{
    public InstructionRepository()
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