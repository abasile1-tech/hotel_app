use hotels;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Bob Ross",
    email: "therealbobross@gmail.com",
    checkedIn: false
  },
  {
    name: "Nicolas Cage",
    email: "nicolasdangercage@gmail.com",
    checkedIn: false
  },
  {
    name: "Liam Neeson",
    email: "taken@gmail.com",
    checkedIn: false
  }
]);