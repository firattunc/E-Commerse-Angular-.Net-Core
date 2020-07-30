using Abp.Application.Services;
using Abp.Domain.Repositories;
using Ecommerse.Categories.Dto;
using Ecommerse.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Ecommerse.Categories
{
    public class CategoryService : AsyncCrudAppService<Category, CategoryDto, int, PagedCategoryResultRequestDto, CreateCategoryDto, CategoryDto>, ICategoryService
    {
        public CategoryService(IRepository<Category, int> repository) : base(repository)
        {
        }
    }
}
