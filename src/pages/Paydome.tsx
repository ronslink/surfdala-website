import { motion } from 'framer-motion';

const Paydome = () => {
    const tiers = [
        {
            name: 'Free',
            price: '$0',
            period: '/month',
            features: ['1 domestic worker profile', 'Basic payment tracking', 'Manual payments only'],
            highlight: false
        },
        {
            name: 'Basic',
            price: '$15',
            period: '/month',
            features: ['Up to 3 domestic workers', 'M-Pesa bulk payments', 'PAYE/NSSF/NHIF calculations', 'SMS notifications'],
            highlight: true
        },
        {
            name: 'Professional',
            price: '$45',
            period: '/month',
            features: ['Up to 10 domestic workers', 'Advanced HR management', 'Contract management', 'Priority support'],
            highlight: false
        }
    ];

    return (
        <div style={{ paddingTop: '100px' }}>
            <section className="container" style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Pay<span className="text-gradient">Dome</span></h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                            The ultimate solution for managing domestic workers in Kenya. Automate payments, ensure compliance, and simplify HR tasks.
                        </p>
                        <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                'M-Pesa Native Integration',
                                'Kenya Tax Law Compliance',
                                'Expat-Focused UX'
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--primary-color)' }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary">Get Started</button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass"
                        style={{
                            height: '500px',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        {/* Mockup Placeholder */}
                        <img src="/src/assets/paydome_mockup.png" alt="Paydome App" style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
                            onError={(e) => { e.currentTarget.style.display = 'none'; if (e.currentTarget.parentElement) e.currentTarget.parentElement.innerText = 'App Mockup Preview'; }} />
                    </motion.div>
                </div>
            </section>

            <section style={{ backgroundColor: 'var(--surface-color)', padding: '80px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2>Simple Pricing</h2>
                        <p>Choose the plan that fits your household needs</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {tiers.map((tier, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className={`glass ${tier.highlight ? 'highlight-card' : ''}`}
                                style={{
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    border: tier.highlight ? '1px solid var(--primary-color)' : '1px solid rgba(255,255,255,0.1)',
                                    position: 'relative'
                                }}
                            >
                                {tier.highlight && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        right: '20px',
                                        background: 'var(--primary-gradient)',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: 600
                                    }}>
                                        Recommended
                                    </span>
                                )}
                                <h3>{tier.name}</h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700, margin: '1rem 0' }}>
                                    {tier.price}<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{tier.period}</span>
                                </div>
                                <ul style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {tier.features.map((feature, i) => (
                                        <li key={i} style={{ color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
                                            <span>•</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`btn ${tier.highlight ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                                    Choose Plan
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Paydome;
