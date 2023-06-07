using backend.Data;
using backend.Repository;
using backend.Repository.IRepository;
using backend.Services;
using backend.Services.IServices;
// using backend.Repository;
// using backend.Repository.IRepository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddTransient<IIngredientRepository, IngredientRepository>();
builder.Services.AddTransient<IRecipeRepository, RecipeRepository>();
builder.Services.AddTransient<IIngredientService, IngredientService>();
builder.Services.AddTransient<IRecipeService, RecipeService>();
builder.Services.AddDbContext<DataBaseContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(builder =>
    {
        builder.AllowAnyOrigin() 
                .AllowAnyMethod()
                .AllowAnyHeader();
    });

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.MapControllers();

app.Run();
