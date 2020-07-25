using System.Threading.Tasks;
using Abp.Application.Services;
using Ecommerse.Authorization.Accounts.Dto;

namespace Ecommerse.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
