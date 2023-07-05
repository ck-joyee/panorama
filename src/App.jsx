import  { useRef, useEffect } from 'react';
import './App.css';

const App = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);

  const images = [
    '../src/assets/images/news-1.png',
    '../src/assets/images/tea-2.png',
    '../src/assets/images/tea-3.png',
    '../src/assets/images/tea-4.png',
  ];

  return (
    <div className="panorama-container" ref={sliderRef}>
      {images.map((image, index) => (
        <div key={index} className="panorama-slide">
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default App;
