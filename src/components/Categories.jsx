function Categories() {
  const categories = [
    "Tecnologia", "Saúde", "Cursos", "Dicas", "Notícias", "Variedades"
  ];

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Categorias</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <span key={category} className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
            {category}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Categories;
