import React from 'react';
import './Newaccount.css'; // Import the CSS file for styling

const services = [
  {
    id: 1,
    title: 'Custom Cake Design',
    description: 'Our expert bakers will work with you to create the cake of your dreams for any occasion.',
    imageSrc: 'custom-cake.jpg',
  },
  {
    id: 2,
    title: 'Wedding Cakes',
    description: 'Make your special day even more memorable with our beautifully crafted wedding cakes.',
    imageSrc: 'wedding-cake.jpg',
  },
  {
    id: 3,
    title: 'Birthday Cakes',
    description: 'Celebrate your birthday with our delicious and beautifully decorated cakes.',
    imageSrc: 'birthday-cake.jpg',
  },
  {
    id: 4,
    title: 'Cupcakes',
    description: 'Enjoy our delightful and varied range of cupcakes for any event.',
    imageSrc: 'cupcakes.jpg',
  },
  {
    id: 5,
    title: 'Cake Pops',
    description: 'Perfect bite-sized treats that are great for parties and events.',
    imageSrc: 'cake-pops.jpg',
  },
  {
    id: 6,
    title: 'Corporate Events',
    description: 'We cater for corporate events with a variety of cakes and desserts.',
    imageSrc: 'corporate-cake.jpg',
  },
];

const Services = () => {
  return (
    <div className="services-section" id="services">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
