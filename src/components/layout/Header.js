import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TemanWarung from '../../svg/temanwarung.png';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3 md">
          <img src={TemanWarung} alt={TemanWarung} />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Values
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Solution
        </AnchorLink>
        <AnchorLink className="px-4" href="#goal">
          Goal
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Gabung Yuk!</Button>
      </div>
    </div>
  </header>
);

export default Header;
