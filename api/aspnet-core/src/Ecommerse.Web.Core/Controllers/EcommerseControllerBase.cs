using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace Ecommerse.Controllers
{
    public abstract class EcommerseControllerBase: AbpController
    {
        protected EcommerseControllerBase()
        {
            LocalizationSourceName = EcommerseConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
