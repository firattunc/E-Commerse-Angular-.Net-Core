using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using Ecommerse.Configuration.Dto;

namespace Ecommerse.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : EcommerseAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
