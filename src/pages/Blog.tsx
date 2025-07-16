import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Blog Content Section */}
      <section className="py-20 bg-white min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Blog Coming Soon</h1>
      </section>

      {/* Bottom Image Section - Full image visible */}
      <section className="relative h-[300px] overflow-hidden">
  <img
    src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752584462/5a04ac7e-941d-412c-a175-34762d2256ff_audxjg.jpg"
    alt="Contact and Footer Background"
    className="w-full h-full object-cover object-bottom"
  />
</section>
    </div>
  );
};

export default Blog; 