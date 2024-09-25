import { Swiper, SwiperSlide } from "swiper/react";
import HomeSwiper from "@/Components/swiper";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
const HomeGalery = () => {
  return (
    <Swiper // install Swiper modules
      className="justify-items-center"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 4,
        },
      }}
      autoplay={{ delay: 1500, pauseOnMouseEnter: true }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <HomeSwiper img={"./pictures/cola.png"} />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <HomeSwiper img={"./pictures/sprite.png"} />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <HomeSwiper img={"./pictures/coke.png"} />
      </SwiperSlide>
      <SwiperSlide>
        <HomeSwiper img={"./pictures/drpepper.png"} />
      </SwiperSlide>
      <SwiperSlide>
        <HomeSwiper img={"./pictures/pepper.png"} />
      </SwiperSlide>
      <SwiperSlide>
        <HomeSwiper img={"./pictures/pepsi.png"} />
      </SwiperSlide>
    </Swiper>
  );
};
export default HomeGalery;
