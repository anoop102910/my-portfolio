import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableCaption, TableHeader } from '@/components/ui/Table'; 
import api from '../../utils/api'; 

const UserDetailsTable = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await api.get('/get-user-details'); 
        setUserDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const fields = [
    { label: 'User ID', key: 'userId' },
    { label: 'Screen Height', key: 'screenHeight' },
    { label: 'Screen Width', key: 'screenWidth' },
    { label: 'Referrer URL', key: 'referrerUrl' },
    { label: 'Created At', key: 'createdAt' },
    // { label: 'IP', key: 'ip' },
    { label: 'City', key: 'city' },
    { label: 'Region', key: 'region' },
    { label: 'Country', key: 'country' },
    { label: 'Location', key: 'loc' },
    { label: 'Organization', key: 'org' },
    // { label: 'Postal', key: 'postal' },
    // { label: 'Timezone', key: 'timezone' },
    { label: 'User Agent', key: 'userAgent' },
  ];

  return (
      <Table>
        <TableCaption>A list of user details.</TableCaption>
        <TableHeader>
          <TableRow>
            {fields.map(field => (
              <TableHead key={field.key} className={field.key === 'userId' ? "w-[100px]" : ""}>{field.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {userDetails.map((detail) => (
            <TableRow key={detail.userId}>
              {fields.map(field => (
                <TableCell key={field.key} className={field.key === 'userId' ? "font-medium" : ""}>{detail[field.key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
};

export default UserDetailsTable;