using Abp.AutoMapper;
using Ecommerse.Entities;

namespace Ecommerse.Products.Dto
{
    [AutoMapTo(typeof(Product))]
    public class CreateProductDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImgUrl { get; set; }
        public int CategoryId { get; set; }
    }
}
