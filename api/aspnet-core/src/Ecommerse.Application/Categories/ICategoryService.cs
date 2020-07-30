using Abp.Application.Services;
using Ecommerse.Categories.Dto;
using Ecommerse.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Ecommerse.Categories
{
    public interface ICategoryService : IAsyncCrudAppService<CategoryDto, int, PagedCategoryResultRequestDto, CreateCategoryDto,CategoryDto>
    {
    }
}
