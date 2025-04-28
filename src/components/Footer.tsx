
import { Link } from "react-router-dom";
import { Recycle, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-eco-dark-purple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="h-6 w-6 text-eco-purple" />
              <span className="font-bold text-lg">EcoReward</span>
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionizing e-waste recycling with smart vending machines and reward systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 rounded-full bg-eco-purple bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path></svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-eco-purple bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0 1.29 5.575 4.16 4.16 0 0 1-1.894-.52v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path></svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-eco-purple bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"></path></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-eco-purple transition-colors">Home</Link></li>
              <li><Link to="/deposit" className="text-gray-300 hover:text-eco-purple transition-colors">Deposit E-Waste</Link></li>
              <li><Link to="/rewards" className="text-gray-300 hover:text-eco-purple transition-colors">Rewards</Link></li>
              <li><Link to="/marketplace" className="text-gray-300 hover:text-eco-purple transition-colors">Marketplace</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-eco-purple transition-colors">Locations</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-eco-purple mt-0.5" />
                <span className="text-gray-300">123 Eco Street, Green City, Earth 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-eco-purple" />
                <a href="mailto:info@ecoreward.com" className="text-gray-300 hover:text-eco-purple transition-colors">
                  info@ecoreward.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-eco-purple" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-eco-purple transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on new locations, rewards, and eco-initiatives.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="py-2 px-4 rounded-l-md w-full focus:outline-none text-eco-dark-purple"
              />
              <button 
                type="submit" 
                className="bg-eco-purple hover:bg-opacity-90 px-4 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EcoReward. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
