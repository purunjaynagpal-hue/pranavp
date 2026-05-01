import { Printer, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Digital Printing',
    'Offset Printing',
    'Business Cards',
    'Flyers & Brochures',
    'Binding Services',
    'Stationery Products',
    'Flex Printing',
    'Custom Printing',
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-primary-700 rounded-lg">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">
                  Pranav Printers
                </span>
                <span className="text-xs font-medium tracking-wider text-accent-400">
                  AND STATIONERS
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for premium printing and stationery solutions. 
              Quality, reliability, and customer satisfaction since 2008.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary-700 flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Printer className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  322 A , Gali No. 10 , Baldev Nagar<br />
                 Gurugram,Haryana 122001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Printer className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 83685 88868</span>
              </li>
              <li className="flex items-center space-x-3">
                <Printer className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">pranavprintersggn@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Pranav Printers and Stationers. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 sm:mt-0 w-10 h-10 rounded-lg bg-primary-700 hover:bg-primary-600 text-white flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

