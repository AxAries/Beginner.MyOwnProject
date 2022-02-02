using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Beginner.MyOwnProject.Entities
{
    public class BeginnerDbcontext: DbContext
    {
        private string _connectionString = "Server=127.0.0.1; port=3306; user=root; password=;database=beginnermyownproject;";
        public DbSet<Offers> offers { get; set; }
        public DbSet<Employer> employer { get; set; }
        public DbSet<User> users { get; set; }
        public DbSet<UserRole> userroles { get; set; }
        public object Offers { get; internal set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Offers>();
            modelBuilder.Entity<Employer>();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseMySql(_connectionString,
                new MySqlServerVersion(new Version(8, 0, 12))
                );
        }
    }
}
