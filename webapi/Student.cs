using System.Text.RegularExpressions;
using System.Globalization;
using System.Diagnostics;
using System;

namespace studentapi;

public class Student
{
    public string Id { get; set; }

    private bool ValidateId() {
        string regexp = @"^([A-Z]|[0-9]|[a-z]){10}$";

        Regex re = new Regex(regexp);

        if (re.IsMatch(this.Id)) {
            return (true);
        }
        else {
            Console.WriteLine("ID fails");
            return (false);
        }
    }

    public string FirstName { get; set; } = string.Empty;

    private bool ValidateFirstName() {
        string regexp = @"^([A-Z]|[a-z])+$";

        Regex re = new Regex(regexp);

        if (re.IsMatch(this.FirstName)) {
            return (true);
        }
        else {
            Console.WriteLine("First Name fails");
            return (false);
        }
    }

    public string LastName { get; set; } = string.Empty;

    private bool ValidateLastName() {
        string regexp = @"^([A-Z]|[a-z])+$";

        Regex re = new Regex(regexp);

        if (re.IsMatch(this.LastName)) {
            return (true);
        }
        else {
            Console.WriteLine("Last Name fails");
            return (false);
        }
    }

    public string Email { get; set; } = string.Empty;

    private bool ValidateEmail() {
        string regexp = @"^([A-Z]|[0-9]|[a-z])+@([A-Z]|[a-z])+.com$";

        Regex re = new Regex(regexp);

        if (re.IsMatch(this.Email)) {
            return (true);
        }
        else {
            Console.WriteLine("Email fails");
            return (false);
        }
    }

    public string DateOfBirth { get; set; }

    private bool ValidateDateOfBirth() {
        string regexp = @"^[0-9]{4}(/|-)([0-9]{2}|[0-9]{1})(/|-)([0-9]{2}|[0-9]{1})$";

        Regex re = new Regex(regexp);
        // CultureInfo gb = CultureInfo.GetCultureInfo("en-GB");
        // this.DateOfBirth.ToString("d", gb)
        if (re.IsMatch(this.DateOfBirth)) {
            return (true);
        }
        else {
            Console.WriteLine("Date of Birth fails");
            return (false);
        }
    }

    public char Gender { get;  set; }

    private bool ValidateGender() {
        string regexp = @"^[mfMF]{1}$";

        Regex re = new Regex(regexp);

        if (re.IsMatch(this.Gender.ToString())) {
            return (true);
        }
        else {
            Console.WriteLine("Gender fails");
            return (false);
        }
    }

    public string PhoneNo { get; set; } = string.Empty;

    private bool ValidatePhoneNo() {
        string regexp = @"^[0-9]{11}$";

        Regex re = new Regex(regexp);

        if (re.IsMatch(this.PhoneNo)) {
            return (true);
        }
        else {
            Console.WriteLine("PhoneNo fails");
            return (false);
        }
    }

    public string YearOfEntry { get; set; }

    private bool ValidateYearOfEntry() {
        string regexp = @"^[0-9]{4}$";

        Regex re = new Regex(regexp);
        // this.YearOfEntry.Year.ToString()
        if (re.IsMatch(this.YearOfEntry)) {
            return (true);
        }
        else {
            Console.WriteLine("YearOfEntry fails");
            return (false);
        }
    }

    public string Major { get; set; } = string.Empty;

    private bool ValidateMajor() {
        string regexp = @"^([A-Z]|[a-z]){3}$";

        Regex re = new Regex(regexp);

        if (re.IsMatch(this.Major)) {
            return (true);
        }
        else {
            Console.WriteLine("Major fails");
            return (false);
        }
    }

    public bool ValidateAll() {
        return (this.ValidateId() &
            this.ValidateFirstName() &
            this.ValidateLastName() &
            this.ValidateEmail() &
            this.ValidateGender() &
            this.ValidateDateOfBirth() &
            this.ValidateMajor() &
            this.ValidatePhoneNo() &
            this.ValidateYearOfEntry()
        );
    }
}
