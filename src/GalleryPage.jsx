import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import { Thumbnails } from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails } from 'yet-another-react-lightbox/plugins';

const images = [
  { src: "https://i.ibb.co/60J5KrWw/header.jpg" },
  { src: "https://i.ibb.co/FbfvXpJ7/Fuchka.jpg" },
  { src: "https://i.ibb.co/WNTzR9vv/chickennuggets.jpg" },
  { src: "https://i.ibb.co/WWNWC3HV/Beefburger.jpg" },
  { src: "https://i.ibb.co/B5Hwmhjt/chickenbriyani.jpg" },
  { src: "https://i.ibb.co/9Hwc3kxT/tandorichicken.jpg" },
  { src: "https://i.ibb.co/1tvV7nHv/porata.jpg" },
  { src: "https://i.ibb.co/QFk2YmxJ/chickenpiza.webp" },
  { src: "https://i.ibb.co/jv85c4ZX/beefteheri.jpg" },
  { src: "https://i.ibb.co/dJ4nT3jG/shawarma.jpg" },
];

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
  <section className='w-11/12 mx-auto'>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 text-center">
       Food Gallery
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`Gallery ${i + 1}`}
            className="w-full h-48 object-cover cursor-pointer rounded shadow-md hover:scale-105 transition-transform duration-200"
            onClick={() => handleClick(i)}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
        plugins={[Thumbnails]}
      />
    </div>
  </section>
  );
};

export default GalleryPage;
