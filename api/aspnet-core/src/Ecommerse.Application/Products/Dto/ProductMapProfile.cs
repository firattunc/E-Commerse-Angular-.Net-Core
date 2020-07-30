using AutoMapper;
using Ecommerse.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Ecommerse.Products.Dto
{
    public class ProductMapProfile:Profile
    {
        public ProductMapProfile()
        {
            CreateMap<ProductDto, Product>();
        }
    }
}
