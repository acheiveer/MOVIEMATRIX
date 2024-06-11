import React from 'react';
import {Profile} from './Profile';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export function Profiles({ profilesDetails, type }) {
    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
        modules: [Navigation],
        className: "mySwiper",
        navigation: true,
    };
    return (
        <div className="h-60vh bg-transparent">
        
            <Swiper {...slideConfig}>
                {profilesDetails?.map((profileData, index) => (
                    <SwiperSlide key={index}>
                            <Profile profileDetails={profileData} type={type} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}


