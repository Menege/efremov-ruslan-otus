import React from "react";
import { User } from "../types/user";

interface UserCardProps {
  user: User;
  newRating: number;
  handleRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => {};
  handleUpdateRating: () => {};
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  newRating,
  handleRatingChange,
  handleUpdateRating,
}) => (
  <div>
    <h1>{user.name}'s Profile</h1>
    <p>Role: {user.role}</p>
    <p>Current Rating: {user.rating}</p>

    <h2>Update Rating</h2>
    <input
      type="number"
      value={newRating}
      onChange={(e) => handleRatingChange(e)}
    />
    <button onClick={handleUpdateRating}>Update Rating</button>
  </div>
);

export default UserCard;
