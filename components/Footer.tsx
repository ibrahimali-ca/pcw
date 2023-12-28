// /components/Footer.tsk
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebookF, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

const Footer = () => {
    
    return (
        <div className="container mx-auto px-6 py-12 flex justify-between items-start">
        <div className="flex flex-col space-y-8">
            <div>
                <Image 
                src="https://source.unsplash.com/100x50" 
                alt="SoundWeave logo"
                width={100}
                height={50} 
                className="mb-4" />
                <div className="flex space-x-3">
                <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <FontAwesomeIcon icon={faPinterestP} />
                </div>
            </div>
        </div>
        <div className="flex flex-col space-y-8">
            <nav className="flex flex-col space-y-4">
                <a href="#" className="hover:text-gray-300">Products</a>
                <a href="#" className="hover:text-gray-300">Resources</a>
                <a href="#" className="hover:text-gray-300">Colors</a>
                <a href="#" className="hover:text-gray-300">News</a>
                <a href="#" className="hover:text-gray-300">Contact</a>
            </nav>
        </div>
        <div className="flex flex-col space-y-8">
            <div>
                <h3 className="font-bold mb-4">Email</h3>
                <p>ibrahim@ibrahimali.ca</p>
            </div>
            <div>
                <h3 className="font-bold mb-4">Phone</h3>
                <p>(555) 555 5555</p>
            </div>
            <button className="bg-black text-white font-semibold py-2 px-4 border border-black rounded-full">Contact us</button>
        </div>
    </div>
    );

};

export default Footer; 