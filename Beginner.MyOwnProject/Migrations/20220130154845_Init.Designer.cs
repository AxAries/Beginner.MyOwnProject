﻿// <auto-generated />
using Beginner.MyOwnProject.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Beginner.MyOwnProject.Migrations
{
    [DbContext(typeof(BeginnerDbcontext))]
    [Migration("20220130154845_Init")]
    partial class Init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.13");

            modelBuilder.Entity("Beginner.MyOwnProject.Entities.Employer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("NIP")
                        .HasColumnType("longtext");

                    b.Property<string>("email")
                        .HasColumnType("longtext");

                    b.Property<string>("hashPassword")
                        .HasColumnType("longtext");

                    b.Property<string>("name")
                        .HasColumnType("longtext");

                    b.Property<int>("number")
                        .HasColumnType("int");

                    b.Property<string>("surname")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("employer");
                });

            modelBuilder.Entity("Beginner.MyOwnProject.Entities.Offers", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("City")
                        .HasColumnType("longtext");

                    b.Property<int>("EmployerId")
                        .HasColumnType("int");

                    b.Property<string>("Languages")
                        .HasColumnType("longtext");

                    b.Property<string>("OfferText")
                        .HasColumnType("longtext");

                    b.Property<string>("SalaryFrom")
                        .HasColumnType("longtext");

                    b.Property<string>("SalaryTo")
                        .HasColumnType("longtext");

                    b.Property<string>("Street")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("EmployerId")
                        .IsUnique();

                    b.ToTable("offers");
                });

            modelBuilder.Entity("Beginner.MyOwnProject.Entities.Offers", b =>
                {
                    b.HasOne("Beginner.MyOwnProject.Entities.Employer", "Employer")
                        .WithOne("Offers")
                        .HasForeignKey("Beginner.MyOwnProject.Entities.Offers", "EmployerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Employer");
                });

            modelBuilder.Entity("Beginner.MyOwnProject.Entities.Employer", b =>
                {
                    b.Navigation("Offers");
                });
#pragma warning restore 612, 618
        }
    }
}
