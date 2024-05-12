namespace PersonalCore.Models.Dto;
public class  IngredientDto
{
    public int ItemId { get; set;}
    public Item? Item { get; set;}
    public int MeasurementTypeId { get; set;}
    public MeasurementType? MeasurementType { get; set;}
    public int Amount { get; set;}
}