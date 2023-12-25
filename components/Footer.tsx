// /components/Footer.tsk
import React from "react";

const Footer = () => {
    
    return (
        <div className="container mx-auto px-6 py-12 flex justify-between items-start">
        <div className="flex flex-col space-y-8">
            <div>
                <img src="https://placehold.co/100x50" alt="Autex Acoustics logo" className="mb-4" />
                <div className="flex space-x-3">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-pinterest-p"></i>
                </div>
            </div>
        </div>
        <div className="flex flex-col space-y-8">
            <nav className="flex flex-col space-y-4">
                <a href="#" className="hover:text-gray-300">Projects</a>
                <a href="#" className="hover:text-gray-300">Our story</a>
                <a href="#" className="hover:text-gray-300">Our sustainability journey</a>
                <a href="#" className="hover:text-gray-300">Acoustic solutions</a>
                <a href="#" className="hover:text-gray-300">Find a rep</a>
                <a href="#" className="hover:text-gray-300">News</a>
                <a href="#" className="hover:text-gray-300">Bespoke</a>
                <a href="#" className="hover:text-gray-300">Technical documents</a>
                <a href="#" className="hover:text-gray-300">Contact</a>
            </nav>
        </div>
        <div className="flex flex-col space-y-8">
            <div>
                <h3 className="font-bold mb-4">Email</h3>
                <p>sales@autexacoustics.com</p>
            </div>
            <div>
                <h3 className="font-bold mb-4">Phone</h3>
                <p>(424) 203 1813</p>
            </div>
            <button className="border border-white rounded-full py-2 px-6 hover:bg-white hover:text-black transition-colors">Contact us</button>
        </div>
    </div>
    );

};

export default Footer; 