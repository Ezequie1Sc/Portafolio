import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images: string[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  isOpen,
  onClose,
  projectTitle,
  images
}) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex(prev =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="gallery-overlay" onClick={onClose}>
      <div className="gallery-container" onClick={(e) => e.stopPropagation()}>

        <button className="gallery-close" onClick={onClose}>
          <X size={28} />
        </button>

        <h3 className="gallery-title">{projectTitle}</h3>

        <div className="gallery-content">

          <button
            className="gallery-nav gallery-nav-prev"
            onClick={handlePrevious}
          >
            <ChevronLeft size={28} />
          </button>

          <div className="gallery-image-container">
            <img
              src={images[currentImageIndex]}
              alt={`${projectTitle} imagen ${currentImageIndex + 1}`}
              className="gallery-image"
            />
          </div>

          <button
            className="gallery-nav gallery-nav-next"
            onClick={handleNext}
          >
            <ChevronRight size={28} />
          </button>

        </div>

        <div className="gallery-thumbnails">
          {images.map((img, index) => (
            <button
              key={index}
              className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img src={img} alt={`miniatura ${index}`} />
            </button>
          ))}
        </div>

        <div className="gallery-counter">
          {currentImageIndex + 1} / {images.length}
        </div>

      </div>
    </div>
  );
};

export default ProjectGallery;