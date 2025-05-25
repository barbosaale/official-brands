function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex flex-col items-center py-6">
        {/* Logo */}
        <div className="logo-box" style={{
          background: '#111827',
          borderRadius: 12,
          padding: '24px 32px',
          display: 'inline-block',
          boxShadow: '0 2px 12px #0004',
          marginBottom: 16
        }}>
          <div className="logo-shape" style={{
            border: '2px solid #38bdf8',
            borderRadius: 8,
            padding: '8px 0 0 0',
            marginTop: 8,
            position: 'relative'
          }}>
            <div className="logo-text" style={{
              color: '#fff',
              fontFamily: 'Montserrat, Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: '2rem',
              letterSpacing: '0.1em',
              textAlign: 'center'
            }}>OFFICIAL</div>
            <div className="logo-line" style={{
              borderTop: '2px solid #38bdf8',
              width: 80,
              margin: '8px auto 0 auto'
            }}></div>
            <div className="logo-text" style={{
              color: '#fff',
              fontFamily: 'Montserrat, Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              letterSpacing: '0.1em',
              textAlign: 'center'
            }}>BRANDS</div>
          </div>
        </div>
        {/* Menu */}
        <nav className="mt-4">
          <ul className="flex space-x-6 text-gray-700 font-semibold">
            <li><a href="#" className="hover:text-blue-500">Início</a></li>
            <li><a href="#" className="hover:text-blue-500">Produtos</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500">Sobre</a></li>
            <li><a href="#" className="hover:text-blue-500">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
