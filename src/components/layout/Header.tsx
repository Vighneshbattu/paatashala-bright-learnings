
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Book, GraduationCap } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Book className="h-8 w-8 text-paata-blue" />
          <span className="text-2xl font-bold text-paata-blue">Paatashala</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-paata-blue transition-colors">Home</Link>
          <Link to="/about" className="font-medium hover:text-paata-blue transition-colors">About Us</Link>
          <Link to="/courses" className="font-medium hover:text-paata-blue transition-colors">Courses</Link>
          <Link to="/kits" className="font-medium hover:text-paata-blue transition-colors">Learning Kits</Link>
          <Link to="/schools" className="font-medium hover:text-paata-blue transition-colors">For Schools</Link>
          <Link to="/blog" className="font-medium hover:text-paata-blue transition-colors">Blog</Link>
          <Link to="/contact" className="font-medium hover:text-paata-blue transition-colors">Contact</Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild className="rounded-full bg-paata-orange hover:bg-amber-500 px-6">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="font-medium py-2 hover:text-paata-blue transition-colors" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/about" className="font-medium py-2 hover:text-paata-blue transition-colors" onClick={toggleMobileMenu}>About Us</Link>
            <Link to="/courses" className="font-medium py-2 hover:text-paata-blue transition-colors" onClick={toggleMobileMenu}>Courses</Link>
            <Link to="/kits" className="font-medium py-2 hover:text-paata-blue transition-colors" onClick={toggleMobileMenu}>Learning Kits</Link>
            <Link to="/schools" className="font-medium py-2 hover:text-paata-blue transition-colors" onClick={toggleMobileMenu}>For Schools</Link>
            <Link to="/blog" className="font-medium py-2 hover:text-paata-blue transition-colors" onClick={toggleMobileMenu}>Blog</Link>
            <Link to="/contact" className="font-medium py-2 hover:text-paata-blue transition-colors" onClick={toggleMobileMenu}>Contact</Link>
            <div className="flex items-center space-x-4 pt-4">
              <Button asChild variant="outline" className="w-full rounded-full">
                <Link to="/login" onClick={toggleMobileMenu}>Log In</Link>
              </Button>
              <Button asChild className="w-full rounded-full bg-paata-orange hover:bg-amber-500">
                <Link to="/signup" onClick={toggleMobileMenu}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
