import React from 'react';
import Hero from '../components/Hero';
import Story from '../components/Story';
import FeaturedWork from '../components/FeaturedWork';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <main className="page-home">
      <Hero />
      <Story />
      <FeaturedWork />
      <Testimonials />
    </main>
  );
}
