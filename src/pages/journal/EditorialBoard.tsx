import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Mail } from 'lucide-react';

const EditorialBoard = () => {
  const boardMembers = [
    {
      name: 'Dr. Megha Pant',
      role:'Assistant Professor',
      institution: 'Uttarakhand Open University, Haldwani, Uttarakhand',
      email: 'meghapant@uou.ac.in',
    },
    {
      name: 'Ms. Anupam Sinha',
      role: 'Assistant Professor, Amity Law School',
      institution: 'Amity University, Patna',
      email: 'asinha@ptn.amity.edu',
    },
    {
      name: 'Dr. Lyson Chaka',
      role: 'Lecturer, Faculty of Natural and Agricultural Sciences, Department of Statistics Hatfield Campus',
      institution: 'University of Pretoria, Pretoria 0028',
      email: 'lyson.chaka@up.ac.za',
    },
    {
      name: 'Dr. Surendra Mahto',
      role: 'Assistant Professor',
      institution: 'Nepal Commerce Campus, Minbhawan, Kathmandu',
      email: 'surendra.mahato@ncc.tu.edu.np',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              <span>Editorial Board</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Editorial Board
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our editorial board comprises distinguished academics and researchers committed to maintaining the highest standards of scholarly publishing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl font-bold text-slate-800 mb-8 text-center">
              Editorial Board Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boardMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-8"
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-5">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').find(w => w.length > 2 && !['Dr.', 'Ms.', 'Mr.', 'Prof.'].includes(w))?.[0] || member.name[0]}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                  {member.role && (
                    <p className="text-blue-600 text-sm font-medium mb-1">{member.role}</p>
                  )}
                  <p className="text-slate-500 text-sm mb-4">{member.institution}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{member.email}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
              <p className="text-slate-600 text-sm leading-relaxed">
                Our editorial board is continuously growing. If you are an established academic and wish to join our editorial board, please contact us at{' '}
                <a href="mailto:info@bhagyashreefoundation.in" className="text-blue-600 hover:underline font-medium">
                  info@bhagyashreefoundation.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditorialBoard;
