import React from "react";
import "./App.css";

const App: React.FC = () => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="pbs-page">
            {/* Navigation */}
            <header className="pbs-header">
                <div className="pbs-logo">
                    <div className="pbs-logo-title font-logo">
                        Pico-Bello Service
                    </div>
                    <div className="pbs-logo-sub">Glas- und Gebäudereinigung</div>
                </div>

                <nav className="pbs-nav">
                    <button onClick={() => scrollTo("services")}>Leistungen</button>
                    <button onClick={() => scrollTo("about")}>Über uns</button>
                    <button onClick={() => scrollTo("contact")}>Kontakt</button>
                </nav>
            </header>

            {/* Hero section */}
            <section className="pbs-hero">
                <div className="pbs-hero-image">
                    <img
                        src="/images/hero-window.jpg"
                        alt="Professioneller Fensterreiniger bei der Arbeit"
                    />
                </div>
                <div className="pbs-hero-content">
                    <p className="pbs-hero-overline">
                        Glas- und Gebäudereinigung in Braunschweig
                    </p>
                    <h1>
                        Zuverlässige Glas- und Gebäudereinigung
                        <br />
                        in Braunschweig &amp; Umgebung
                    </h1>
                    <p className="pbs-hero-text">
                        Streifenfreie Fenster, gepflegte Treppenhäuser und saubere
                        Objekte&nbsp;– Pico-Bello Service bietet gründliche, flexible
                        Reinigung für Firmen und Privathaushalte.
                    </p>
                    <button
                        className="pbs-hero-cta"
                        onClick={() => scrollTo("contact")}
                    >
                        Kostenloses Angebot anfordern
                    </button>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="pbs-section pbs-services">
                <h2>Unsere Leistungen</h2>

                <div className="pbs-services-grid">
                    <article className="pbs-service-card">
                        <div className="pbs-service-image">
                            <img
                                src="/images/service-glas.jpg"
                                alt="Glasreinigung – Fenster und Glasfassaden"
                            />
                        </div>
                        <h3>Glasreinigung</h3>
                        <p>
                            Streifenfreie Reinigung von Fenstern, Schaufenstern und
                            Glasfassaden – innen und außen.
                        </p>
                    </article>

                    <article className="pbs-service-card">
                        <div className="pbs-service-image">
                            <img
                                src="/images/service-gebaeude.jpeg"
                                alt="Gebäudereinigung – Büro und Eingangsbereich"
                            />
                        </div>
                        <h3>Gebäudereinigung</h3>
                        <p>
                            Gründliche Reinigung von Treppenhäusern, Büros, Eingangsbereichen
                            und Allgemeinflächen.
                        </p>
                    </article>

                    <article className="pbs-service-card">
                        <div className="pbs-service-image">
                            <img
                                src="/images/service-grund.jpg"
                                alt="Grundreinigung von Böden"
                            />
                        </div>
                        <h3>Grundreinigung</h3>
                        <p>
                            Intensivreinigung von Böden und Oberflächen, z.&nbsp;B. nach
                            Renovierungen oder Umzügen.
                        </p>
                    </article>

                    <article className="pbs-service-card">
                        <div className="pbs-service-image">
                            <img
                                src="/images/service-unterhalt.jpg"
                                alt="Unterhaltsreinigung – regelmäßige Büroreinigung"
                            />
                        </div>
                        <h3>Unterhaltsreinigung</h3>
                        <p>
                            Regelmäßige Reinigung von Büros, Praxen und Objekten nach
                            individuellem Rhythmus.
                        </p>
                    </article>
                </div>
            </section>

            {/* About + Contact */}
            <section className="pbs-section pbs-two-column" id="about">
                <div className="pbs-about">
                    <h2>Über Pico-Bello Service</h2>
                    <p>
                        Pico-Bello Service ist ein inhabergeführtes
                        Reinigungsunternehmen mit persönlichem Kontakt und direkter
                        Betreuung durch Amal Khalifa in Braunschweig.
                    </p>
                    <ul className="pbs-list">
                        <li>✔ Faire, transparente Preise</li>
                        <li>✔ Persönlicher Kontakt &amp; flexible Termine</li>
                        <li>✔ Zuverlässige, gründliche Arbeitsweise</li>
                    </ul>
                </div>

                <div className="pbs-contact" id="contact">
                    <h2>Kontakt</h2>
                    <p>Schreiben Sie uns für ein unverbindliches Angebot.</p>
                    <form
                        className="pbs-contact-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Formular-Demo – hier Backend / Email-Service anbinden.");
                        }}
                    >
                        <label>
                            Name
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            E-Mail
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Telefonnummer
                            <input type="tel" name="phone" />
                        </label>
                        <label>
                            Nachricht
                            <textarea name="message" rows={4} required />
                        </label>
                        <button type="submit" className="pbs-hero-cta">
                            Nachricht senden
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="pbs-footer">
                <span>Pico-Bello Service · Glas- und Gebäudereinigung</span>
                <span>Amal Khalifa · Braunschweig</span>
            </footer>
        </div>
    );
};

export default App;
