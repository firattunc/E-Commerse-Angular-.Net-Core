using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Ecommerse.Authorization.Roles;
using Ecommerse.Authorization.Users;
using Ecommerse.MultiTenancy;
using Ecommerse.Entities;

namespace Ecommerse.EntityFrameworkCore
{
    public class EcommerseDbContext : AbpZeroDbContext<Tenant, Role, User, EcommerseDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }


        public EcommerseDbContext(DbContextOptions<EcommerseDbContext> options)
            : base(options)
        {
        }
    }
}
