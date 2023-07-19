import React from 'react';
import Hero from '../components/beranda/Hero';
import Info from '../components/beranda/Info';
import Layanan from '../components/beranda/Layanan';
import Galery from '../components/beranda/Galery';
import Paq from '../components/Paq';

const Home = () => {
  return (
    <div>
      <Hero />
      <Info />
      <Layanan />
      <Galery />,
      <Paq />
    </div>
  );
};

export default Home;
