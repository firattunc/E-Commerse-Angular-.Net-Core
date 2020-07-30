using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using AutoMapper;
using Ecommerse.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Ecommerse.Categories.Dto
{
    [AutoMapFrom(typeof(Category))]
    public class CategoryDto:EntityDto<int>
    {
        public string Name { get; set; }
    }
}
