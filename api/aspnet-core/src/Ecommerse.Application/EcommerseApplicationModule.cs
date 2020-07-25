using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Ecommerse.Authorization;

namespace Ecommerse
{
    [DependsOn(
        typeof(EcommerseCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class EcommerseApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<EcommerseAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(EcommerseApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
