namespace BeyondNet.Demo.Vue.Api.Domain
{
    public class Product
    {
        public string Id { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string Ean { get; set; }
        public decimal UnitPrice { get; set; }
        public int Stock { get; set; }
        public int Status { get; set; }
    }
}
