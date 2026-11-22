
import React from 'react';
import './app.css';

const menuItems = [
  {
    name: 'Masala Chai',
    category: 'Tea',
    price: '₹20',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600'
  },
  {
    name: 'Adrak Chai',
    category: 'Tea',
    price: '₹20',
    image: '/images/adrak-chai.png'
  },
  {
    name: 'Filter Coffee',
    category: 'Coffee',
    price: '₹30',
    image: '/images/filter-coffee.jpg'
  },
  {
    name: 'Hot Coffee',
    category: 'Coffee',
    price: '₹30',
    image: '/images/hot-coffee.jpg'
  },
  {
    name: 'Samosa',
    category: 'Snacks',
    price: '₹15',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600'
  },
  {
    name: 'Onion Bajji',
    category: 'Snacks',
    price: '₹25',
    image: '/images/onion-bajji.jpg'
  },
  {
    name: 'Veg Puff',
    category: 'Bakery',
    price: '₹20',
    image: '/images/veg-puff.jpg'
  },
  {
    name: 'Butter Cookies',
    category: 'Bakery',
    price: '₹20',
    image: '/images/butter-cookies.jpg'
  },
  {
    name: 'Jam Biscuits',
    category: 'Bakery',
    price: '₹20',
    image: '/images/jam-biscuits.jpg'
  }
];

const galleryImages = [
  '/images/adrak-chai.png',
  '/images/veg-puff.jpg',
  '/images/onion-bajji.jpg'
];

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        SIKANDER<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#menu" className="nav-button">
        Explore Menu
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">☕ WELCOME TO SIKANDER CAFÉ</p>

        <h1>
          Chai, Coffee &<br />
          <span>Choti Khushiyan.</span>
        </h1>

        <p className="hero-description">
          From a refreshing cup of chai to your favourite
          evening snacks, enjoy simple flavours and good
          moments at Sikander Café.
        </p>

        <a href="#menu" className="primary-button">
          Explore Our Menu →
        </a>

        <div className="hero-note">
          Freshly served. Full of flavour. Made for you.
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/adrak-chai.png"
          alt="A warm cup of Indian tea"
        />
        <div className="image-tag">
          <span>☕</span>
          <div>
            <strong>Chai Time!</strong>
            <small>Your everyday happiness</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="about-image">
        <img
          src="/images/filter-coffee.jpg"
          alt="Cozy cafe space"
        />
      </div>

      <div className="about-content">
        <p className="eyebrow">OUR STORY</p>

        <h2>
          A Little Break.<br />
          A Lot of Happiness.
        </h2>

        <p>
          Welcome to Sikander Café, a friendly neighbourhood
          spot for chai lovers, coffee enthusiasts and
          everyone who enjoys tasty snacks.
        </p>

        <p>
          Whether it's a morning coffee, an evening chai
          with friends or a quick snack break, there's
          always a reason to stop by.
        </p>

        <a href="#contact" className="text-link">
          Come Visit Us →
        </a>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section className="menu-section section" id="menu">
      <div className="section-heading">
        <p className="eyebrow">MADE WITH LOVE ❤️</p>
        <h2>Our Chai & Snacks</h2>
        <p>
          Simple favourites that make every break special.
        </p>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.name}>
            <div className="menu-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="menu-info">
              <p>{item.category}</p>
              <h3>{item.name}</h3>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="sample-note">
        Sample menu and prices. Actual offerings to be confirmed.
      </p>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="section-heading">
        <p className="eyebrow">A GLIMPSE OF SIKANDER</p>
        <h2>Good Food. Good Vibes.</h2>
        <p>
          Little moments, lovely flavours and happy memories.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Cafe gallery ${index + 1}`}
          />
        ))}
      </div>

      <p className="sample-note">
        Illustrative café photos. Replace with actual photos.
      </p>
    </section>
  );
}


const reviews = [
  { name: 'A chai lover', rating: 5, text: 'The adrak chai is full of flavour. A lovely place for an evening tea break!' },
  { name: 'Coffee fan', rating: 5, text: 'Really enjoyed the hot coffee. Simple, comforting and just what I needed.' },
  { name: 'Local visitor', rating: 4, text: 'Tasty snacks and a nice spot to catch up with friends.' },
  { name: 'Snack lover', rating: 4, text: 'The puffs and bajji look delicious. Good option for a quick snack.' },
  { name: 'Regular tea drinker', rating: 4, text: 'A pleasant place to enjoy chai. Would love to visit again.' },
  { name: 'First-time visitor', rating: 3, text: 'Good tea and snacks. There is room to make the experience even better.' }
];

function Reviews() {
  return (
    <section className="reviews section" id="reviews">
      <div className="section-heading">
        <p className="eyebrow">KIND WORDS</p>
        <h2>What People Say</h2>
        <p>A little feedback makes every cup more special.</p>
      </div>

      <div className="review-summary">
        <strong>4.2/5</strong>
        <span className="review-stars" aria-label="Illustrative average rating">★★★★☆</span>
        <small>Sample rating display · 6 example reviews</small>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <article className="review-card" key={index}>
            <div className="review-card-top">
              <span className="review-avatar">{review.name.charAt(0)}</span>
              <div>
                <h3>{review.name}</h3>
                <span className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </span>
              </div>
            </div>
            <p>“{review.text}”</p>
          </article>
        ))}
      </div>

      <p className="sample-note">
        Demo reviews and ratings for website preview only. Replace with genuine customer feedback before publishing.
      </p>
    </section>
  );
}
function Contact() {
  return (
    <section className="contact section" id="contact">
      <p className="eyebrow">COME SAY HELLO!</p>

      <h2>Your Chai Break Awaits.</h2>

      <p className="contact-description">
        Drop by for a cup of chai, a coffee or your favourite
        evening snack. We'd love to see you!
      </p>

      <div className="contact-details">
        <div className="contact-card">
          <span>📍</span>
          <h3>Find Us</h3>
          <p>Nellore, Andhra Pradesh, India</p>
        </div>

        <div className="contact-card">
          <span>☕</span>
          <h3>What We Serve</h3>
          <p>Tea, Coffee, Snacks & More</p>
        </div>

        <div className="contact-card">
          <span>🕒</span>
          <h3>Opening Hours</h3>
          <p>To be confirmed</p>
        </div>
      </div>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Sikander+Cafe+Nellore"
        target="_blank"
        rel="noreferrer"
        className="primary-button"
      >
        Find Us on Maps →
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <h2>SIKANDER<span>.</span></h2>

      <p>Chai, Coffee & Choti Khushiyan.</p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </div>

      <p className="copyright">
        © 2026 Sikander Café. Website concept.
      </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
