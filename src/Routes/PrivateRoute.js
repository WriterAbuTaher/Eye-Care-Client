import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center'>
                <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
            </div>
        )
    }
    if (user) {
        return children;
    }

    return (
        <Navigate state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;