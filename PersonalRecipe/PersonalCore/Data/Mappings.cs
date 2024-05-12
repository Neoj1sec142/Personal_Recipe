using AutoMapper;
using PersonalCore.Models;
using PersonalCore.Models.Dto;
namespace PersonalCore.Data;
public class Mappings : Profile
{
    public Mappings()
    {
        CreateMap<Chef, ChefDto>();
        CreateMap<ChefDto, Chef>();
        CreateMap<Ingredient, IngredientDto>();
        CreateMap<IngredientDto, Ingredient>();
        CreateMap<Instruction, InstructionDto>();
        CreateMap<InstructionDto, Instruction>();
        CreateMap<Item, ItemDto>();
        CreateMap<ItemDto, Item>();
        CreateMap<MeasurementType, MeasurementTypeDto>();
        CreateMap<MeasurementTypeDto, MeasurementType>();
        CreateMap<Recipe, RecipeDto>();
        CreateMap<RecipeDto, Recipe>();
    }
}