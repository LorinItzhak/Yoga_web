import React from 'react';
import useUser from '../../../hooks/useUser';
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import { useState, useEffect } from 'react';
import { use } from 'react';
import AdminStats from './AdminStats';

const AdminHome = () => {
    const {currentUser}=useUser();
    const axiosFetch = useAxiosFetch();
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        axiosFetch.get('/users')
        .then((res)=>{
            setUsers(res.data);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);


    return (
        
        <div>
            <div>
            <h1 className='text-4xl font-bold my-7'>Welcome Back,  <span className='text-secondary'>{currentUser?.name}</span></h1>
            <AdminStats users={users} />
            </div>
            
        </div>
    );
};

export default AdminHome;