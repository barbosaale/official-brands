function BlogPosts() {
  const posts = [
    { id: 1, title: 'Título do Post 1', summary: 'Resumo do post ou notícia.' },
    { id: 2, title: 'Título do Post 2', summary: 'Resumo do post ou notícia.' },
    { id: 3, title: 'Título do Post 3', summary: 'Resumo do post ou notícia.' }
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Últimas do Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded shadow p-4">
              <div className="w-full h-32 bg-gray-200 rounded mb-3 flex items-center justify-center">Imagem</div>
              <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
              <p className="text-gray-500 mb-2">{post.summary}</p>
              <a href="#" className="text-blue-500 font-semibold hover:underline">Leia mais</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPosts;
