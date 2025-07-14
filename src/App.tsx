import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Sustainability from './pages/Sustainability';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import Blog from './pages/Blog';

export type Page = 'home' | 'our-story' | 'sustainability' | 'contact-us' | 'gallery' | 'blog';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'our-story':
        return <OurStory />;
      case 'sustainability':
        return <Sustainability />;
      case 'contact-us':
        return <ContactUs />;
      case 'gallery':
        return <GallerySection />;
      case 'blog':
        return <Blog />;
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
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;