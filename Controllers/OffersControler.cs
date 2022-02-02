using AutoMapper;
using Beginner.MyOwnProject.Entities;
using Beginner.MyOwnProject.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Beginner.MyOwnProject.Controllers
{
    [Route("/offers")]
    public class OffersControler : ControllerBase
    {
        private readonly BeginnerDbcontext _db;
        private readonly IMapper _ofrMaper;

        public OffersControler(BeginnerDbcontext db, IMapper ofrMaper)
        {
            _db = db;
            _ofrMaper = ofrMaper;
        }
        [EnableCors("MyPolicy")]
        [HttpGet]
        public ActionResult<IEnumerable<Offers>> GetAll()
        {
             var ofr = _db
                .offers
                .Include(o =>o.Employer)
                .ToList();
            var OffersModels = _ofrMaper.Map<List<OffersModel>>(ofr);

            return Ok(OffersModels);
        }

        [HttpGet("{id}")]
        public ActionResult<Offers> Get([FromBody] int id)
        {
            var ofr = _db
                .offers
                .Include(o => o.Employer)
                .FirstOrDefault(o => o.Id == id);
            if (ofr == null)
            {
                return NotFound();
            }
            var OfferModel = _ofrMaper.Map<OffersModel>(ofr);

            return Ok(OfferModel);
        
        }
    [Route("/AddOffer")]
        [HttpPost]
        public ActionResult AddOffer([FromBody] AddOfferModel modelofr)
        {
            var addoffer = _ofrMaper.Map<Offers>(modelofr);
            _db.offers.Add(addoffer);
            _db.SaveChanges();

            return Created($"/offers/{addoffer.Id}", null);
        }

    }
}
