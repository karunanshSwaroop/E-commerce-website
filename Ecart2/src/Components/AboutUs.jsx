import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We are committed to providing the best quality products with
            exceptional service. Learn more about our journey and what drives us
            to be the best.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto text-center">
            Founded in 2010, our company started with a small team of passionate
            individuals who believed in the power of quality and innovation.
            Over the years, we've grown into a trusted brand, serving millions
            of customers worldwide with our exceptional range of products.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Our Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <p className="text-lg leading-relaxed">
                Our mission is to provide top-notch products that enhance the
                lives of our customers. We strive to innovate and continuously
                improve, ensuring that our offerings not only meet but exceed
                expectations. Sustainability, quality, and customer satisfaction
                are at the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "CEO", img: "https://via.placeholder.com/200" },
              { name: "Jane Smith", role: "CTO", img: "https://via.placeholder.com/200" },
              { name: "Alice Johnson", role: "COO", img: "https://via.placeholder.com/200" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-full w-40 h-40 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Become a part of our community and stay updated with the latest
            products and offers. Subscribe to our newsletter today!
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-200">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
