using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Beginner.MyOwnProject.Entities
{
    public class Offers
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string? companyname { get; set; }
        public string position { get; set; }
        public string requirements { get; set; }
        public string OfferText { get; set; }
        public string SalaryFrom { get; set; }
        public string SalaryTo { get; set; }
        public string City { get; set; }

        public string Street { get; set; }
       
        public string Languages { get; set; }
   
       public int EmployerId { get; set; }
       public virtual Employer Employer { get; set; }

       

    }
}
