using System.Threading.Tasks;
using Abp.Application.Services;
using Ecommerse.Sessions.Dto;

namespace Ecommerse.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
