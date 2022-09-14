import React from 'react';
import Nav from './Nav';

const Footer = () => {
  console.log('keep curlies');
  return (
    <footer>
      <p>&copy; Slick's Slices {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
