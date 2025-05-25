function Testimonials() {
  const testimonials = [
    { id: 1, text: '"Encontrei ótimos produtos e dicas no site, recomendo!"', user: 'Usuário 1' },
    { id: 2, text: '"O blog sempre traz novidades interessantes."', user: 'Usuário 2' },
    { id: 3, text: '"Confio nas recomendações do Official Brands."', user: 'Usuário 3' }
  ];

  return (
    <section className="bg-blue-50 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">O que dizem sobre nós</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded shadow p-4">
              <p className="text-gray-600 mb-2">{testimonial.text}</p>
              <span className="text-gray-500 text-sm">— {testimonial.user}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
