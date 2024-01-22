import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './header.scss'

export default function Header() {
  return (
    <>
      <Swiper 
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper">
        <SwiperSlide>
          <div className='textImageHeader'>
            <div className="textHeader">
              <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="imageHeader">
              <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='textImageHeader'>
            <div className="textHeader">
            <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="imageHeader">
              <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

