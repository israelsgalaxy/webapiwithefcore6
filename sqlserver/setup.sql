CREATE DATABASE Students;
go
USE Students;
go
CREATE TABLE dbo.Students (
    Id NVARCHAR(450)  NOT NULL,
    FirstName NVARCHAR(max)  NOT NULL,
    LastName NVARCHAR(max)  NOT NULL,
    Email NVARCHAR(max)  NOT NULL,
    DateOfBirth NVARCHAR(max)  NOT NULL,
    Gender NVARCHAR(1) NOT NULL,
    PhoneNo NVARCHAR(max) NOT NULL,
    YearOfEntry NVARCHAR(max) NOT NULL,
    Major NVARCHAR(max) NOT NULL,
    CONSTRAINT pk PRIMARY KEY (Id)
);