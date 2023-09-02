/* eslint-disable react/prop-types */
import { useState } from "react";
import { postBooking } from "../services/BookingService.jsx";

const BookingsForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkedIn: false,
  });

  const onChange = (e) => {
    const newFormData = Object.assign({}, formData);
    if (e.target.name == "checkedIn") {
      newFormData[e.target.name] = e.target.checked;
    } else {
      newFormData[e.target.name] = e.target.value;
    }

    console.log("e.target.value: ", e.target.value);
    console.log("e.target.name: ", e.target.name);
    setFormData(newFormData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postBooking(formData).then((data) => {
      addBooking(data);
    });
    // Reset the form input values
    setFormData({
      name: "",
      email: "",
      checkedIn: false,
    });
  };

  return (
    <form onSubmit={onSubmit} id="bookings-form">
      <h2>Add a Booking</h2>
      <div className="formWrap">
        <label htmlFor="name">Name:</label>
        <input
          onChange={onChange}
          type="text"
          id="name"
          name="name"
          value={formData.name}
        />
      </div>
      <div className="formWrap">
        <label htmlFor="email">Email:</label>
        <input
          onChange={onChange}
          type="text"
          id="email"
          name="email"
          value={formData.email}
        />
      </div>
      <div className="formWrap">
        <label htmlFor="checkedIn">Checked In:</label>
        <input
          onChange={onChange}
          type="checkbox"
          id="checkedIn"
          name="checkedIn"
          //value={formData.checkedIn}
        />
      </div>

      <input type="submit" value="Save" id="save" />
    </form>
  );
};

export default BookingsForm;
