using Microsoft.EntityFrameworkCore;

namespace BeyondNet.Demo.Vue.Api.DataAccess
{
    public class ProductDbContext : DbContext
    {
        public ProductDbContext(DbContextOptions<ProductDbContext> options)
            : base(options)
        { }

        public DbSet<ProductTable> Products { get; set; }
    }
}
