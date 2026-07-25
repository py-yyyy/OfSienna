import { useState, useEffect } from 'react';
import myImg from '../assets/img/my-img.jpg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass' : ''}`} id="navbar">
      <div className="nav-brand-wrap">
        <img src={myImg} alt="" className="nav-avatar" />
        <a href="#" className="nav-brand">OfSienna</a>
      </div>
      <ul className="nav-links">
        <li><a href="#about">关于</a></li>
        <li><a href="#projects">作品</a></li>
        <li><a href="#contact">联系</a></li>
      </ul>
    </nav>
  );
}
