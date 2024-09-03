import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableCaption } from '@/components/ui/Table'; 
import api from '../../utils/api'; 
import { TableHeader } from '../ui/Table';

const UserSessionTable = () => {
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const fetchUserSessions = async () => {
      try {
        const response = await api.get('/get-user-sessions'); 
        setUserSessions(response.data.data);
      } catch (error) {
        console.error('Error fetching user sessions:', error);
      }
    };

    fetchUserSessions();
  }, []);

  const fields = [
    { label: 'User ID', key: 'userId', width: 'w-[100px]' },
    { label: 'Started At', key: 'startedAt', format: (value) => new Date(value).toLocaleString() },
    { label: 'Total Sessions', key: 'totalSessions' },
  ];

  return (
      <Table>
        <TableCaption>A list of user sessions.</TableCaption>
        <TableHeader>
          <TableRow>
            {fields.map(field => (
              <TableHead key={field.key} >{field.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {userSessions.map((session) => (
            <TableRow key={session.id}>
              {fields.map(field => (
                <TableCell key={field.key} className={field.key === 'userId' ? "font-medium" : ""}>
                  {field.format ? field.format(session[field.key]) : session[field.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
};

export default UserSessionTable;