import { useState, useEffect } from "react";
import { getBookings } from "../services/BookingService.jsx";
import Bookings from "../components/Bookings.jsx";

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

  const removeBooking = (id) => {
    const bookingsToKeep = bookings.filter((booking) => booking._id !== id);
    setBookings(bookingsToKeep);
  };

  return (
    <>
      <h1>Bookings go here: </h1>
      <Bookings bookings={bookings} removeBooking={removeBooking} />
    </>
  );
};

export default BookingsContainer;
