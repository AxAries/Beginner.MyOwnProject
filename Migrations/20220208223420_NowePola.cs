using Microsoft.EntityFrameworkCore.Migrations;

namespace Beginner.MyOwnProject.Migrations
{
    public partial class NowePola : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "companyname",
                table: "users",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "offers",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "companyname",
                table: "offers",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "position",
                table: "offers",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "requirements",
                table: "offers",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "companyname",
                table: "users");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "offers");

            migrationBuilder.DropColumn(
                name: "companyname",
                table: "offers");

            migrationBuilder.DropColumn(
                name: "position",
                table: "offers");

            migrationBuilder.DropColumn(
                name: "requirements",
                table: "offers");
        }
    }
}
