using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Beginner.MyOwnProject.Entities
{
    public class Employer
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string email { get; set; }
        public int number { get; set; }
        public string NIP { get; set; }
        public string hashPassword { get; set; }
        public virtual Offers Offers { get; set; }
        
    }
}
