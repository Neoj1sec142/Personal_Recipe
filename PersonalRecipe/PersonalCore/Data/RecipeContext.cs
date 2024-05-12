using Microsoft.EntityFrameworkCore;
using PersonalCore.Models;

namespace PersonalCore.Data;
public class RecipeContext : DbContext
{
    public RecipeContext(DbContextOptions<RecipeContext> options)
        : base(options)
    {
    }

    public DbSet<Chef> Chefs { get; set; }
    public DbSet<Ingredient> Ingredients { get; set; }
    public DbSet<Instruction> Instructions { get; set; }
    public DbSet<Item> Items { get; set; }
    public DbSet<MeasurementType> MeasurementTypes { get; set; }
    public DbSet<Recipe> Recipes { get; set; }
}