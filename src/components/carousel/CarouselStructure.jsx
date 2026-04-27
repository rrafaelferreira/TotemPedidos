import useEmblaCarousel from "embla-carousel-react";
import { motion } from 'framer-motion';
import './CarouselStructure.css';

export const CarouselStructure = ({ items, onItemClick, categoriaAtiva }) => {
  // align: 'center' faz com que o item clicado tente ficar no meio
  const [emblaRef] = useEmblaCarousel({ 
    align: 'center', 
    containScroll: 'trimSnaps',
    dragFree: true 
  });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {items.map((item) => {
          const isActive = item.id === categoriaAtiva;
          
          return (
            <motion.div 
              className={`embla__slide ${isActive ? 'is-active' : ''}`} 
              key={item.id}
              onClick={() => onItemClick(item.id)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="category-content">
                 <div className="icon-box">{item.image}</div>
                 <span className="category-name">{item.name}</span>
                 <div className={`active-indicator ${isActive ? 'visible' : ''}`}></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}