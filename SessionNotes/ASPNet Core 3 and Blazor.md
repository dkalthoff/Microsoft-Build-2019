## Full stack web development with ASP.NET Core 3.0 and Blazor ##

[Blazor](https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-3.0 "Blazor") is c# instead of javascript


2 types of implementations

- [Client-side](https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-3.0#blazor-client-side) where .net web assemblies are running in the browser
 - Same space as where the js VM runs. Normal access to client's resources
- Server-side where UI updates are handled over a SignalR connection


[gRPC](https://docs.microsoft.com/en-us/aspnet/core/grpc/?view=aspnetcore-3.0 "gRPC") is strongly typed binary procedure calls


### Bring back to the team ###

- Good
 - all aspnet, c# and razor
 - event driven
 
- Bad
 - client-side is early preview and client heavy
 - server side is .net core 3.0 release
 - event driven (this was big push in aspnet 2.0). view state etc made pages heavy
 - keeping your application stateless in web event driven app is challenging