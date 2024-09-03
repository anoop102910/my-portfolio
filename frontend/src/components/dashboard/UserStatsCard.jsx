import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import { User, Clock, Users } from 'lucide-react';

const UserStatsCard = () => {
  const [stats, setStats] = useState({
    dailyUsers: 0,
    weeklyUsers: 0,
    monthlyUsers: 0,
    dailyTimeSpent: 0,
    weeklyTimeSpent: 0,
    monthlyTimeSpent: 0,
    totalTimeSpent: 0,
    referredUsers: 0,
    linkedinReferred: 0,
  });

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await api.get('/get-user-stats'); 
        console.log(response.data);
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching user stats:', error);
      }
    };
    fetchUserStats();
  }, []);

  const statsData = [
    { label: 'Daily Users', value: stats.dailyUsers, icon: <User /> },
    { label: 'Weekly Users', value: stats.weeklyUsers, icon: <User /> },
    { label: 'Monthly Users', value: stats.monthlyUsers, icon: <User /> },
    { label: 'Daily Time Spent (hrs)', value: stats.dailyTimeSpent, icon: <Clock /> },
    { label: 'Weekly Time Spent (hrs)', value: stats.weeklyTimeSpent, icon: <Clock /> },
    { label: 'Monthly Time Spent (hrs)', value: stats.monthlyTimeSpent, icon: <Clock /> },
    { label: 'Total Time Spent (hrs)', value: stats.totalTimeSpent, icon: <Clock /> },
    { label: 'Referred Users', value: stats.referredUsers, icon: <Users /> },
    { label: 'LinkedIn Referrals', value: stats.linkedinReferred, icon: <Users /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {statsData.map((stat, index) => (
        <div key={index} className="w-full p-2 neo-outline">
          <div className="p-4 flex items-center">
            <div className="mr-3 text-blue-500" >{stat.icon}</div>
            <div>
              <h5 className="text-lg font-semibold">{stat.label}</h5>
              <h6 className="text-xl font-bold">{stat.value}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserStatsCard;