import { useEffect, useState, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../styles/ProjectGallery.css';

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images: string[];
}

const ProjectGallery = ({
  isOpen,
  onClose,
  projectTitle,
  images,
}: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Reset al abrir
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  // Navegación
  const prev = useCallback(() => {
    setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // Teclado y bloqueo de scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        prev();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        next();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, prev, next, onClose, images.length]);

  // Scroll thumbnail activo
  useEffect(() => {
    if (thumbnailsRef.current && images.length > 1) {
      const activeThumb = thumbnailsRef.current.querySelector('.gallery-thumbnail.active');
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [currentIndex, images.length]);

  // Touch swipe
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || images.length <= 1) return;
    
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    
    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? next() : prev();
    }
    
    touchStartX.current = null;
  };

  if (!isOpen) return null;

  return (
    <div 
      className="gallery-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="gallery-container" 
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header */}
        <div className="gallery-header">
          <h3 className="gallery-title">{projectTitle}</h3>
          <button 
            className="gallery-close" 
            onClick={onClose}
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contenido */}
        <div className="gallery-content">
          {images.length > 1 && (
            <button 
              className="gallery-nav" 
              onClick={prev}
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="gallery-image-wrapper">
            <img
              src={images[currentIndex]}
              alt={`${projectTitle} - Imagen ${currentIndex + 1}`}
              className="gallery-image"
              draggable={false}
            />
          </div>

          {images.length > 1 && (
            <button 
              className="gallery-nav" 
              onClick={next}
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div 
            className="gallery-thumbnails" 
            ref={thumbnailsRef}
          >
            {images.map((img, index) => (
              <button
                key={index}
                className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ver imagen ${index + 1}`}
              >
                <img src={img} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="gallery-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;