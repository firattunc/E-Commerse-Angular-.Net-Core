using AutoMapper;
using Ecommerse.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Ecommerse.Categories.Dto
{
    public class CategoryMapProfile:Profile
    {
        public CategoryMapProfile()
        {
            //AutoMap Update Operation
            CreateMap<CategoryDto, Category>();
        }
    }
}
