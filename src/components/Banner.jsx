function Banner() {
  return (
    <section className="bg-blue-50 py-10">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Descubra os melhores produtos e fique por dentro das novidades!
        </h1>
        <p className="text-gray-600 text-center mb-6 max-w-xl">
          Curadoria de produtos físicos e digitais, notícias, dicas e tendências para você comprar melhor e se informar.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 font-semibold">
            Veja nossos reviews
          </a>
          <a href="#" className="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-blue-50 font-semibold">
            Leia as últimas notícias
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
