using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace Ecommerse.EntityFrameworkCore
{
    public static class EcommerseDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<EcommerseDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<EcommerseDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
