import * as React from 'react';
import { Link } from 'react-router-dom';

function UsersIndexPage({ users }) {
  return (
    <div>
      <h1>User</h1>
      <ul>
        {users.map((user) => {
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        })}
      </ul>
    </div>
  )
}