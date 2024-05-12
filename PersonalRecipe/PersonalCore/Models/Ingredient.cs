
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonalCore.Models;
public class  Ingredient
{
    [Key]
    public int Id  { get; set;}
    public int ItemId { get; set;}
    [ForeignKey("ItemId")]
    public Item Item { get; set;}
    public int MeasurementTypeId { get; set;}
    [ForeignKey("MeasurementTypeId")]
    public MeasurementType MeasurementType { get; set;}
    public int Amount { get; set;}
    
}