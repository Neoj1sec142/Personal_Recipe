
using System.ComponentModel.DataAnnotations;

namespace PersonalCore.Models;
public class  Instruction
{
    [Key]
    public int Id  { get; set;}
    public string Content { get; set; }
}