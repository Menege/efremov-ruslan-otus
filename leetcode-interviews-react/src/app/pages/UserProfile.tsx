import React, { useEffect, useState, useCallback } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { getUserById, updateUserRating } from '../api/usersApi'; 
import { User } from '../types/user'; 
import UserCard from '../components/UserCard';
 
const UserProfile: React.FC = () => { 
  const { id } = useParams<{ id?: string }>(); 
  const [user, setUser] = useState<User | null>(null); 
  const [newRating, setNewRating] = useState<number>(0); 

  const handleUpdateRating = useCallback(async () => { 
    if (id) { 
      const updatedUser = await updateUserRating(id, newRating); 
      setUser(updatedUser); 
    } 
  }, [id, newRating]);

  useEffect(() => { 
    if (id) { 
      const fetchUser = async () => { 
        const data = await getUserById(id); 
        setUser(data); 
        setNewRating(data.rating); 
      }; 
      fetchUser(); 
    } 
  }, [id]);

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setNewRating(Number(e.target.value)); 
  }; 
 
  if (!user) return <p>Loading...</p>; 
 
  return ( 
    <div> 
      <UserCard user={user} newRating={newRating} handleRatingChange={async (e) => handleRatingChange(e)} handleUpdateRating={handleUpdateRating} />
    </div> 
  ); 
}; 
 
export default UserProfile;