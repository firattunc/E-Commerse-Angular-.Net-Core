using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Ecommerse.Entities;
using Ecommerse.Products.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerse.Products
{
    public class ProductService : AsyncCrudAppService<Product, ProductDto, int, PagedProductResultRequestDto, CreateProductDto, ProductDto>, IProductService
    {
        public ProductService(IRepository<Product, int> repository) : base(repository)
        {
        }

        public async Task<PagedResultDto<ProductDto>> GetProductsByCategoryId(int id)
        {
            var products = await Repository.GetAllListAsync(x => x.CategoryId == id);
            return new PagedResultDto<ProductDto>(products.Count, ObjectMapper.Map<List<ProductDto>>(products));
        }
    }
}
