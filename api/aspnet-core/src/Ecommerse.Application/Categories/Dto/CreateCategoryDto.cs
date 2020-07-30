using Abp.AutoMapper;
using Ecommerse.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Ecommerse.Categories.Dto
{
    [AutoMapTo(typeof(Category))]
    public class CreateCategoryDto
    {
        public string Name { get; set; }
    }
}
