
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const YoungScholars = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-golden-50 to-cream-50">
      <Navigation />
      <div className="pt-20 section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-golden-800 mb-6">
              Young Scholar Support
            </h1>
            <p className="text-xl text-golden-600 max-w-3xl mx-auto">
              Grants, scholarships, and mentoring programs for the next generation of researchers.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YoungScholars;