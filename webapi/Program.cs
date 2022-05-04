using studentapi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);
var AllowReactApp = "_AllowReactApp";

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowReactApp, policy => {
        policy.WithOrigins("http://localhost:44401")
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();
    });
});

var app = builder.Build();

app.UseCors(AllowReactApp);

app.UseAuthorization();

app.MapControllers();

app.Run();
