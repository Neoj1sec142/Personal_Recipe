
using System.Runtime.CompilerServices;

namespace PersonalCore.Models.Dto;
public class ListParams
{
    public bool MultiSearch { get; set; }
    public string? SearchString { get; set; }
    public string? SearchField { get; set; }
    public string? OrderBy { get; set; }
    public int? Limit { get; set; }

}