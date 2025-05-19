// components/Gallery.tsx
type Props = {
  images: string[];
};

export default function Gallery({ images }: Props) {
  return (
    <div className="gallery">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Image ${i}`}
          className="gallery-img"
          loading="lazy"
        />
      ))}
      <style jsx>{`
        .gallery {
          column-count: 3;
          column-gap: 16px;
          padding: 32px;
        }

        .gallery-img {
          width: 100%;
          margin-bottom: 16px;
          display: block;
          break-inside: avoid;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 900px) {
          .gallery {
            column-count: 2;
          }
        }

        @media (max-width: 600px) {
          .gallery {
            column-count: 1;
          }
        }
      `}</style>
    </div>
  );
}
