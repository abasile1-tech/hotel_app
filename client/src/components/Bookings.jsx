/* eslint-disable react/prop-types */
import BookingCard from "./BookingCard.jsx";

const Bookings = ({ bookings, removeBooking, editBooking }) => {
  const bookingsList = bookings.map((booking) => {
    return (
      <BookingCard
        key={booking._id}
        booking={booking}
        removeBooking={removeBooking}
        editBooking={editBooking}
      />
    );
  });
  return (
    <>
      <h2>Booking List</h2>
      {bookingsList}
    </>
  );
};

export default Bookings;
