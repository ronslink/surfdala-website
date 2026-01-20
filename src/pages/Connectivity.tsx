import { motion } from 'framer-motion';

const Connectivity = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <section className="container" style={{ marginBottom: '4rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 4rem' }}
                >
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                        Connecting <span className="text-gradient">Communities</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                        Bridging the digital divide with affordable, high-speed internet solutions for underserved areas in Kenya.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', textAlign: 'left' }}>

                    {/* Mission and Vision Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass"
                            style={{ padding: '2.5rem', borderRadius: '16px' }}
                        >
                            <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>Our Mission</h2>
                            <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                                To bridge the digital divide by providing affordable and reliable internet access to underserved communities in Kenya.
                                We aim to empower residents, businesses, and institutions by unlocking educational resources and economic opportunities.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass"
                            style={{ padding: '2.5rem', borderRadius: '16px' }}
                        >
                            <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>Our Vision</h2>
                            <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                                A future where every resident can connect, communicate, and thrive. We aspire to transform the connectivity landscape
                                across rural Kenya, ensuring no community is left behind in the digital age.
                            </p>
                        </motion.div>
                    </div>

                    {/* Network Diagram Section */}
                    <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '3rem' }}>Network Architecture</h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="glass"
                            style={{
                                padding: '2rem',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'inline-block',
                                maxWidth: '100%',
                                overflow: 'hidden'
                            }}
                        >
                            <img
                                src="/src/assets/enhanced_network_diagram.png"
                                alt="Advanced Network Architecture"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    filter: 'brightness(0.9) contrast(1.1)' // Slight adjustment for dark mode integration
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Detailed Proposed Services */}
                    <div>
                        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Our Services</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                            <motion.div
                                className="glass"
                                style={{ padding: '2rem', borderRadius: '16px' }}
                            >
                                <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>WiFi Hotspot Services</h3>
                                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                    Revolutionizing internet access with a flexible pay-as-you-go model. Perfect for high-traffic communal areas.
                                </p>
                                <ul style={{ listStyle: 'none' }}>
                                    {[
                                        'No monthly contracts - Pay only for what you use',
                                        'Strategically placed in markets, schools, and gathering places',
                                        'Supports up to 254 concurrent users per node',
                                        'Community-driven installations creating local jobs',
                                        'Starlink Backhaul redundancy'
                                    ].map((item, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                            <span style={{ color: 'var(--primary-color)' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                className="glass"
                                style={{ padding: '2rem', borderRadius: '16px' }}
                            >
                                <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>PPPOE Services</h3>
                                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                    Dedicated high-speed connectivity for those who need consistency. Ideal for homes and micro-businesses.
                                </p>
                                <ul style={{ listStyle: 'none' }}>
                                    {[
                                        'Tiered subscription plans for every budget',
                                        'Secure, private connections with enhanced data protection',
                                        'Reliable bandwidth for distance learning and operations',
                                        'Local technician support for rapid assistance',
                                        'Multi-provider redundancy (Safaricom/Airtel)'
                                    ].map((item, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                            <span style={{ color: 'var(--primary-color)' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Connectivity;
