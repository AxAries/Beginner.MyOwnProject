using Beginner.MyOwnProject.Entities;
using Beginner.MyOwnProject.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Beginner.MyOwnProject.Services
{
   public interface IAccountServices
    {
        void Register(RegisterUser regusr);
    }
    public class AccountServices : IAccountServices
    {
        private readonly BeginnerDbcontext _usercontext;
        private readonly IPasswordHasher<User> _pwd;

        public AccountServices(BeginnerDbcontext usercontext, IPasswordHasher<User> pwd)
        {
            _usercontext = usercontext;
            _pwd = pwd;
        }
        public void Register(RegisterUser regusr)
        {
            var newUser = new User() 
            { 
                name=regusr.name,
                surname=regusr.surname,
                email=regusr.email,
                phone_number=regusr.phonenumber,
                NIP=regusr.NIP,
                roleID=regusr.RoleId,
            
            };
            var passwd =_pwd.HashPassword(newUser, regusr.password);

            newUser.passwordHash = passwd;
            _usercontext.users.Add(newUser);
            _usercontext.SaveChanges();
        }
    }
}
