import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Sustainability from './pages/Sustainability';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

type Page = 'home' | 'our-story' | 'sustainability' | 'contact-us';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'our-story':
        return <OurStory />;
      case 'sustainability':
        return <Sustainability />;
      case 'contact-us':
        return <ContactUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-primary font-body">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;