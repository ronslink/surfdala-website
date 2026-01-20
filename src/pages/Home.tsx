import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="hero" style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, rgba(5, 5, 5, 1) 70%), url(/src/assets/hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                marginTop: '-80px' // Counteract navbar height for full screen effect
            }}>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '4rem', marginBottom: '1.5rem' }}
                    >
                        Surfing the Waves of <br />
                        <span className="text-gradient">Digital Transformation</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}
                    >
                        SurfDala is a Kenyan powerhouse specializing in AI-driven software engineering.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <Link to="/paydome" className="btn btn-primary">Discover Paydome</Link>
                        <Link to="/connectivity" className="btn btn-outline">Connectivity</Link>
                        <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                    </motion.div>
                </div>
            </section>

            <section className="services" style={{ background: 'var(--surface-color)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="text-gradient">What We Do</h2>
                        <p>Pioneering the future of technology in Africa</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'AI Solutions', desc: 'Leveraging machine learning to solve complex business problems.' },
                            { title: 'Software Engineering', desc: 'Building robust, scalable, and secure applications.' },
                            { title: 'Connectivity', desc: 'Providing affordable internet to underserved communities.' },
                            { title: 'Digital Consulting', desc: 'Guiding organizations through their digital transformation journey.' }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="glass"
                                style={{ padding: '2rem', borderRadius: 'var(--border-radius)' }}
                            >
                                <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
                                <p>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
