import React from 'react';
import banner1 from '../../asset/banner-1.jpg';
import banner2 from '../../asset/banner-2.jpg';
import banner3 from '../../asset/banner-3.jpg';


const Slider = () => {
    return (
        <div>
            <div className="carousel w-full min-h-[200px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-blue-800   border-2 border-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-blue-800  border-2 border-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        
                        <a href="#slide1" className="btn btn-circle bg-blue-800  border-2 border-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-blue-800 border-2 border-white">❯</a>
                    </div>
                    
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-blue-800  border-2 border-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-blue-800  border-2 border-white">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Slider;