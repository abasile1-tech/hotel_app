/* eslint-disable react/prop-types */
import { deleteBooking } from "../services/BookingService.jsx";

const BookingCard = ({ booking, removeBooking }) => {
  console.log(booking);
  const handleDelete = () => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id);
    });
  };
  return (
    <>
      <h1>{booking.name}</h1>
      <p>Email: {booking.email}</p>
      <p>Checked In: {booking.checkedIn}</p>
      <button onClick={handleDelete}> 🗑 </button>
      <hr></hr>
    </>
  );
};

export default BookingCard;
