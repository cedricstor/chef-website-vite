import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header style={{ backgroundColor: '#000', color: '#fff', padding: '2.5rem 1rem', textAlign: 'center' }}>
          <h1>Matric64</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Refined Private Chef Services by Cedric Bendavid</p>
        </header>

        <nav style={{ backgroundColor: '#333', color: '#fff', padding: '0.75rem', textAlign: 'center' }}>
          <Link to="/" style={navStyle}>About</Link>
          <Link to="/menu" style={navStyle}>Menu</Link>
          <Link to="/contact" style={navStyle}>Contact</Link>
        </nav>

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer style={{ backgroundColor: '#1a1a1a', color: '#bbb', textAlign: 'center', padding: '1.25rem', fontSize: '0.95rem' }}>
          <p>&copy; 2025 Matric64. All rights reserved. | Designed by Cedric Bendavid</p>
        </footer>
      </div>
    </Router>
  );
}

const navStyle = {
  color: '#fff',
  margin: '0 1.25rem',
  textDecoration: 'none',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
};

const sectionStyle = {
  padding: '2.5rem 1.5rem',
  maxWidth: '900px',
  margin: 'auto'
};

function About() {
  return (
    <section style={sectionStyle}>
      <h2>About</h2>
      <p>
        At <strong>Matric64</strong>, Cedric Bendavid offers bespoke private chef services tailored to elevate any dining occasion. With a background in fine cuisine and personalized hospitality, Cedric transforms meals into meaningful, memorable experiences—whether for intimate dinners or distinguished gatherings.
      </p>
    </section>
  );
}

function Menu() {
  return (
    <section style={sectionStyle}>
      <h2>Sample Menu</h2>
      <ul>
        <li>Heirloom Caprese Salad with Aged Balsamic Reduction</li>
        <li>Handmade Pappardelle with Morel Mushroom Cream Sauce</li>
        <li>Slow-Roasted Chicken Thighs with Rosemary Fingerling Potatoes</li>
        <li>Crème Brûlée Infused with Madagascar Vanilla Bean</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section style={sectionStyle}>
      <h2>Contact</h2>
      <p>For bookings or inquiries, please get in touch:</p>
      <p>📧 <a href="mailto:satiatemyhunger@gmail.com">satiatemyhunger@gmail.com</a></p>
      <p>📞 <a href="tel:+16474537128">(647) 453-7128</a></p>
    </section>
  );
}

export default App;
