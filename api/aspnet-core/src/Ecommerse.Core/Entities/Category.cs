using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Ecommerse.Entities
{
    public class Category:Entity<int>
    {
        public string Name { get; set; }        
    }
}
