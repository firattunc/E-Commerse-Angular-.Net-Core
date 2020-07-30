using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Ecommerse.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Ecommerse.Products.Dto
{
    [AutoMapFrom(typeof(Product))]
    public class ProductDto:EntityDto<int>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImgUrl { get; set; }
        public int CategoryId { get; set; }
    }
}
