import React from "react";

const Debouncing = () => {
  const [value, setValue] = React.useState("");
  const debounceTimeout = React.useRef(null);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Clear the previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set a new timeout
    debounceTimeout.current = setTimeout(() => {
      console.log("Debounced Value:", value);
    }, 200);
  };

  return (
    <div>
      <label>Type something:</label>
      <input
        value={value}
        onChange={handleInputChange}
        type="text"
        className="w-36 h-10 border border-black"
      />
    </div>
  );
};

export default Debouncing;
