import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Paydome', path: '/paydome' },
    { name: 'Connectivity', path: '/connectivity' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 700, zIndex: 101 }}>
          Surf<span className="text-gradient">Dala</span>
        </Link>

        {/* Desktop Menu */}
        <ul style={{ display: 'flex', gap: '2rem' }} className="hidden-mobile">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                style={{
                  color: location.pathname === link.path ? 'var(--primary-color)' : 'var(--text-primary)',
                  fontWeight: 500
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle (Simplified for MVP) */}
        {/* Further implementation would go here */}
      </div>
    </nav>
  );
};

export default Navbar;
