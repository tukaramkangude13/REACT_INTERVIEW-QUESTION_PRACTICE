import React, { useRef, useState } from "react";
import { useEffect } from "react";
const GoogleSheet = () => {
  const rows = 16;
  const [text, settext] = useState("");
  const [color, setcolor] = useState(null);
  const cols = 8;
  const[textsize,settextsize]=useState("xl");

  const spanRef = useRef();
  const inputRef = useRef();
  const [grid, setgrid] = useState(
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        name: "",
        colour: null,
        text: null,
        size:textsize,
      }))
    )
  );
  const [currentInput, setCurrentInput] = useState({ row: null, col: null });
  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      const newWidth = spanRef.current.offsetWidth + 20;
      inputRef.current.style.width = `${newWidth}px`;
    }
  }, [text]);

  const handleCellClick = (rowIndex, colIndex) => {
    console.log(currentInput.col, "+", colIndex);
    console.log(currentInput.row, "+", rowIndex);
    if (currentInput.row === rowIndex && currentInput.col === colIndex) return;
    corefunction();
    setCurrentInput({ row: rowIndex, col: colIndex });
    settext("");

    console.log(`Clicked cell: Row ${rowIndex + 1}, Column ${colIndex + 1}`);
  };

  const [change, setchange] = useState(false);
  const [bold, setbold] = useState(false);
  const corefunction = () => {
    setgrid((prev) =>
      prev.map((row, rowIndex) =>
        rowIndex === currentInput.row
          ? row.map((col, colIndex) =>
              colIndex === currentInput.col
                ? { ...col, name: (col.name = text),  size:(col.size=textsize) }
                : col
            )
          : row
      )
    );
  };
  // console.log(grid);
  const changecolour = () => {
    setgrid((prev) =>
      prev.map((row, rowIndex) =>
        rowIndex === currentInput.row
          ? row.map((col, colIndex) =>
              colIndex === currentInput.col
                ? { ...col, colour: (col.colour = 'red-500' ) }
                : col
            )
          : row
      )
    );
  };
  const changetextsize = () => {
    setgrid((prev) =>
      prev.map((row, rowIndex) =>
        rowIndex === currentInput.row
          ? row.map((col, colIndex) =>
              colIndex === currentInput.col
                ? { ...col, size: (col.size = textsize ) }
                : col
            )
          : row
      )
    );
  };


  
  console.log(grid);
console.log(textsize);
  return (
    <div className="grid-container ml-20   w-[1550px] mt-11 p-4 bg-gray-100 rounded-lg">
     
     <div className="mb-4">
        <label htmlFor="textsize" className="block mb-2 text-gray-700">
          Select Text Size:
        </label>
        <select
          id="textsize"
          onChange={(e) => { settextsize(e.target.value);  changetextsize() }}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
          <option value="xl">xl</option>
          <option value="2xl">2xl</option>
          <option value="3xl">3xl</option>
          <option value="4xl">4xl</option>
          <option value="5xl">5xl</option>
          <option value="6xl">6xl</option>
          <option value="7xl">7xl</option>
        </select>
      </div>

   
      <span ref={spanRef} className="absolute  whitespace-pre">
        {color || " "} {/* Use " " for empty placeholder */}
      </span>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setbold(!bold)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          Bold
        </button>
        <button
          onClick={corefunction}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
        >
          Save
        </button>
        <button
          onClick={() => changecolour()}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 transition"
        >
          <input onChange={(e) => setcolor(e.target.value)} type="color" />
          Background Colour
        </button>
        <button
          // onClick={() => setchange(!change)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
        >
          text Colour
        </button>
        <p className="text-sm text-gray-700">Italic</p>
      </div>

      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row       w-[1550px] h-full flex ">
          {row.map((_, colIndex) => (
            <div>
              {" "}
              {console.log(
                currentInput.row === rowIndex && currentInput.col === colIndex
                  ? grid?.[rowIndex][colIndex]?.name
                  : grid?.[rowIndex][colIndex]?.name
              )}
              <input
                style={{
    "--bg-color": grid?.[rowIndex][colIndex]?.colour || "green",
  }}
                // value={ currentInput.row===rowIndex && currentInput.col===colIndex ? text   : grid?.[rowIndex][colIndex]?.name}
                ref={inputRef}
                onChange={(e) => settext(e.target.value)}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                key={`${rowIndex}-${colIndex}`}
                className={`
             


              
              ${
                bold &&
                rowIndex === currentInput.row &&
                colIndex === currentInput.col
                  ? "font-bold"
                  : ""
              }${
              
                rowIndex === currentInput.row &&
                colIndex === currentInput.col
                  ? `text-${_.size}   `
                  : ""
              }${
                  rowIndex === currentInput.row && colIndex === currentInput.col
                    ? ""
                    : ""
                }${
  grid?.[rowIndex][colIndex].colour
    ? `bg-${grid?.[rowIndex][colIndex].colour}` 
    : ""
}
  border   rounded px-2       py-1 min-w-[100px] max-w-full 
`}
                placeholder={`${rowIndex + 1},${colIndex + 1}`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GoogleSheet;
