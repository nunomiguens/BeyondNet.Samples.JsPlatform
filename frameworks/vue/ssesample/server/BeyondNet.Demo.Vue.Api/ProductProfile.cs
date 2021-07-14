using AutoMapper;
using BeyondNet.Demo.Vue.Api.DataAccess;
using BeyondNet.Demo.Vue.Api.Domain;

namespace BeyondNet.Demo.Vue.Api
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<ProductTable, Product>();
            CreateMap<Product, ProductTable>();
        }
    }
}
