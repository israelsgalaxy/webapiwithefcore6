using Microsoft.AspNetCore.Mvc;
using studentapi.Data;
using Microsoft.EntityFrameworkCore;

namespace studentapi.Controllers;

[ApiController]
[Route("[controller]")]
public class StudentsController : ControllerBase
{

    private readonly DataContext _dataContext;

    public StudentsController(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    [HttpGet]
    public async Task<ActionResult<List<Student>>> getAllStudents() {

        var students = await _dataContext.Students.ToListAsync();
        if (students?.Any() != true) {
            return BadRequest("No students in database");
        }

        return Ok(await _dataContext.Students.ToListAsync());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Student>> getStudent(string id) {

        var student = await _dataContext.Students.FindAsync(id);
        if (student == null) {
            return BadRequest("Student Not Found");
        }

        return Ok(student);
    }

    [HttpPost] 
    public async Task<ActionResult<List<Student>>> addStudent(Student student) {

        if (student.ValidateAll() == false) {
            return BadRequest("Wrong Format. Should be: { id: 10 alphanumeric characters, firstName: variable length string, lastName: variable length string, email: any@any.com, dateOfBirth: DD/MM/YYYY, gender: m, f, M or F, phoneNo: 11 numeric characters, yearOfEntry: 4 numeric characters, major: 3 alphabetic characters }");
        }

        var existingStudent = await _dataContext.Students.FindAsync(student.Id);
        if (existingStudent != null) {
            return BadRequest("Student Already Exists");
        }

        _dataContext.Students.Add(student);
        await _dataContext.SaveChangesAsync();
        return Ok(await _dataContext.Students.ToListAsync());
    }

    [HttpPut]
    public async Task<ActionResult<List<Student>>> updateStudent(Student student) {

        if (student.ValidateAll() == false) {
            return BadRequest("Wrong Format. Should be: { id: 10 alphanumeric characters, firstName: variable length string, lastName: variable length string, email: any@any.com, dateOfBirth: DD/MM/YYYY, gender: m, f, M or F, phoneNo: 11 numeric characters, yearOfEntry: 4 numeric characters, major: 3 alphabetic characters }");
        }

        var existingStudent = await _dataContext.Students.FindAsync(student.Id);
        if (existingStudent == null) {
            _dataContext.Students.Add(student);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Students.ToListAsync());
        }

        existingStudent.FirstName = student.FirstName;
        existingStudent.LastName = student.LastName;
        existingStudent.Email = student.Email;
        existingStudent.Gender = student.Gender;
        existingStudent.PhoneNo = student.PhoneNo;
        existingStudent.Major = student.Major;
        existingStudent.DateOfBirth = student.DateOfBirth;
        existingStudent.YearOfEntry = student.YearOfEntry;

        await _dataContext.SaveChangesAsync();
        return Ok(await _dataContext.Students.ToListAsync());
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Student>> remvdStudent(string id) {

        var student = await _dataContext.Students.FindAsync(id);
        if (student == null) {
            return BadRequest("Student Not Found");
        }

        _dataContext.Students.Remove(student);
        await _dataContext.SaveChangesAsync();
        return Ok(await _dataContext.Students.ToListAsync());
    }
}