import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Blog Content Section */}
      <section className="py-20 bg-white min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Blog Coming Soon</h1>
      </section>

      {/* Bottom Image Section - Full image visible */}
      <section className="relative">
        <img
          src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752235157/WhatsApp_Image_2025-07-11_at_5.28.42_PM_nxbdi8.jpg"
          alt="Contact and Footer Background"
          className="w-full object-contain"
        />
      </section>
    </div>
  );
};

export default Blog; 