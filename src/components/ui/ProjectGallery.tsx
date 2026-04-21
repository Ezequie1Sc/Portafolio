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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setImageLoaded(false);
      setImageDimensions(null);
    }
  }, [isOpen, projectTitle]);

  const prev = useCallback(() => {
    setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1));
    setImageLoaded(false);
    setImageDimensions(null);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));
    setImageLoaded(false);
    setImageDimensions(null);
  }, [images.length]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageLoaded(true);
    const img = e.currentTarget;
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight,
    });
  };

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

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, prev, next, onClose, images.length]);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null || images.length <= 1) return;

    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    // Solo navegar si el swipe es más horizontal que vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        next();
      } else {
        prev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleWheel = (e: React.WheelEvent) => {
    // Prevenir que el scroll de la rueda cierre el modal o navegue
    e.stopPropagation();
  };

  if (!isOpen) return null;

  const hasMultiple = images.length > 1;
  const orientation = imageDimensions 
    ? (imageDimensions.height > imageDimensions.width ? 'portrait' : 'landscape')
    : 'landscape';

  return (
    <div
      className="gallery-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${projectTitle}`}
    >
      <div
        className="gallery-container"
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        <div className="gallery-header">
          <h3 className="gallery-title">{projectTitle}</h3>
          <button
            className="gallery-close"
            onClick={onClose}
            aria-label="Cerrar galería"
            type="button"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="gallery-content">
          {hasMultiple && (
            <button
              className="gallery-nav"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Imagen anterior"
              type="button"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
          )}

          <div className="gallery-image-wrapper">
            {!imageLoaded && (
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                color: 'rgba(255,255,255,0.5)'
              }}>
                Cargando...
              </div>
            )}
            <img
              ref={imageRef}
              src={images[currentIndex]}
              alt={`${projectTitle} - Imagen ${currentIndex + 1} de ${images.length}`}
              className="gallery-image"
              data-orientation={orientation}
              onLoad={handleImageLoad}
              draggable={false}
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
          </div>

          {hasMultiple && (
            <button
              className="gallery-nav"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Imagen siguiente"
              type="button"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          )}
        </div>

        {hasMultiple && (
          <div className="gallery-thumbnails" ref={thumbnailsRef}>
            {images.map((img, index) => (
              <button
                key={index}
                className={`gallery-thumbnail${index === currentIndex ? ' active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                  setImageLoaded(false);
                  setImageDimensions(null);
                }}
                aria-label={`Ver imagen ${index + 1}`}
                type="button"
              >
                <img src={img} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        {hasMultiple && (
          <div className="gallery-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;