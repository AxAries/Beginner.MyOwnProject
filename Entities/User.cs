using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Beginner.MyOwnProject.Entities
{
    public class User
    {
        public int ID { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string email { get; set; }
        public int phone_number { get; set; }
        public string? NIP {get; set;}
        public string? companyname { get; set; }
        public string passwordHash { get; set; }
        public int UserRoleId { get; set; }
        public virtual UserRole UserRole { get; set; }

    }
}
