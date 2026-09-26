import { useState } from 'react';
import './App.css';

const services = [
  {
    icon: 'Hair',
    title: 'Hair Styling',
    description: 'Elegant cuts, styling, and finishing touches for every occasion.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zTWrgvuRfsu3K7vzO2qDn_yO0O3XpJ9zBvA_7GqeyNiMixyayEVtxZAx&s=10',
  },
  {
    icon: 'Braids',
    title: 'Braiding',
    description: 'Creative, modern braiding looks designed to last and stand out.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGaxB86AY5wWz5K5JVgArMPOmZTuin4zhcg_MObA54A&s=10',
  },
  {
    icon: 'Bridal',
    title: 'Wedding Hair',
    description: 'Soft glam and bridal styling that feels special and timeless.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvWei97vz7U-XE7CpDmdo2L2k8j09lkGhIhpd2tYRMQ&s=10',
  },
  {
    icon: 'Care',
    title: 'Hair Care',
    description: 'Nourishing treatments and healthy hair care routines for shine.',
    image:
      'https://www.adeldirect.co.uk/blog/wp-content/uploads/2024/02/professional-haircare-blog-1.jpg',
  },
];

const products = [
  {
    name: 'Luxury Hair Serum',
    price: 'ETB 1,200',
    image:
      'https://www.themelanintone.com/wp-content/uploads/2026/06/Scalp-Care-Edit-for-Hair-Thinning-After-50-1024x576.jpg',
  },
  {
    name: 'Silk Wrap Set',
    price: 'ETB 950',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_CgtyfDwBCkPIS8xzUi_qzwByiBBA_6ne6rNWwe4CQ&s=10',
  },
  {
    name: 'Hair Growth Oil',
    price: 'ETB 800',
    image:
      'https://m.media-amazon.com/images/I/71em0GkOX4L._AC_UF350,350_QL80_.jpg',
  },
];

const rentals = [
  {
    title: 'Bridal Styling Kit',
    details: 'Includes accessories, pins, and finishing tools for polished styling.',
    image:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Event Hair Set',
    details: 'Perfect for special events, with flexible styling options and care support.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCSMibcatawgSleKhP0CzQ6oNR6Sbsa9yeElfpC_jAObxuQ_-GAjOi9I_&s=10',
  },
  {
    title: 'Beauty Station Bundle',
    details: 'A complete styling bundle for salon prep and client-ready finishing.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFdccTQXNV7cbZL15SYaOC_oTRBy-tQDGRvtzzycHwwA8V_BcPxv0hV98&s=10',
  },
];

const gallery = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIe7miHikp4J5CdpWoqKgEbPBtz4FaIKO2xnH_fyiDhg&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyY1M2fJ7N-Skj5BkJetKEJ7r1stqZaE3iafYaowW6w&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmBEuUY0Kvbt_PyMo5ifuVDYPuvDdH5nYAwQYlprAiA&s=10',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
];

const heroModelImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnByNUk6_okQMktXmEovCpB4AZgCH4KlqY9cgdcngViLfnt_mGb6UyAG7y&s=10';

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <a href="#home" className="brand">
          Beza Beauty Studio
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero({ onBookClick }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Luxury Hair & Beauty Studio</p>
          <h1>Beautiful Hair, Beautiful You</h1>
          <p className="hero-text">
            Discover polished looks, healthy hair care, and signature styling for
            everyday confidence and special moments.
          </p>

          <div className="cta-row">
            <button type="button" className="primary-button" onClick={onBookClick}>
              Book Appointment
            </button>
            <a href="#services" className="secondary-button">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>5+</strong>
              <span>Years of styling</span>
            </div>
            <div>
              <strong>2k+</strong>
              <span>Happy clients</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Booking support</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Beauty salon portrait">
          <div className="portrait-card">
            <img src={heroModelImage} alt="Beauty model with styled hair" />
            <div className="floating-badge">
              <span>Signature Look</span>
              <strong>Modern Beauty</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="content-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Our Signature Services</p>
          <h2>Hair care made for your lifestyle</h2>
        </div>

        <div className="cards-grid three-up service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <div className="icon-circle">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeautyShop() {
  return (
    <section id="shop" className="content-section soft-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Beauty Shop</p>
          <h2>Care products for healthy, radiant hair</h2>
        </div>

        <div className="cards-grid three-up">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="card-body">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rental() {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Rental & Styling Support</p>
          <h2>Convenient beauty essentials for your event</h2>
        </div>

        <div className="cards-grid three-up">
          {rentals.map((item) => (
            <article key={item.title} className="rental-card">
              <img src={item.image} alt={item.title} className="rental-image" />
              <div className="rental-content">
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bridal() {
  return (
    <section className="content-section bridal-section">
      <div className="container bridal-layout">
        <div>
          <p className="eyebrow">Bridal Beauty</p>
          <h2>Soft glam for your most memorable day</h2>
          <p>
            From elegant bridal styling to polished finishing details, we help you
            feel beautiful, confident, and camera-ready.
          </p>
        </div>

        <div className="bridal-card">
          <img
https://images.squarespace-cdn.com/content/v1/61ab7f28daafc31fda51e058/951fb4ff-e676-441a-bc5b-aac67476b19e/bshowemail1.jpeg?utm_source=chatgpt.com            alt="Bride in bridal dress with makeup and styled hair"
            className="bridal-image"
          />
          <span>Bridal Packages</span>
          <strong>Custom styling plans</strong>
          <p>Perfect for weddings, engagements, and special events.</p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="content-section gallery-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Gallery</p>
          <h2>Some of our signature looks</h2>
        </div>

        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Beauty studio look ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppointmentForm({ form, setForm, onSubmit, onClose }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const minDate = today.toISOString().split('T')[0];

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      const nextValue = value.replace(/[^A-Za-z ]/g, '');
      setForm((prev) => ({ ...prev, [name]: nextValue }));
      return;
    }

    if (name === 'phone') {
      const nextValue = value.replace(/\D/g, '');
      setForm((prev) => ({ ...prev, [name]: nextValue }));
      return;
    }

    if (name === 'date') {
      if (!value) {
        setForm((prev) => ({ ...prev, [name]: value }));
        return;
      }

      const selectedDate = new Date(`${value}T00:00:00`);
      if (selectedDate >= today) {
        setForm((prev) => ({ ...prev, [name]: value }));
      }
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="appointment-form">
        <div className="form-header">
          <h2>Book Your Appointment</h2>
          <button type="button" className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={onSubmit} className="form-body">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <select name="hairstyle" value={form.hairstyle} onChange={handleChange} required>
            <option value="">Select Service</option>
            <option value="Hair Styling">Hair Styling</option>
            <option value="Braiding">Braiding</option>
            <option value="Natural Hair">Natural Hair</option>
            <option value="Wedding Hair">Wedding Hair</option>
            <option value="Makeup">Makeup</option>
            <option value="Facial">Facial</option>
            <option value="Nails">Nails</option>
            <option value="Hair Care">Hair Care</option>
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            min={minDate}
            onChange={handleChange}
            required
          />

          <button type="submit" className="primary-button submit-button">
            Submit Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="content-section contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact Us</p>
          <h2>We’d love to hear from you</h2>
        </div>

        <div className="contact-info">
          <p>Phone: +251 923514021</p>
          <p>Location: Ethiopia</p>
          <p>Email:bezaamogne@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <p>© 2026 Beauty Studio</p>
        <p>Luxury hair styling and beauty care</p>
      </div>
    </footer>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    hairstyle: '',
    date: '',
  });

  const submitAppointment = async (event) => {
    event.preventDefault();

    const appointment = {
      name: form.name,
      phone: form.phone,
      hairstyle: form.hairstyle,
      date: form.date,
    };

    const response = await fetch('http://localhost:5000/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    });

    const data = await response.json();

    alert(data.message);
    setForm({ name: '', phone: '', hairstyle: '', date: '' });
    setShowForm(false);
  };

  return (
    <div className="page-shell">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Hero onBookClick={() => setShowForm(true)} />
        <Services />
        <BeautyShop />
        <Rental />
        <Bridal />
        <Gallery />
        <Contact />
      </main>

      {showForm && (
        <AppointmentForm
          form={form}
          setForm={setForm}
          onSubmit={submitAppointment}
          onClose={() => setShowForm(false)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;