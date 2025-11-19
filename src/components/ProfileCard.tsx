
import { Card, CardContent } from '@/components/ui/card';

interface ProfileCardProps {
  name: string;
  role: string;
  department?: string;
  image?: string;
  bio?: string;
}

const ProfileCard = ({ name, role, department, image, bio }: ProfileCardProps) => {
  return (
    <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image or Placeholder */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold shadow-lg">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
            ) : (
              name.split(' ').map(n => n[0]).join('').toUpperCase()
            )}
          </div>
          
          {/* Name and Role */}
          <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-1">
            {name}
          </h3>
          <p className="text-blue-600 font-medium text-sm mb-1">
            {role}
          </p>
          {department && (
            <p className="text-gray-500 text-xs mb-3">
              {department}
            </p>
          )}
          
          {/* Bio */}
          {bio && (
            <p className="text-gray-600 text-sm leading-relaxed">
              {bio}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;