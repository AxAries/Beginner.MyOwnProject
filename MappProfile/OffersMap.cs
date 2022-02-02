using AutoMapper;
using Beginner.MyOwnProject.Entities;
using Beginner.MyOwnProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Beginner.MyOwnProject.MappProfile
{
    public class OffersMap: Profile
    {
        public OffersMap()
        {
            CreateMap<Offers, OffersModel>()
                .ForMember(o => o.name, e => e.MapFrom(x => x.Employer.name))
                .ForMember(o => o.NIP, e => e.MapFrom(x => x.Employer.NIP));
            CreateMap<Employer, EmployerModel>();

            CreateMap<AddOfferModel, Offers>()
                .ForMember(o => o.Employer, e => e.MapFrom(empl => new Employer()
                { name = empl.name, surname = empl.surname, email = empl.email, number = empl.number, NIP = empl.NIP }));


        }

    }

}
