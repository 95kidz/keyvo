import React from 'react';
import { User } from 'lucide-react';

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
  return (
    <div className="px-4">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-500">Ta position</h3>
        <div className={`mt-2 p-4 rounded-lg border-2 ${
          currentUserPosition <= 3 ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-lg font-bold">{currentUserPosition}</span>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <User className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">Jean Durand</p>
                  <p className="text-sm text-gray-600">540 pts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-sm font-medium text-gray-500 mb-2">Classement général</h3>
      <div className="space-y-3">
        {users.map((user) => (
          <div 
            key={user.id}
            className={`p-4 rounded-lg ${
              user.position <= 3 ? 'bg-emerald-50' : 'bg-gray-50'
            } ${user.isCurrentUser ? 'border-2 border-emerald-500' : ''}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-lg font-bold w-6">{user.position}</span>
                <div className="flex items-center space-x-2">
                  {user.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.points} pts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingList;