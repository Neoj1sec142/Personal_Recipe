using System.ComponentModel.DataAnnotations;

namespace backend.Models;
public class Recipe
{
    [Key]
    public int RecipeId { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Instructions { get; set; }
    public TimeSpan PreparationTime { get; set; }

    public ICollection<Ingredient> Ingredients { get; set; }
}