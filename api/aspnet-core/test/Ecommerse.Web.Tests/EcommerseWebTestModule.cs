using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Ecommerse.EntityFrameworkCore;
using Ecommerse.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace Ecommerse.Web.Tests
{
    [DependsOn(
        typeof(EcommerseWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class EcommerseWebTestModule : AbpModule
    {
        public EcommerseWebTestModule(EcommerseEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(EcommerseWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(EcommerseWebMvcModule).Assembly);
        }
    }
}