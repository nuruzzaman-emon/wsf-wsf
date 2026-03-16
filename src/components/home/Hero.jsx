"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import Image from "next/image";

export default function HeroSlider() {
  const images = ["/heroo.png", "/hero2.png", "/hero3.png", "/hero4.png"];

  return (
    <div className="rounded-xl shadow-2xl p-6">
      {/* Title and sub Title */}
      <div className="text-center my-4">
        <h2 className="text-secondary text-2xl md:text-4xl font-bold">Spread Hope, Change Lives</h2>
      <p className="text-accent-content md:font-bold my-2">Join hands to support those in need and make a lasting impact today</p>
      </div>
      {/* Swiper */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <Image
                src={src}
                alt="Hero"
                width={800}
                height={400}
                className="w-full max-h-120 border-4 border-green-300 rounded-lg"
              />
              <div className="absolute bottom-3 md:bottom-12  left-3 md:left-12 lg:left-44  space-x-4">
                <button className="btn btn-xs md:btn-md btn-primary">
                  <FaHandHoldingHeart /> Donate
                </button>
                <button className="btn btn-xs md:btn-md btn-primary">
                  <FaSignInAlt />
                  Login
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
