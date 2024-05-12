namespace PersonalCore.Models.Dto;
public class RecipeDto
{
    public string Title { get; set;}
    public string Description { get; set; }
    // public 
    public List<Instruction> Instructions { get; set; } = new List<Instruction>();
    public List<Ingredient> Ingredients { get; set; } = new List<Ingredient>();
    public int? ChefId { get; set; }
}