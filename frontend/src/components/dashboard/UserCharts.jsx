import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import api from '../../utils/api';

const UserCharts = () => {
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDetailsResponse = await api.get('/get-user-details'); // Endpoint for user details
        const userSessionResponse = await api.get('/get-user-sessions'); // Endpoint for user sessions

        // Map user details to dailyData
        setDailyData(userDetailsResponse.data.map(detail => ({
          date: detail.createdAt.split('T')[0], // Assuming createdAt is in ISO format
          totalUsers: 1 // Assuming each detail represents one user
        })));

        // Map user sessions to weeklyData
        setWeeklyData(userSessionResponse.data.map(session => ({
          week: new Date(session.startedAt).toLocaleDateString('en-US', { week: 'numeric' }), // Format as needed
          totalUsers: 1 // Assuming each session represents one user
        })));

        // Monthly data can be derived similarly if needed
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Total Users vs Day (Past Week)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dailyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      <h2>Total Users vs Week (Past Two Months)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weeklyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalUsers" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      <h2>Total Users vs Month (Past Month)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalUsers" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserCharts;