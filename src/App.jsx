import './App.css';

function App() {
  return (
    <>
      <header style={{ backgroundColor: '#000', color: '#fff', padding: '2rem 1rem', textAlign: 'center' }}>
        <h1>Matric64</h1>
        <p>Private Chef Services by Cedric</p>
      </header>

      <nav style={{ backgroundColor: '#444', color: '#fff', padding: '0.5rem', textAlign: 'center' }}>
        <a href="#about" style={navStyle}>About</a>
        <a href="#menu" style={navStyle}>Menu</a>
        <a href="#contact" style={navStyle}>Contact</a>
      </nav>

      <section id="about" style={sectionStyle}>
        <h2>About</h2>
        <p>Welcome to Matric64. I’m Cedric – a private chef offering curated dining experiences, custom menus, and heartfelt cooking. Whether it’s a special event or everyday gourmet, you’re in expert hands.</p>
      </section>

      <section id="menu" style={sectionStyle}>
        <h2>Sample Menu</h2>
        <ul>
          <li>Caprese Salad with Balsamic Reduction</li>
          <li>Handmade Pasta with Morel Cream Sauce</li>
          <li>Roasted Chicken Thighs with Rosemary Fingerlings</li>
          <li>Crème Brûlée with Fresh Vanilla Bean</li>
        </ul>
      </section>

      <section id="contact" style={sectionStyle}>
        <h2>Contact</h2>
        <p>📧 <a href="mailto:satiatemyhunger@gmail.com">satiatemyhunger@gmail.com</a></p>
        <p>📞 <a href="tel:+16474537128">(647) 453-7128</a></p>
      </section>

      <footer style={{ backgroundColor: '#222', color: '#bbb', textAlign: 'center', padding: '1rem', fontSize: '0.9rem' }}>
        <p>&copy; 2025 Matric64. All rights reserved.</p>
      </footer>
    </>
  );
}

const navStyle = {
  color: '#fff',
  margin: '0 1rem',
  textDecoration: 'none'
};

const sectionStyle = {
  padding: '2rem 1rem',
  maxWidth: '900px',
  margin: 'auto'
};

export default App;
