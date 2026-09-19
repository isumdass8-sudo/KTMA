import PageHero from '../components/PageHero';
import GalleryGrid from '../components/GalleryGrid';
import { fallbackGallery } from '../data/fallbackData';
import heroImage from '../assets/gallery/event-duo.jpg';

export default function Gallery() {
  const images = fallbackGallery;

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Kandy tourism, in pictures"
        description="Moments from KTMA events, campaigns, and the community that makes Kandy's tourism industry thrive."
        image={heroImage}
      />
      <section className="container-ktma py-20">
        <GalleryGrid images={images} />
      </section>
    </>
  );
}
