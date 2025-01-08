import React, { useState } from "react";

const MovieTicket = () => {
  const [vipmatrix, setvipmatrix] = useState([
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
  ]);

  const [book, setbook] = useState([
    { seat: 0, type: "vip" },
    { seat: 0, type: "local" },
    { seat: 0, type: "general" },
  ]);

  const setadd = (local, rowindex, colindex) => {
    // Increment the booked seat count
    setbook((prev) =>
      prev.map((item, index) =>
        index === local
          ? {
              ...item,
              seat: item.seat + 1,
            }
          : item
      )
    );

    setvipmatrix((prev) =>
      prev.map((row, rIndex) =>
        rIndex === rowindex
          ? row.map((seat, cIndex) =>
              cIndex === colindex ? "B" : seat 
            )
          : row
      )
    );
  };

  return (
    <div>
      <h1 className="text-white mb-4">VIP Movie Seat Booking</h1>

      {vipmatrix.map((row, rowindex) => (
        <div key={rowindex} className="flex gap-5 mb-2">
          {row.map((seat, colindex) => (
            <div
              key={colindex}
              onClick={() => setadd(0, rowindex, colindex)}
              className={`p-2 w-8 h-8 text-center cursor-pointer border ${
                seat === "B" ? "bg-red-500 text-white" : "bg-green-500"
              }`}
            >
              {seat}
            </div>
          ))}
        </div>
      ))}

      {console.log(vipmatrix)}
      <div className="mt-4">
        {book.map((item, index) => (
          <div key={index}>
            {item.type.toUpperCase()} Seats Booked: {item.seat}
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          alert(
            book[0].seat > 5
              ? "You cannot book more than 5 VIP seats."
              : "Booking Successful!"
          )
        }
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        BOOK SEAT
      </button>
    </div>
  );
};

export default MovieTicket;
