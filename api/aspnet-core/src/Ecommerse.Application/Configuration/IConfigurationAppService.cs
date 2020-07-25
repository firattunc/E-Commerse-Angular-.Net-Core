using System.Threading.Tasks;
using Ecommerse.Configuration.Dto;

namespace Ecommerse.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
