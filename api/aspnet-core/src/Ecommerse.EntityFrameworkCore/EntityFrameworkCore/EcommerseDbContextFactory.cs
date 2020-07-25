using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Ecommerse.Configuration;
using Ecommerse.Web;

namespace Ecommerse.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class EcommerseDbContextFactory : IDesignTimeDbContextFactory<EcommerseDbContext>
    {
        public EcommerseDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<EcommerseDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            EcommerseDbContextConfigurer.Configure(builder, configuration.GetConnectionString(EcommerseConsts.ConnectionStringName));

            return new EcommerseDbContext(builder.Options);
        }
    }
}
