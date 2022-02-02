using Beginner.MyOwnProject.Models;
using Beginner.MyOwnProject.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Beginner.MyOwnProject.Controllers
{
    [Route("/Register")]
    [ApiController]
    public class AccountsControler: ControllerBase
    {
        private readonly IAccountServices _accountServices;

        
       public AccountsControler(IAccountServices accountServices)
        {
            _accountServices = accountServices;
        } 
       [HttpPost]
       public ActionResult Register([FromForm] RegisterUser regusr)
        {
            _accountServices.Register(regusr);
            return Ok();
        }

    }
}
