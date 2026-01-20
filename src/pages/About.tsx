import { motion } from 'framer-motion';

const About = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <section className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                >
                    <h1 className="text-gradient">About SurfDala</h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
                        We are a team of visionaries dedicated to elevating the African tech landscape.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginTop: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div style={{
                            width: '100%',
                            borderRadius: 'var(--border-radius)',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* Placeholder for founder image if not present */}
                            <img src="/src/assets/founder.jpg" alt="Sam Olago" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
                                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x500?text=Founder+Image'; }} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 style={{ marginBottom: '1rem' }}>Meet the Founder</h2>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Sam Olago</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            An Electrical Engineer with a distinguished background, having studied in Russia. Sam combines deep technical expertise with a global perspective to drive innovation in Kenya.
                        </p>
                        <p>
                            His vision is to create a digital ecosystem where technology serves the community. From AI-driven software to bridging the digital divide, SurfDala is committed to simplifying lives and empowering businesses.
                        </p>
                        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                            SurfDala Ltd. is dedicated to enhancing internet accessibility for underserved communities across Kenya, ensuring no one is left behind in the digital age.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
