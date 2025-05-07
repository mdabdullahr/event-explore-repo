import React, { useEffect } from 'react';

const Profile = () => {
    useEffect(() => {
        document.title = "Event Explore | Profile";
      }, []);
    return (
        <div className='text-3xl font-semibold text-secondary'>
            This user Profile
        </div>
    );
};

export default Profile;