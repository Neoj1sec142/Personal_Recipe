
using PersonalCore.Models;
using PersonalCore.Models.Dto;

public class QuickRecipeDto
{
    public string Title { get; set;}
    public string Description { get; set; }
    public List<InstructionDto> Instructions { get; set; } = new List<InstructionDto>();
    public List<IngredientDto> Ingredients { get; set; } = new List<IngredientDto>();
    public int? ChefId { get; set; }
    public string? ChefName { get; set; }
}