import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ProductSlider = ({ images }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={img}
                        alt={`Slide ${index}`}
                        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductSlider;
