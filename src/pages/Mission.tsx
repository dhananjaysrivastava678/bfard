
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Globe, Users, BookOpen, Lightbulb, Award } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const Mission = () => {
  const stats = [
    { number: 1425, label: 'International Conferences', icon: Globe },
    { number: 744, label: 'Scientific Presentations', icon: BookOpen },
    { number: 4565, label: 'Journal Publications', icon: Award },
    { number: 2342, label: 'Webinars', icon: Users },
  ];

  const objectives = [
    'Promote international exchange',
    'Facilitate increased intercultural awareness', 
    'Encourage interdisciplinary discussion',
    'Actively create beneficial results for individuals that have a positive impact on our society'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mission & Objectives
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our detailed research goals, social relevance, and Asia-focused outreach initiatives.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Our Mission */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    BHAGYASHREE Foundation for Academic Research and Development collaborates with educational institutions across India to host seminars and conferences that foster academic dialogue and innovation. These events provide researchers and academicians a platform to share insights, debate policy issues, and produce impactful research addressing critical social challenges.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The BFARD (BHAGYASHREE Foundation for Academic Research and Development) is a politically independent, non-partisan, interdisciplinary conference organizer, research consultancy and publisher dedicated to fostering interdisciplinary discussion, facilitating cross-cultural awareness and promoting international exchange, mainly through educational and academic cooperation and research.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Together with the academic world (comprising of students, researchers, research institutions, universities and industry), BFARD works with its partners to plan and deliver world-class, impactful events with excellence, care and integrity. From the initial spark to the conceptualization and shaping of an idea, BFARD is involved every step of the way.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                        <AnimatedCounter 
                          end={stat.number} 
                          duration={2000}
                        />
                      </div>
                      <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Research Focus */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-gray-900">Research Excellence</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Through its massive network of organizations and individuals and the think tank at its administrative offices, BFARD coordinates and undertakes original research, including producing incisive commentary and analysis. Our strength lies in international and interdisciplinary public policy research, particularly in the areas of engineering, science, technology and academia in general.
                </p>
              </CardContent>
            </Card>

            {/* Mission Objectives */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-gray-900">BFARD's Mission Objectives</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Innovation Focus */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-gray-900">Innovation & Value Creation</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Through the creation of opportunities for discourse amongst academics and opinion leaders, BFARD has made a name for itself as a pioneer in implementing the research avenues and visionary development programs that are required in our rapidly developing globalized society.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  BFARD was founded as a research organization, conference organizer and publisher dedicated to encouraging interdisciplinary discussion, facilitating cross-cultural awareness and promoting international exchange, primarily through educational interaction and academic research.
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

export default Mission;