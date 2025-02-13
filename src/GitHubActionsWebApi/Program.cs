var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHealthChecks();
builder.Services.AddControllers();

var app = builder.Build();

app.UseHealthChecks("/health");

app.UseSwagger();
app.UseSwaggerUI(o => { 
    o.EnableTryItOutByDefault();
});

app.UseHttpsRedirection();

app.UseRouting();

app.UseEndpoints(static endpoints =>
{
    _ = endpoints.MapControllers();
});

app.Run();
