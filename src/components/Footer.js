import { Facebook, Instagram, Twitter, Youtube } from "./icons";

const Footer = () => (
  <div className="footer bg-gray-800 p-6 text-white">
    <div className="container mx-auto">
      <div className="footer-text flex-none md:flex items-center justify-between">
        <p> Thank You QuikCompare </p>
        {/* <p className="text-gray">Learn the latest tech skills</p> */}
        <ul className="social-links mt-8 flex align-center">
          <li>
            <a href="#" className="fa fa-facebook" target="_blank">
              <Facebook />
            </a>
          </li>
          <li className="ml-2 mt-1">
            <a href="#" target="_blank">
              <Twitter />
            </a>
          </li>
          <li className="ml-2 mt-1">
            <a href="#" className="fa fa-youtube" target="_blank">
              <Youtube />
            </a>
          </li>
          <li className="ml-2">
            <a href="#" className="fa fa-instagram" target="_blank">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
