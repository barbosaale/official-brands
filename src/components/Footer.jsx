function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold">Official Brands</span> &copy; {currentYear}
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400">Política de Privacidade</a>
          <a href="#" className="hover:text-blue-400">Termos de Uso</a>
          <a href="#" className="hover:text-blue-400">Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
