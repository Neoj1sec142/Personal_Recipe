
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonalCore.Models;
public class Recipe
{
    [Key]
    public int Id  { get; set;}
    public string Title { get; set;}
    public string Description { get; set; }
    // public 
    public List<Instruction> Instructions { get; set; } = new List<Instruction>();
    public List<Ingredient> Ingredients { get; set; } = new List<Ingredient>();
    public int? ChefId { get; set; }
    [ForeignKey("ChefId")]
    public Chef? Chef { get; set; }
    public DateTime DateAdded { get; set;} = DateTime.UtcNow;
    public DateTime LastModified { get; set;} = DateTime.UtcNow;
}