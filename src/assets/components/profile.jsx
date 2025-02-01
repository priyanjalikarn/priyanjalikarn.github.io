import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Profile = ({ name, userImage, intro }) => {
    const carouselItems = [
        { title: "Article", img: "https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg" },
        { title: "Research", img: "https://pixlr.com/images/generator/text-to-image.webp" },
        { title: "Poem", img: "https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_1280.jpg" },
        { title: "Papers", img: "https://live.staticflickr.com/65535/52211883534_f45cb76810.jpg" }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px", color: "white" }}>{dots}</ul>
            </div>
        ),
        dotsClass: "slick-dots slick-thumb custom-dots"
    };

    return (
        <div className="profile flex flex-col items-center text-center p-4">
               <div className="flex flex-col md:flex-row items-center justify-center w-full relative">
                <div className="headerName">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">{name}</h1>
                </div>
                {/* Social Media Icons */}
                <div className="hidden md:flex space-x-4 text-white text-xl absolute right-0">
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>
            </div>
            <div className="intro">
                <h2 className="text-white text-xl md:text-3xl lg:text-5xl/18 ">{intro}</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-8 w-full">
                {/* Enlarged User Image */}
                <div className="userImage mb-6 md:mb-0 md:mr-6">
                    <img src={userImage} alt="User" className="w-[250px] md:w-[250px] lg:w-[400px] h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg" />
                </div>
                
                {/* Enlarged Carousel */}
                <div className="carousel-container w-full md:w-[450px] lg:w-[600px] h-[300px] md:h-[400px] lg:h-[500px]">
                    <Slider {...settings}>
                        {carouselItems.map((item, index) => (
                            <div key={index} className="relative flex flex-col items-center">
                                <img src={item.img} alt={item.title} className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-lg" />
                                <div className="mt-2 title text-white px-6 py-2 rounded-lg shadow-md text-center text-sm md:text-base lg:text-lg">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
                {/* Social Media Icons in Footer for Small Screens */}
                <div className="md:hidden flex space-x-4 text-white text-xl mt-15">
                <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>
                {/* Footer Section */}
                <footer className="mt-10 text-white text-sm md:text-base text-center">
                <p className="email"><a href="mailto:yourmail@example.com" className="underline">priyanjali.writer@gmail.com</a></p>
                </footer>
            <style jsx>{`
                .custom-dots li button:before {
                    color: white !important;
                }
                .custom-dots li.slick-active button:before {
                    color: white !important;
                }
            `}</style>
        </div>
    );
};

export default Profile;
