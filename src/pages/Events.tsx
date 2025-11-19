
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Events Calendar
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dynamic listing of conferences, workshops, and webinars with registration options.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
