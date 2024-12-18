import React from 'react';
import { User, Trophy } from 'lucide-react';

interface RankingUser {
  id: string;
  name: string;
  avatar?: string;
  points: number;
  position: number;
  isCurrentUser?: boolean;
}

interface RankingListProps {
  users: RankingUser[];
  currentUserPosition: number;
}

const RankingList = ({ users, currentUserPosition }: RankingListProps) => {
  const getPositionStyle = (position: number) => {
    switch (position) {
      case 1:
        return 'bg-yellow-100 border-yellow-500';
      case 2:
        return 'bg-gray-100 border-gray-500';
      case 3:
        return 'bg-amber-100 border-amber-500';
      default:
        return 'bg-white border-transparent';
    }
  };

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return position;
    }
  };

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div 
          key={user.id}
          className={`p-4 rounded-lg border-2 transition-all ${
            user.isCurrentUser 
              ? 'border-emerald-500 bg-emerald-50' 
              : `${getPositionStyle(user.position)} hover:shadow-md`
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 flex justify-center">
                <span className="text-lg font-bold">
                  {getPositionIcon(user.position)}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <User className="w-6 h-6 text-emerald-600" />
                  </div>
                )}
                <div>
                  <p className="font-medium">{user.name}</p>
                  <div className="flex items-center text-sm text-emerald-600">
                    <Trophy className="w-4 h-4 mr-1" />
                    <span>{user.points} pts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RankingList;