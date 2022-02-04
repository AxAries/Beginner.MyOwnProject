using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Beginner.MyOwnProject.Entities;
using Beginner.MyOwnProject.Models;
using FluentValidation;

namespace Beginner.MyOwnProject.Validation
{
    public class RegisterUserValidation: AbstractValidator<RegisterUser>
    {
        public RegisterUserValidation(BeginnerDbcontext db)
        {
            RuleFor(v => v.email)
                .NotEmpty()
                .EmailAddress();
            RuleFor(c => c.confirmpassword).Equal(p => p.password);

            RuleFor(e => e.email)
                .Custom((value, context) =>
                {
                    var emailus = db.users.Any(u => u.email == value);
                    if (emailus)
                    {
                        context.AddFailure("email", "That email is taken");
                    }

                });
        }
    }
}
