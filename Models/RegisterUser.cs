using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Beginner.MyOwnProject.Models
{
    public class RegisterUser
    {
        public string name { get; set; }
        public string surname { get; set; }
        public string email { get; set; }
        public int phonenumber { get; set; }
        public string password {get; set;}
        public string confirmpassword { get; set; }
        public string? NIP { get; set; }
        public string? companyname { get; set; }
        public int RoleId { get; set; }
    }
}
