import React, { useState } from "react";

const TrainSeatBooking = () => {
  const [rawTrainData, setRawTrainData] = useState([
    {
      trainId: "123A",
      name: "Express Train A",
      date: "2024-09-20",
      availableSeats: 5,
      seats: [
        { isBooked: true, isPwD: false },
        { isBooked: false, isPwD: false },
        { isBooked: false, isPwD: true },
        { isBooked: true, isPwD: false },
        { isBooked: false, isPwD: false },
      ],
    },
    // Add more train data as needed
  ]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTrain, setSelectedTrain] = useState(null);

  // Filter trains based on date
  const availableTrains = rawTrainData.filter(
    (train) => train.date !== selectedDate
  );

  const bookSeat = (trainId, seatIndex) => {
    setRawTrainData((prevData) =>
      prevData.map((train) => {
        if (train.trainId === trainId) {
          const updatedSeats = train.seats.map((seat, index) =>
            index === seatIndex ? { ...seat, isBooked: true } : seat
          );
          return {
            ...train,
            seats: updatedSeats,
            availableSeats: train.availableSeats - 1,
          };
        }
        return train;
      })
    );
  };
  

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Train Seat Booking</h1>

      {/* Date Input */}
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border p-2 mb-4"
      />

      {/* Available Trains */}
      <div>
        <h2 className="text-lg font-semibold">Available Trains</h2>
        {availableTrains.length === 0 ? (
          <p>No trains available for the selected date.</p>
        ) : (
          availableTrains.map((train) => (
            <div
              key={train.trainId}
              className="flex justify-between items-center border p-2 my-2"
            >
              <span>{train.name}</span>
              <span>Available Seats: {train.availableSeats}</span>
              <button
                onClick={() => setSelectedTrain(train)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                View Seats
              </button>
            </div>
          ))
        )}
      </div>

      {/* Seat Booking */}
      {selectedTrain && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">
            {selectedTrain.name} - Seats
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedTrain.seats.map((seat, index) => (
              <button
                key={index}
                disabled={seat.isBooked || seat.isPwD}
                onClick={() => bookSeat(selectedTrain.trainId, index)}
                className={`w-10 h-10 ${
                  seat.isBooked
                    ? "bg-red-500" // Booked Seat
                    : seat.isPwD
                    ? "bg-yellow-500" // Reserved for PwD
                    : "bg-green-500" // Available Seat
                } text-white rounded`}
              >
                {seat.isBooked ? "X" : seat.isPwD ? "P" : "O"}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainSeatBooking;
