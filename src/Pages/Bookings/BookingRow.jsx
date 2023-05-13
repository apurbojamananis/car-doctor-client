/* eslint-disable react/prop-types */
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, service, date, price, status } = booking;

  return (
    <tr>
      <th>
        <button
          className="btn btn-circle btn-sm"
          onClick={() => handleDelete(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-32 h-20 rounded ">
            <img src={img} alt={service} />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {status === "confirm" ? (
          <button className="btn btn-success ">Confirmed</button>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-warning"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
