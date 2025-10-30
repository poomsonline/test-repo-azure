'use client';

import { useEffect, useState } from 'react';

type User = { id: number; name: string };

const initialUsers: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);

//   useEffect(() => {
//     // fetch('/api/users')
//     //   .then(async (res) => {
//     //     const data = await res.json()
//     //     setUsers( data);
//     //     console.log(data);
//     //   }
//     // )
//   }, []);

  return (
    <main>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </main>
  );
}
