import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
   <div className="carousel-item">
      <img
         className="carousel-cell"
         src="../img/Slider/1.jpg"
         alt=""
         onDragStart={handleDragStart}
      />
   </div>,
   <div className="carousel-item">
      <img
         className="carousel-cell"
         src="../img/Slider/2.jpg"
         alt=""
         onDragStart={handleDragStart}
      />
   </div>,
   <div className="carousel-item">
      <img
         className="carousel-cell"
         src="../img/Slider/3.jpg"
         alt=""
         onDragStart={handleDragStart}
      />
   </div>,
   <div className="carousel-item">
      <img
         className="carousel-cell"
         src="../img/Slider/4.jpg"
         alt=""
         onDragStart={handleDragStart}
      />
   </div>,
   <div className="carousel-item">
      <img
         className="carousel-cell"
         src="../img/Slider/5.jpg"
         alt=""
         onDragStart={handleDragStart}
      />
   </div>,
   <div className="carousel-item">
      <img
         className="carousel-cell"
         src="../img/Slider/6.jpg"
         alt=""
         onDragStart={handleDragStart}
      />
   </div>,
];

const responsive = {
   0: {
      items: 2,
   },
   512: {
      items: 4,
   },
   1024: {
      items: 6,
   },
};

function Carousel() {
   return (
      <AliceCarousel
         items={items}
         animationDuration={2000}
         responsive={responsive}
         mouseTracking
         infinite
         disableButtonsControls
         disableDotsControls
         autoPlay
      />
   );
}

export default Carousel;
