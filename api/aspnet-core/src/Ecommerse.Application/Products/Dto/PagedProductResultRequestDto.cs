using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Ecommerse.Products.Dto
{
    public class PagedProductResultRequestDto: PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}
