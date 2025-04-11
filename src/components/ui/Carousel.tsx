import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface Slide {
  imageUrl: string;
  altText?: string;
  heading?: string;
  description?: string;
}

interface CarouselProps {
  id: string;
  slides: Slide[];
}

function Carousel({ id, slides }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carouselElement = document.getElementById(id);
    if (!carouselElement) return;

    const handleSlide = (e: any) => {
      setActiveIndex(e.to);
    };

    carouselElement.addEventListener("slide.bs.carousel", handleSlide);
    return () => {
      carouselElement.removeEventListener("slide.bs.carousel", handleSlide);
    };
  }, [id]);

  return (
    <>
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators" style={{ zIndex: 1 }}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="5000"
            >
              <img
                src={slide.imageUrl}
                className="d-block w-100"
                alt={slide.altText}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {slides[activeIndex].heading && slides[activeIndex].description ? (
        <div className="px-3 py-2 bg-black text-white">
          <h5 className="text-center">{slides[activeIndex].heading}</h5>
          <p>{slides[activeIndex].description}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Carousel;
