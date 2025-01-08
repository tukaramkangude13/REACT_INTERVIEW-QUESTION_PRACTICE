// import React, { useState } from "react";

// const PagiNIation = () => {
//   const pages = [
//     {
//       name: "Tukaram",
//       age: 23,
//       city: "Pune",
//       state: "Maharashtra",
//       pageno: 1,
//     },
//     {
//       name: "Prince",
//       age: 25,
//       city: "Mumbai",
//       state: "Maharashtra",
//       pageno: 2,
//     },
//     {
//       name: "Rutuja",
//       age: 22,
//       city: "Pune",
//       state: "Maharashtra",
//       pageno: 3,
//     },
//     {
//       name: "Akash",
//       age: 28,
//       city: "Nagpur",
//       state: "Maharashtra",
//       pageno: 4,
//     },
//     {
//       name: "Arvind",
//       age: 24,
//       city: "Bhopal",
//       state: "Madhya Pradesh",
//       pageno: 5,
//     },
//     {
//       name: "Neha",
//       age: 27,
//       city: "Indore",
//       state: "Madhya Pradesh",
//       pageno: 6,
//     },
//     {
//       name: "Soham",
//       age: 29,
//       city: "Nagpur",
//       state: "Maharashtra",
//       pageno: 7,
//     },
//     {
//       name: "Vishal",
//       age: 30,
//       city: "Nashik",
//       state: "Maharashtra",
//       pageno: 8,
//     },
//     {
//       name: "Shruti",
//       age: 21,
//       city: "Mumbai",
//       state: "Maharashtra",
//       pageno: 9,
//     },
//     {
//       name: "Priya",
//       age: 26,
//       city: "Pune",
//       state: "Maharashtra",
//       pageno: 10,
//     },
//   ];
//   const [numbers, setnumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//   const [start, setstart] = useState(0);
//   const [end, setend] = useState(numbers.length);
//   const handlenext = () => {
//     console.log(CurrentPage);
//     if (CurrentPage === pages.length - 1) {
//       setstart(numbers.length);

//       setnumbers((prev) => [...prev, 11, 12, 13, 14, 15])
//       console.log(numbers);
//       setend(numbers.length);
//     }
//     if (!CurrentPage === pages.length) {
//       // setnumbers(numbers+1);
//       console.log(numbers);
      
//       setCurrentPage(CurrentPage + 1);
//     }
//   };
//   console.log(start);
//   console.log(end);
//   const [CurrentPage, setCurrentPage] = useState(0);
//   console.log(numbers);
//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       PagiNIation
//       {pages.map((page, index) => (
//         <>
//           {/* <button
//                 onClick={() => setCurrentPage(page.pageno)}
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'row',
//                   margin: '5px',
//                   padding: '10px',
//                   backgroundColor: '#f0f0f0',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   cursor: 'pointer'
//                 }}
//                 key={page.pageno}
//               >
//                 {page.pageno}
//               </button> */}

//           {index === CurrentPage && (
//             <div
//               style={{
//                 marginTop: "10px",
//                 padding: "10px",
//                 border: "1px solid #ddd",
//                 borderRadius: "5px",
//               }}
//             >
//               <p>
//                 <strong>Age:</strong> {pages[CurrentPage]?.age}
//               </p>
//               <p>
//                 <strong>Name:</strong> {pages[CurrentPage]?.name}
//               </p>
//               <p>
//                 <strong>City:</strong> {pages[CurrentPage]?.city}
//               </p>
//               <p>
//                 <strong>State:</strong> {pages[CurrentPage]?.state}
//               </p>
//               <p>
//                 <strong>Page No:</strong> {pages[CurrentPage]?.pageno}
//               </p>
//             </div>
//           )}
//         </>
//       ))}
//       <button>prev</button>
//       {numbers.slice(start,numbers.length ).map((values, index) => (
//         <button
//           className={`  py-1     border-l-2  cursor-pointer   px-4  text-white   ${
//             CurrentPage === values - 1 ? " bg-red-500 " : "bg-black"
//           }    `}
//           onClick={() => setCurrentPage(values - 1)}
//         >
//           {" "}
//           {values}{" "}
//         </button>
//       ))}
//       <button
//         onClick={handlenext}
//         style={{ opacity: pages.length === CurrentPage ? 0.2 : 1 }}
//       >
//         {" "}
//         next{" "}
//       </button>
//     </div>
//   );
// };

// export default PagiNIation;








import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [info, setInfo] = useState(null);
  const [rowPerPage, setRowPerPage] = useState(10); // Rows displayed per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!info) return <p>Loading...</p>; // Show loading state

  // Calculate data for the current page
  const startIndex = (currentPage - 1) * rowPerPage;
  const endIndex = startIndex + rowPerPage;
  const currentData = info.slice(startIndex, endIndex);

  const totalPages = Math.ceil(info.length / rowPerPage);

  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Pagination Example</h1>

      {/* Data Display */}
      <div className="space-y-4">
        {currentData.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white shadow rounded-md border border-gray-200"
          >
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-gray-600">{item.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Prev
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-white rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>

      {/* Rows Per Page Selector */}
      <div className="mt-4">
        <label htmlFor="rowsPerPage" className="block text-gray-700 mb-2">
          Rows per page:
        </label>
        <select
          id="rowsPerPage"
          onChange={(e) => setRowPerPage(Number(e.target.value))}
          value={rowPerPage}
          className="p-2 border border-gray-300 rounded"
        >
          {[5, 10, 15, 20].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
