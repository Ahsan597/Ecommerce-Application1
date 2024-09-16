import React from 'react';

export default function LoggedIn({onLogout}) {
        const handleLogout = () => {
          // Perform logout logic
          onLogout();
        };

  return (
      <div>
      <h2>Welcome! You are logged in.</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>

  );
}
