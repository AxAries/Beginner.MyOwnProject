using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Beginner.MyOwnProject.Entities;
using Beginner.MyOwnProject.Services;
using Microsoft.AspNetCore.Identity;
using FluentValidation;
using Beginner.MyOwnProject.Models;
using Beginner.MyOwnProject.Validation;
using FluentValidation.AspNetCore;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace Beginner.MyOwnProject
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            var authenticationSchema = new AuthenticationSchema();

            Configuration.GetSection("Authentication").Bind(authenticationSchema);

            services.AddSingleton(authenticationSchema);
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.WithOrigins("http://localhost:3000")
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));
            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = "Bearer";
                opt.DefaultScheme = "Bearer";
                opt.DefaultChallengeScheme = "Bearer";
            }).AddJwtBearer(cfg =>
            {
                cfg.RequireHttpsMetadata = false;
                cfg.SaveToken = true;
                cfg.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer= authenticationSchema.JwtIssuer,
                    ValidAudience= authenticationSchema.JwtIssuer,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(authenticationSchema.JwtKey)),
                };
            });
            services.AddControllers().AddFluentValidation();
            services.AddDbContext<BeginnerDbcontext>();
            services.AddScoped<IAccountServices, AccountServices>();
            services.AddAutoMapper(this.GetType().Assembly);
            services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();
            services.AddScoped<IValidator<RegisterUser>, RegisterUserValidation>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }




            app.UseAuthentication();

            app.UseHttpsRedirection();

            app.UseRouting();
            
            app.UseCors("MyPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
