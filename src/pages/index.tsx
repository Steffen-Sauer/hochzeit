import Gallery from '../components/Gallery';

const images = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  return `/hochzeit/images/Foto (${num}).jpg`;
});

export default function Home() {
  return (
    <main>
      <h1 style={{ textAlign: 'center', paddingTop: '2rem' }}>Hochzeit 2025 Alex & Bene (444)</h1>
      <Gallery images={images} />
    </main>
  );
}
