using PersonalCore.Data;
using PersonalCore.Repository;
using PersonalCore.Repository.IRepository;
using PersonalCore.Service;
using PersonalCore.Service.IService;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

namespace PersonalCore;
public class Startup
{
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }


    public void ConfigureServices(IServiceCollection services)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
        });
        services.AddControllers();
        services.AddAutoMapper(typeof(Program).Assembly);
        // Repositorys
        services.AddTransient<IItemRepository, ItemRepository>();
        services.AddTransient<IChefRepository, ChefRepository>();
        services.AddTransient<IIngredientRepository, IngredientRepository>();
        services.AddTransient<IInstructionRepository, InstructionRepository>();
        services.AddTransient<IMeasurementTypeRepository, MeasurementTypeRepository>();
        services.AddTransient<IRecipeRepository, RecipeRepository>();
        // Services
        services.AddTransient<IItemService, ItemService>();
        services.AddTransient<IChefService, ChefService>();
        services.AddTransient<IIngredientService, IngredientService>();
        services.AddTransient<IInstructionService, InstructionService>();
        services.AddTransient<IMeasurementTypeService, MeasurementTypeService>();
        services.AddTransient<IRecipeService, RecipeService>();
        
        services.AddDbContext<RecipeContext>(options =>
            options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
    
        services.AddCors(options =>
        {
            options.AddPolicy("AllowAnyOrigin",
                builder =>
                {
                    builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                });
        });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        // app.UseHttpsRedirection();

        app.UseRouting();
        app.UseCors("AllowAnyOrigin");
        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }

    public void InitializeApplication(WebApplicationBuilder builder)
    {
        ConfigureServices(builder.Services);

        var app = builder.Build();

        Configure(app, app.Environment);

        app.Run();
    }
}
