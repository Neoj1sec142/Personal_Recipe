using PersonalCore.Models;
using PersonalCore.Models.Dto;
using PersonalCore.Repository.IRepository;
using PersonalCore.Service.IService;

namespace PersonalCore.Service;
public class InstructionService : IInstructionService
{
    private readonly IInstructionRepository _insRepo;
    public InstructionService(IInstructionRepository insRepo)
    {
        _insRepo = insRepo;
    }
    public async Task<Instruction> Create(InstructionDto dto)
    {
        return await _insRepo.Create(dto);
    }

    public async Task<bool> Delete(int id)
    {
        return await _insRepo.Delete(id);
    }

    public async Task<bool> Exists(int id)
    {
        return await _insRepo.Exists(id);
    }

    public async Task<bool> Exists(string content)
    {
        return await _insRepo.Exists(content);
    }

    public async Task<Instruction> Get(int id)
    {
        return await _insRepo.Get(id);
    }

    public async Task<List<Instruction>> GetAll(ListParams listParams)
    {
        return await _insRepo.GetAll(listParams);
    }

    public async Task<bool> Update(Instruction dto)
    {
        return await _insRepo.Update(dto);
    }
}