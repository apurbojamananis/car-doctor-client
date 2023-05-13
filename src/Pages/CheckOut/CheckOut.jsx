import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const { user } = useContext(AuthContext);
  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      date,
      email,
      img,
      service: title,
      serviceID: _id,
      price: price,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Booking confirm");
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-3xl">Book Services: {title}</h2>
      <form onSubmit={handleBookService}>
        <div className="card-body">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Customer Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Customer Name"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Service Price"
                defaultValue={`$${price}`}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Confirm Order"
              className="btn btn-primary btn-block"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
