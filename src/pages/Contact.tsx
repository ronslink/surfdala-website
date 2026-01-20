import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}
                >
                    <h1 className="text-gradient">Get in Touch</h1>
                    <p style={{ marginBottom: '3rem' }}>
                        Ready to transform your business or have questions about Paydome? We're here to help.
                    </p>

                    <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--border-radius)', textAlign: 'left' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                            <input type="text" style={{
                                width: '100%',
                                padding: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: 'white'
                            }} placeholder="Your Name" />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                            <input type="email" style={{
                                width: '100%',
                                padding: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: 'white'
                            }} placeholder="your@email.com" />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                            <textarea style={{
                                width: '100%',
                                padding: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: 'white',
                                minHeight: '150px'
                            }} placeholder="How can we help you?"></textarea>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>

                        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <p>Or email us directly at:</p>
                            <a href="mailto:surdala1@gmail.com" style={{ color: 'var(--primary-color)' }}>surdala1@gmail.com</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
