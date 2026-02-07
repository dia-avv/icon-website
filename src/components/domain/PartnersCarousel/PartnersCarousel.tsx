import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../../../node_modules/swiper/swiper.css";

import { partners } from "../../../content/partners";
import styles from "./PartnersCarousel.module.css";

export default function PartnersCarousel() {
  return (
    <div className={styles.carouselBlock}>
      <h2>Companies that support us</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {partners.map((partner) => (
          <SwiperSlide className={styles.slide}>
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              key={partner.id}
            >
              <img
                src={partner.logo}
                alt={partner.altText}
                className={styles.logo}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
