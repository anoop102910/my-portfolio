import React from 'react';
import UserStatsCard from '../../components/dashboard/UserStatsCard';
import UserSessionTable from '../../components/dashboard/UserSessionTable';
import UserDetailsTable from '../../components/dashboard/UserDetailsTable';
const Dashboard = () => {
    return (
        <div className='bg-bg p-10'>
            <h1 className='text-4xl font-bold text-center text-slate-700 mb-4'>Dashboard</h1>
            <UserStatsCard />
            <div className='mt-10 '>
                <UserDetailsTable />
            </div>
            <div className='mt-10 w-1/2'>
                <UserSessionTable />
            </div>
        </div>
    );
};

export default Dashboard;
