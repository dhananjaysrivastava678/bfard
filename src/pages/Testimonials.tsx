
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
              Testimonials & Impact
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Success stories, impact case studies, and testimonials from our global research community.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;