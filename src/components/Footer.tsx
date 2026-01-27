import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--secondary-color)',
            padding: '4rem 0',
            marginTop: 'auto',
            color: 'var(--text-on-dark)'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: 'white' }}>Surf<span className="text-gradient">Dala</span></h3>
                        <p style={{ color: '#94a3b8' }}>Surfing the Waves of Digital Transformation.</p>
                        <p style={{ color: '#94a3b8' }}>Specializing in AI-driven software and internet accessibility in Kenya.</p>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.2rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link to="/" style={{ color: '#cbd5e1' }}>Home</Link></li>
                            <li><Link to="/about" style={{ color: '#cbd5e1' }}>About Us</Link></li>
                            <li><Link to="/paydome" style={{ color: '#cbd5e1' }}>Paydome</Link></li>
                            <li><Link to="/connectivity" style={{ color: '#cbd5e1' }}>Connectivity</Link></li>
                            <li><Link to="/contact" style={{ color: '#cbd5e1' }}>Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.2rem' }}>Contact</h4>
                        <p style={{ color: '#94a3b8' }}>Nairobi, Kenya</p>
                        <a href="mailto:surfdala1@gmail.com" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
                            surfdala1@gmail.com
                        </a>
                    </div>
                </div>

                <div style={{
                    marginTop: '3rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center',
                    color: '#64748b',
                    fontSize: '0.9rem'
                }}>
                    &copy; {new Date().getFullYear()} SurfDala Limited. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
