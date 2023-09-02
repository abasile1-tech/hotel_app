/* eslint-disable react/prop-types */
import BookingCard from "./BookingCard.jsx";

const Bookings = ({ bookings, removeBooking }) => {
  const bookingsList = bookings.map((booking) => {
    return (
      <BookingCard
        key={booking._id}
        booking={booking}
        removeBooking={removeBooking}
      />
    );
  });
  return (
    <>
      <h3>Here are the bookings:</h3>
      {bookingsList}
    </>
  );
};

export default Bookings;
