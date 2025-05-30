import React from 'react'
import useAuth  from "./useAuth"
import useAxiosSecure from './useAxiosSeciure';
import {useQuery} from '@tanstack/react-query';

const useUser = () => {
 
    const{user}= useAuth();
    const axiosSecure = useAxiosSecure();
    const{data:currentUser, isLoading, refetch}= useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res= await axiosSecure.get(`/user/${user?.email}`);
            return res.data;
        }, 
        enabled: !!user?.email && !!localStorage.getItem('token')

    })
       
    return {currentUser, isLoading, refetch};
}

export default useUser
