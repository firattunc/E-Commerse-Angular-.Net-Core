using Abp.Application.Services;
using Ecommerse.MultiTenancy.Dto;

namespace Ecommerse.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

