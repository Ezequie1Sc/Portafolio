import { useEffect, useState, useCallback, useRef, memo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../styles/ProjectGallery.css';

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images: string[];
}

const ProjectGallery = memo(({
  isOpen,
  onClose,
  projectTitle,
  images,
}: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Navegación
  const prev = useCallback(() => {
    setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // Reset al abrir
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, projectTitle]);

  // CRÍTICO: Bloquear scroll del body y asegurar que la galería esté visible
  useEffect(() => {
    if (isOpen) {
      // Bloquear scroll
      document.body.classList.add('gallery-open');
      document.body.style.overflow = 'hidden';
      
      // Scroll al top si es necesario
      window.scrollTo(0, 0);
      
      // Asegurar que el overlay esté visible
      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.style.opacity = '1';
          overlayRef.current.style.visibility = 'visible';
        }
      }, 10);
    }
    
    return () => {
      document.body.classList.remove('gallery-open');
      document.body.style.overflow = '';
      document.body.style.position = '';
    };
  }, [isOpen]);

  // Teclado
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, prev, next, onClose]);

  // Swipe táctil
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      deltaX > 0 ? next() : prev();
    }
    
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Scroll de thumbnails
  useEffect(() => {
    if (containerRef.current && images.length > 1) {
      const activeThumb = containerRef.current.querySelector('.gallery-thumbnail.active');
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [currentIndex, images.length]);

  // Prevenir clic en overlay que no sea intencional
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const hasMultiple = images.length > 1;

  return (
    <div
      ref={overlayRef}
      className="gallery-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${projectTitle}`}
      style={{ opacity: 1, visibility: 'visible' }}
    >
      <div
        className="gallery-container"
        ref={containerRef}
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
            aria-label="Cerrar galería"
            type="button"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Contenido principal */}
        <div className="gallery-content">
          <button
            className="gallery-nav"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            disabled={!hasMultiple}
            aria-label="Imagen anterior"
            type="button"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          <div className="gallery-image-container">
            <img
              src={images[currentIndex]}
              alt={`${projectTitle} — imagen ${currentIndex + 1} de ${images.length}`}
              className="gallery-image"
              draggable={false}
            />
          </div>

          <button
            className="gallery-nav"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            disabled={!hasMultiple}
            aria-label="Imagen siguiente"
            type="button"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Thumbnails */}
        {hasMultiple && (
          <div 
            className="gallery-thumbnails" 
            role="tablist" 
            aria-label="Miniaturas de imágenes"
          >
            {images.map((img, index) => (
              <button
                key={index}
                className={`gallery-thumbnail${index === currentIndex ? ' active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ir a imagen ${index + 1}`}
                type="button"
              >
                <img src={img} alt="" aria-hidden="true" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        {/* Counter */}
        {hasMultiple && (
          <div className="gallery-counter" aria-live="polite">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
});

ProjectGallery.displayName = 'ProjectGallery';

export default ProjectGallery;