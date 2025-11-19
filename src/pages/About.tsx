
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfileCard from '@/components/ProfileCard';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, Search, Target } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Director of Research",
      department: "Academic Affairs",
      bio: "Leading international collaboration initiatives across Asian research institutions."
    },
    {
      name: "Prof. Michael Chen",
      role: "Head of Partnerships",
      department: "International Relations",
      bio: "Facilitating cross-border research partnerships and academic exchanges."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Research Coordinator",
      department: "Project Management",
      bio: "Coordinating multi-national research projects and ensuring quality standards."
    },
    {
      name: "Dr. James Liu",
      role: "Technology Director",
      department: "Digital Innovation",
      bio: "Implementing digital solutions for seamless international research collaboration."
    },
    {
      name: "Dr. Aisha Rahman",
      role: "Academic Advisor",
      department: "Scholarly Affairs",
      bio: "Providing guidance to young researchers and fostering academic excellence."
    },
    {
      name: "Prof. David Kim",
      role: "Publication Manager",
      department: "Communications",
      bio: "Overseeing research publications and dissemination of academic findings."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About BFARD
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about our mission, vision, and the dedicated team working to advance academic research across borders.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Main Description */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    BHAGYASHREE Foundation for Academic Research and Development is a culmination of like-minded eminent researchers who joined together to build and strengthen research across Asia, the largest continent pooling in experts from more than 50 countries.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Asia is very popular for its rich heritage and culture. Though having such credentials there still exists a gap in practical application of the results. This techno-friendly world has opened up ample opportunities for connecting researchers of the same science. In the recent two decades, cross-border research collaboration has doubled up. The techno-progressive culture has facilitated researchers to expand their horizons by connecting online.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The intense motivation drive behind this intellectual gathering is promoting research across Asia. This will be a research replica platform where research conducted in one country can be conducted with necessary adaptation in other countries of Asia through the members of this Association. The research works will gain wide recognition and authenticity for their country-wise interpretation, which will provide multifaceted credibility.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    This platform will also serve as a channel in bridging young career-seeking professionals with experts of that field. This firm aims to include societal responsibility among researchers of Asia, converting the lab results as field applications. This association facilitates confidential research networking, ruling out research barriers.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                    Cross-Border Collaboration
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Facilitating research partnerships across 50+ countries in Asia, enabling knowledge sharing and collaborative studies that transcend geographical boundaries.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                    Expert Network
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Connecting young career-seeking professionals with established experts, creating mentorship opportunities and fostering academic growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                    Research Replication
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Enabling research conducted in one country to be adapted and replicated in other Asian countries, ensuring wider impact and validation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                    Practical Application
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Converting laboratory results into field applications, bridging the gap between academic research and societal benefits.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Team Section */}
            {/* <div className="space-y-8">
              <div className="text-center">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
                  Our Team
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Meet the dedicated professionals working to advance academic research and foster international collaboration across Asia.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <ProfileCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    department={member.department}
                    bio={member.bio}
                  />
                ))}
              </div>
            </div> */}

            {/* Vision Statement */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8 text-center">
                <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                  To create a comprehensive research ecosystem that promotes confidential research networking, eliminates research barriers, and fosters societal responsibility among researchers across Asia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
