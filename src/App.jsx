import './App.css';

function App() {
  return (
    <>
      <header style={{ backgroundColor: '#000', color: '#fff', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <h1>Matric64</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Refined Private Chef Services by Cedric Bendavid</p>
      </header>

      <nav style={{ backgroundColor: '#333', color: '#fff', padding: '0.75rem', textAlign: 'center' }}>
        <a href="#about" style={navStyle}>About</a>
        <a href="#menu" style={navStyle}>Menu</a>
        <a href="#contact" style={navStyle}>Contact</a>
      </nav>

      <section id="about" style={sectionStyle}>
        <h2>About</h2>
        <p>
          At <strong>Matric64</strong>, Cedric Bendavid offers bespoke private chef services tailored to elevate any dining occasion. With a background in fine cuisine and personalized hospitality, Cedric transforms meals into meaningful, memorable experiences—whether for intimate dinners or distinguished gatherings.
        </p>
      </section>

      <section id="menu" style={sectionStyle}>
        <h2>Sample Menu</h2>
        <ul>
          <li>Heirloom Caprese Salad with Aged Balsamic Reduction</li>
          <li>Handmade Pappardelle with Morel Mushroom Cream Sauce</li>
          <li>Slow-Roasted Chicken Thighs with Rosemary Fingerling Potatoes</li>
          <li>Crème Brûlée Infused with Madagascar Vanilla Bean</li>
        </ul>
      </section>

      <section id="contact" style={sectionStyle}>
        <h2>Contact</h2>
        <p>For bookings or inquiries, please get in touch:</p>
        <p>📧 <a href="mailto:satiatemyhunger@gmail.com">satiatemyhunger@gmail.com</a></p>
        <p>📞 <a href="tel:+16474537128">(647) 453-7128</a></p>
      </section>

      <footer style={{ backgroundColor: '#1a1a1a', color: '#bbb', textAlign: 'center', padding: '1.25rem', fontSize: '0.95rem' }}>
        <p>&copy; 2025 Matric64. All rights reserved. | Designed by Cedric Bendavid</p>
      </footer>
    </>
  );
}

const navStyle = {
  color: '#fff',
  margin: '0 1.25rem',
  textDecoration: 'none',
  fontWeight: '500'
};

const sectionStyle = {
  padding: '2.5rem 1.5rem',
  maxWidth: '900px',
  margin: 'auto'
};

export default App;
