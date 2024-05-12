
using System.ComponentModel.DataAnnotations;

namespace PersonalCore.Models;
public class  MeasurementType
{
    [Key]
    public int Id  { get; set;}
    public string Name { get; set;}
    public string? Description { get; set;}
    public DateTime DateAdded { get; set;} = DateTime.UtcNow;
}