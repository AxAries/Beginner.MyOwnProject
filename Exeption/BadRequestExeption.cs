using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Beginner.MyOwnProject.Exeption
{
    public class BadRequestExeption :Exception 
    {
        public BadRequestExeption(string message): base(message)
        {

        }
    }
}
