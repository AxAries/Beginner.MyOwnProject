using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Beginner.MyOwnProject
{
    public class AuthenticationSchema
    {
        public string JwtKey { get; set; }
        public int JwtExpierDays { get; set; }
        public string JwtIssuer { get; set; }
    }
}
