import React from 'react';
import { User, Heart, MessageCircle, Share2 } from 'lucide-react';

interface Activity {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  type: 'recipe' | 'challenge' | 'achievement';
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const ActivityFeed = () => {
  const activities: Activity[] = [
    {
      id: '1',
      user: { name: 'Marie L.' },
      type: 'recipe',
      content: 'A partagé une nouvelle recette végétarienne : Buddha bowl aux légumes de saison',
      likes: 12,
      comments: 3,
      timestamp: 'Il y a 2h'
    },
    {
      id: '2',
      user: { name: 'Thomas R.' },
      type: 'challenge',
      content: 'A complété le défi "Zéro déchet" pendant 7 jours !',
      likes: 24,
      comments: 5,
      timestamp: 'Il y a 5h'
    }
  ];

  return (
    <div className="space-y-4">
      {activities.map(activity => (
        <div key={activity.id} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center space-x-3 mb-3">
            {activity.user.avatar ? (
              <img 
                src={activity.user.avatar} 
                alt={activity.user.name}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-emerald-600" />
              </div>
            )}
            <div>
              <p className="font-medium">{activity.user.name}</p>
              <p className="text-sm text-gray-500">{activity.timestamp}</p>
            </div>
          </div>

          <p className="text-gray-800 mb-4">{activity.content}</p>

          <div className="flex items-center space-x-6 text-gray-600">
            <button className="flex items-center space-x-2 hover:text-emerald-600">
              <Heart className="w-5 h-5" />
              <span>{activity.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-emerald-600">
              <MessageCircle className="w-5 h-5" />
              <span>{activity.comments}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-emerald-600">
              <Share2 className="w-5 h-5" />
              <span>Partager</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;