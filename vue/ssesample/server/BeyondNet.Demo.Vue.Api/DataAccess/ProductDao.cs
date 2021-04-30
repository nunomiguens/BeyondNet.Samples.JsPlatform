using AutoMapper;
using BeyondNet.Demo.Vue.Api.Domain;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BeyondNet.Demo.Vue.Api.DataAccess
{
    public class ProductDao : IProductRepository
    {
        private readonly ProductDbContext _context;
        private readonly IMapper _mapper;

        public ProductDao(ProductDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;

            if (!_context.Products.Any())
            {
                context.Products.AddRange(new List<ProductTable>
                {
                    new ProductTable { Id = "1", Code = "P0001", Description= "Pera", Ean  = "E11111", UnitPrice = 2.3m, Stock = 5, Status = 1 },
                    new ProductTable { Id = "2", Code = "P0002", Description= "Manzana", Ean  = "E22222", UnitPrice = 1.3m, Stock = 2, Status = 1 },
                    new ProductTable { Id = "3", Code = "P0003", Description= "Melocotón", Ean  = "E33333", UnitPrice = 1.0m, Stock = 2, Status = 1 },
                    new ProductTable { Id = "4", Code = "P0004", Description= "Uva", Ean  = "E44444", UnitPrice = 3.3m, Stock = 30, Status = 1 },
                    new ProductTable { Id = "5", Code = "P0005", Description= "Naranja", Ean  = "E55555", UnitPrice = 1.3m, Stock = 3, Status = 1 },
                    new ProductTable { Id = "6", Code = "P0006", Description= "Mandarina", Ean  = "E66666", UnitPrice = 0.3m, Stock = 3, Status = 1 },
                    new ProductTable { Id = "7", Code = "P0007", Description= "Platano", Ean  = "E77777", UnitPrice = 2.3m, Stock = 3, Status = 1 },
                    new ProductTable { Id = "8", Code = "P0008", Description= "Melón", Ean  = "E88888", UnitPrice = 5.3m, Stock = 3, Status = 1 },
                    new ProductTable { Id = "9", Code = "P0009", Description= "Piña", Ean  = "E999999", UnitPrice = 3.3m, Stock = 3, Status = 1 },
                    new ProductTable { Id = "10", Code = "P0010", Description= "Ciruela", Ean  = "E10101", UnitPrice = 2.3m, Stock = 13, Status = 1 }
                });

                context.SaveChanges();
            }
        }

        public IQueryable<Product> GetAll()
        {
            var products = _context.Products;

            var productsToReturn = new List<Product>();

            _mapper.Map(products, productsToReturn);

            return productsToReturn.AsQueryable();
        }

        public void Add(Product obj)
        {
            var productToSave = new ProductTable();

            _mapper.Map(obj, productToSave);

            _context.Products.Add(productToSave);

            _context.SaveChanges();
        }

        public void Delete(Product obj)
        {
            var productToDelete = new ProductTable();

            _mapper.Map(obj, productToDelete);

            _context.Products.Remove(productToDelete);

            _context.SaveChanges();
        }

        public Product Get(string id)
        {
            var product = _context.Products.FirstOrDefault(p => p.Id == id);

            if (product == null)
                throw new ApplicationException($"Product with Id:{id} cannot be found.");

            var productToReturn = new Product();

            _mapper.Map(product, productToReturn);

            return productToReturn;
        }

        public void Update(Product obj)
        {
            var productToUpdate = _context.Products.First(p => p.Id == obj.Id);

            if (productToUpdate == null)
                throw new ApplicationException($"Product with Id:{obj.Id} cannot be found.");

            _mapper.Map(obj, productToUpdate);

            _context.Products.Update(productToUpdate);

            _context.SaveChanges();
        }
    }
}

