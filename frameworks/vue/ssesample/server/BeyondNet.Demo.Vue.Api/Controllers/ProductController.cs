using BeyondNet.Demo.Vue.Api.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;

namespace BeyondNet.Demo.Vue.Api.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;


        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet("GetAllProducts")]
        public ActionResult GetAll()
        {
            var products = _productRepository.GetAll();

            if (!products.Any())
            {
                return NotFound(products);
            }

            return Ok(products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProductById(string id)
        {
            var item = _productRepository.Get(id);

            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }

        [HttpPost]
        public IActionResult CreateProduct([FromBody]Product item)
        {
            _productRepository.Add(item);

            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(string id, [FromBody]Product item)
        {
            var notify = _productRepository.Get(id);

            if (notify == null)
            {
                return NotFound();
            }

            _productRepository.Update(item);

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(string id)
        {
            var notify = _productRepository.Get(id);

            if (notify == null)
            {
                return NotFound();
            }

            _productRepository.Delete(notify);

            return Ok();
        }
    }
}
