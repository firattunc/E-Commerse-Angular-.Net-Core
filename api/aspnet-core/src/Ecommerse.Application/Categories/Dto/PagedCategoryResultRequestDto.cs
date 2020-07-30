using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Ecommerse.Categories.Dto
{
    public class PagedCategoryResultRequestDto: PagedResultRequestDto
    {
        public string Keyword { get; set; }        
    }
}
