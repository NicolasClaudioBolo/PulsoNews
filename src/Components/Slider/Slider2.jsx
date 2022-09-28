// import React, {  useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid';
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import './Slider2.css'

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";

// export const Slider2 = ({ home, arrayImage }) => {
//     const [setWidth, setSetWidth] = useState('50px')

//     useEffect(() => {
//         if (home) {
//             setSetWidth('home-swiper')
//         }
//     }, [])

//     return (

//         <Swiper
//             spaceBetween={30}
//             centeredSlides={true}
//             autoplay={{
//                 delay: 2500,
//                 disableOnInteraction: false,
//             }}
//             pagination={{
//                 clickable: true,
//             }}
//             navigation={true}
//             modules={[Autoplay, Pagination, Navigation]}
//             className={''}

//         >
//             {
//                 arrayImage.map(card => {
//                     const route = `/${card.id} `
//                     return (
//                     <Link to={route} key={uuidv4()}>
//                         <SwiperSlide key={uuidv4()} ><img src={card.image} alt={card.title} />
//                         </SwiperSlide>
//                     </Link>
//                     )
//                 })
//             }


//         </Swiper>

//     );
// }

// export default function Slider2({arrayImage}) {
//   return (
//     <>
//       <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
//       {arrayImage.map(card => {
//                     const route = `/${card.id} `
//                     return (
//                     <Link to={route} key={uuidv4()}>
//                         <SwiperSlide key={uuidv4()} ><img src={card.image} alt={card.title} />
//                         </SwiperSlide>
//                     </Link>
//                     )
//                 })
//             }
//       </Swiper>
//     </>
//   );
// }