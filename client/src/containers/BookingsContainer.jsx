import { useState, useEffect } from "react";
import { getBookings } from "../services/BookingService.jsx";
import Bookings from "../components/Bookings.jsx";
import BookingsForm from "../components/BookingsForm.jsx";

const BookingsContainer = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings);
    });
  }, []);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  const editBooking = (id, booking) => {
    const indexToKeep = bookings.findIndex((booking) => {
      return booking._id === id;
    });
    if (indexToKeep === -1) {
      console.error("unable to find booking to update: " + id);
      return;
    }
    console.log("bookings before:", JSON.stringify(bookings));
    // bookings[indexToKeep] = booking;
    bookings.splice(indexToKeep, 1, booking);
    console.log("bookings after:", JSON.stringify(bookings));
    setBookings([...bookings]);
  };

  const removeBooking = (id) => {
    const bookingsToKeep = bookings.filter((booking) => booking._id !== id);
    setBookings(bookingsToKeep);
  };

  return (
    <>
      <h1>Bookings go here: </h1>
      <BookingsForm addBooking={addBooking} />
      <Bookings
        bookings={bookings}
        removeBooking={removeBooking}
        editBooking={editBooking}
      />
    </>
  );
};

export default BookingsContainer;
