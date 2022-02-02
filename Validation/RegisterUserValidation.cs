using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Beginner.MyOwnProject.Models;
using FluentValidation;

namespace Beginner.MyOwnProject.Validation
{
    public class RegisterUserValidation: AbstractValidator<RegisterUser>
    {
        public RegisterUserValidation()
        {
            RuleFor(v => v.email)
                .NotEmpty()
                .EmailAddress();
        }
    }
}
