using PersonalCore;
var builder = WebApplication.CreateBuilder(args);
var startup = new Startup(builder.Configuration);
startup.InitializeApplication(builder);