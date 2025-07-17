const USERS: Store.IUser[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "securepassword123",
    role: "Admin",
    isActive: true
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    password: "securepassword234",
    role: "User",
    isActive: true
  },
  {
    id: 3,
    name: "Charlie Lee",
    email: "charlie.lee@example.com",
    password: "securepassword345",
    role: "Moderator",
    isActive: false
  },
  {
    id: 4,
    name: "Dana White",
    email: "dana.white@example.com",
    password: "securepassword456",
    role: "User",
    isActive: true
  },
  {
    id: 5,
    name: "Eli Brown",
    email: "eli.brown@example.com",
    password: "securepassword567",
    role: "User",
    isActive: false
  }
];

export {
  USERS
}