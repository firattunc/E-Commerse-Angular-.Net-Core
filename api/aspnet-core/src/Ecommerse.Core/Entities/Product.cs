using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Ecommerse.Entities
{
    public class Product:Entity<int>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImgUrl { get; set; }        
        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public virtual Category Category{ get; set; }
    }
}
