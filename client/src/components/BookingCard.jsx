/* eslint-disable react/prop-types */
import { deleteBooking, putBooking } from "../services/BookingService.jsx";

const BookingCard = ({ booking, removeBooking, editBooking }) => {
  console.log(booking);
  const handleDelete = () => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id);
    });
  };
  const handleCheckIn = () => {
    putBooking(!booking.checkedIn, booking._id).then((booking) => {
      editBooking(booking._id, booking);
    });
  };
  return (
    <>
      <h1>{booking.name}</h1>
      <p>Email: {booking.email}</p>
      <p>Checked In: {booking.checkedIn ? "yes" : "no"}</p>
      <button onClick={handleCheckIn}>
        {booking.checkedIn ? "Check Out" : "Check In"}
      </button>
      <button onClick={handleDelete}> 🗑 </button>
      <hr></hr>
    </>
  );
};

export default BookingCard;
