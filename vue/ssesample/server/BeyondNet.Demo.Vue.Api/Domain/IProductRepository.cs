using System.Linq;

namespace BeyondNet.Demo.Vue.Api.Domain
{
    public interface IProductRepository  
    {
        IQueryable<Product> GetAll();
        Product Get(string id);
        void Add(Product obj);
        void Update(Product obj);
        void Delete(Product obj);
    }
}
