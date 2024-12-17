import React from 'react';
import { User, Heart, MessageCircle, Share2, Award } from 'lucide-react';

interface FeedItem {
  id: string;
  type: 'achievement' | 'challenge' | 'recipe' | 'reward';
  user: {
    name: string;
    avatar?: string;
    level: number;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  metadata?: {
    points?: number;
    badge?: string;
    impact?: string;
  };
}

const SocialFeed = () => {
  const feedItems: FeedItem[] = [
    {
      id: '1',
      type: 'achievement',
      user: {
        name: 'Marie L.',
        level: 12
      },
      content: 'A obtenu le badge "Éco-warrior" !',
      timestamp: 'Il y a 30 min',
      likes: 15,
      comments: 3,
      metadata: {
        points: 100,
        badge: '🌱'
      }
    },
    {
      id: '2',
      type: 'recipe',
      user: {
        name: 'Thomas R.',
        level: 8
      },
      content: 'A partagé une nouvelle recette zéro déchet : Pesto aux fanes de carottes',
      timestamp: 'Il y a 2h',
      likes: 24,
      comments: 7,
      metadata: {
        impact: '-2.5 kg CO₂'
      }
    }
  ];

  return (
    <div className="space-y-4">
      {feedItems.map(item => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {item.user.avatar ? (
                <img 
                  src={item.user.avatar}
                  alt={item.user.name}
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-emerald-600" />
                </div>
              )}
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{item.user.name}</span>
                  <span className="text-sm text-emerald-600">Niv. {item.user.level}</span>
                </div>
                <p className="text-sm text-gray-500">{item.timestamp}</p>
              </div>
            </div>
            {item.metadata?.badge && (
              <div className="text-2xl">{item.metadata.badge}</div>
            )}
          </div>

          <p className="text-gray-800 mb-4">{item.content}</p>

          {item.metadata?.impact && (
            <div className="mb-4 inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm">
              <Award className="w-4 h-4 mr-1" />
              {item.metadata.impact}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600">
                <Heart className="w-5 h-5" />
                <span>{item.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600">
                <MessageCircle className="w-5 h-5" />
                <span>{item.comments}</span>
              </button>
            </div>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600">
              <Share2 className="w-5 h-5" />
              <span>Partager</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialFeed;