using PersonalCore.Models;
using PersonalCore.Models.Dto;

namespace PersonalCore.Repository.IRepository;
public interface IInstructionRepository
{
    Task<Instruction> Create(InstructionDto dto);
    Task<Instruction> Get(int id);
    Task<List<Instruction>> GetAll(ListParams listParams);
    Task<bool> Update(Instruction dto);
    Task<bool> Delete(int id);
    Task<bool> Exists(int id);
}