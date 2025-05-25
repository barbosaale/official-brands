function TopProducts() {
  const products = [
    { id: 1, name: 'Produto 1', description: 'Breve descrição do produto.' },
    { id: 2, name: 'Produto 2', description: 'Breve descrição do produto.' },
    { id: 3, name: 'Produto 3', description: 'Breve descrição do produto.' }
  ];

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Produtos do Mês</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded mb-3 flex items-center justify-center">Imagem</div>
            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <a href="#" className="text-blue-500 font-semibold hover:underline">Ver review</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopProducts;
