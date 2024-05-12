
using System.ComponentModel.DataAnnotations;

namespace PersonalCore.Models;
public class  Chef
{
    [Key]
    public int Id  { get; set;}
    public string Name { get; set;}
    public DateTime DateAdded { get; set;} = DateTime.UtcNow;
}