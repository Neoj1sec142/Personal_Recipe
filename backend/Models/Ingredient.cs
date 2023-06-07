using System.ComponentModel.DataAnnotations;

namespace backend.Models;
public class Ingredient
{
    [Key]
    public int IngredientId { get; set; }
    public string Name { get; set; }
    public decimal Quantity { get; set; }
    public string Unit { get; set; }

    public int RecipeId { get; set; }
    public Recipe Recipe { get; set; }
    
}