using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Ecommerse.Products.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerse.Products
{
    public interface IProductService:IAsyncCrudAppService<ProductDto,int,PagedProductResultRequestDto,CreateProductDto,ProductDto>
    {
        Task<PagedResultDto<ProductDto>> GetProductsByCategoryId(int id);
    }
}
