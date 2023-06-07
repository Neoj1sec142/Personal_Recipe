using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;
public class DataBaseContext : DbContext
{
    public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options){ }
    public DbSet<Ingredient> Ingredients { get; set; }
    public DbSet<Recipe> Recipes { get; set; }
    

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Recipe>()
                .HasMany(r => r.Ingredients)
                .WithOne(i => i.Recipe)
                .HasForeignKey(i => i.RecipeId)
                .OnDelete(DeleteBehavior.Cascade);


            modelBuilder.Entity<Ingredient>()
                .Property(i => i.IngredientId)
                .ValueGeneratedOnAdd();
        }
}