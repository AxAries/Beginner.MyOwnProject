using Beginner.MyOwnProject.Entities;
using Beginner.MyOwnProject.Exeption;
using Beginner.MyOwnProject.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Beginner.MyOwnProject.Services
{
   public interface IAccountServices
    {
        void Register(RegisterUser regusr);
        string genwt(ModelLogin mLogin);
    }
    public class AccountServices : IAccountServices
    {
        private readonly BeginnerDbcontext _usercontext;
        private readonly IPasswordHasher<User> _pwd;
        private readonly AuthenticationSchema _authenticationSchema;

        public AccountServices(BeginnerDbcontext usercontext, IPasswordHasher<User> pwd, AuthenticationSchema authenticationSchema)
        {
            _usercontext = usercontext;
            _pwd = pwd;
            _authenticationSchema = authenticationSchema;
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
                UserRoleId=regusr.RoleId,
            
            };
            var passwd =_pwd.HashPassword(newUser, regusr.password);

            newUser.passwordHash = passwd;
            _usercontext.users.Add(newUser);
            _usercontext.SaveChanges();
        }
        public string genwt(ModelLogin mLogin)
        {
            var usr = _usercontext.users
                .Include(u => u.UserRole).FirstOrDefault(u => u.email == mLogin.email);
            //var role = _usercontext.userroles;
                
            if (usr is null)
            {
                throw new BadRequestExeption("Inavlid email or Passord");
            }
            var result = _pwd.VerifyHashedPassword(usr, usr.passwordHash, mLogin.password);

            if (result == PasswordVerificationResult.Failed)
            {
                throw new BadRequestExeption("Inavlid email or Passord");
            }

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, usr.ID.ToString()),
                new Claim(ClaimTypes.Name, $"{usr.name}"),
                new Claim(ClaimTypes.Role, $"{usr.UserRole.name}"),
              // new Claim(ClaimTypes.Role, role.)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authenticationSchema.JwtKey));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(_authenticationSchema.JwtExpierDays);

            var token = new JwtSecurityToken(_authenticationSchema.JwtIssuer,
                _authenticationSchema.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: cred);

            var tokenHendler = new JwtSecurityTokenHandler();
            return tokenHendler.WriteToken(token);

        }
    }
}
