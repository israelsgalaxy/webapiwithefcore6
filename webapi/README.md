# REST API with .NET6 WebAPI, EFCore6 and Microsoft SQL Server

A project to show my progress with C# and .NET

## Installation

Clone the repo or download and extract the zip folder in your project directory.

```bash
git clone https://.....
```

OR

```bash
unzip C:\....
```

## Usage
- Install the .NET6 SDK and runtime 
- Install the latest Developer version of Microsoft SQL Server and make use of the default instance when installing
- In the root directory of the project run: 

```bash
dotnet tool install --global dotnet-ef --version 6.0.0
dotnet ef migrations add CreateInitial
dotnet ef database update
dotnet run
```

- Navigate to https://localhost:7201/swagger/index.html to test the REST API
- You can now GET, POST, PUT and DELETE student data with SwaggerUI
- Student Schema: {
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        dateOfBirth: string,
        gender: string,
        phoneNo: string,
        yearOfEntry: string,
        major: string
  }