import React, { useState } from "react";

const App = () => {
  const [openFolders, setOpenFolders] = useState({}); // Tracks the open/closed state of each folder
  const [currentfolder, setcurrentfolder] = useState("");
  const [folder, setFolder] = useState({
    folder1: [
      { name: "file1", type: "file" },
      { name: "file2", type: "file" },
      { name: "file3", type: "file" },
    ],
    folder2: [
      { name: "file4", type: "file" },
      { name: "file5", type: "file" },
      { name: "file6", type: "file" },
    ],
    folder3: [
      { name: "file7", type: "file" },
      { name: "file8", type: "file" },
      { name: "file9", type: "file" },
    ],
    folder4: [
      { name: "file4", type: "file" },
      { name: "file5", type: "file" },
      { name: "file6", type: "file" },
    ],
    folder5: [
      { name: "file7", type: "file" },
      { name: "file8", type: "file" },
      { name: "file9", type: "file" },
    ],
  });
  const [foldercount, setfoldercount] = useState(5);
  const [Addfile, setAddfile] = useState(false);
  const toggleFolder = (folderName) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const addFile = () => {
    if (!currentfolder) return;

    setFolder((prev) => ({
      ...prev,
      [currentfolder]: [
        ...prev[currentfolder],
        { name: "file7", type: "file" },
        { name: "file4", type: "file" },
        { name: "file5", type: "file" },
        { name: "file7", type: "file" },
      ],
    }));
  };

  const addFolder = () => {
    const existingFolderCount = Object.keys(folder).length;
    const newFolderName = `folder${existingFolderCount + 1}`;

    // Add the new folder directly
    setFolder((prev) => ({
      ...prev,
      [newFolderName]: [
        { name: "file4", type: "file" },
        { name: "file5", type: "file" },
        { name: "file6", type: "file" },
      ],
    }));
  };
  console.log("currentfolder" + "  " + currentfolder);
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Sidebar - Folder List */}
      <div
        style={{
          width: "250px",
          height: "fit-content",
          backgroundColor: "#2d2d2d",
          color: "white",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <h3>Folders</h3>
        <div
          onClick={addFolder}
          style={{ marginBottom: "10px", cursor: "pointer" }}
        >
          ADD FOLDER
        </div>
        <div
          onClick={() => {
            // addFile();
            setAddfile(!Addfile);
          }}
          style={{ marginBottom: "10px", cursor: "pointer" }}
        >
          ADD FILE
        </div>

        {Object.keys(folder).map((folderName, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h4
              style={{
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "normal",
                color: openFolders[folderName] ? "#ffcc00" : "#ffffff",
              }}
              onClick={() => {
                toggleFolder(folderName);
                setcurrentfolder(folderName);
              }}
            >
              {folderName}
            </h4>
            <div>
              {openFolders[folderName] &&
                folder[folderName].map((file, fileIndex) => (
                  <>
                    {" "}
                      <div
                        key={fileIndex}
                        style={{
                          marginLeft: "20px",
                          color: "#b3b3b3",
                          cursor: "pointer",
                        }}
                      >
                        {console.log("fileindex"+fileIndex)}
                        {console.log("length"+folder[folderName].length)}

                        {file.name}
                      </div>
{                                          folder[folderName].length-1 === fileIndex  && currentfolder == folderName && Addfile  && <input type="text" />
}                                      </>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          flex: 1,
          backgroundColor: "#f5f5f5",
          padding: "20px",
          boxSizing: "border-box",
          overflowY: "scroll",
        }}
      >
        <h2>Files in {currentfolder}</h2>
        {currentfolder &&
          openFolders[currentfolder] &&
          folder[currentfolder].map((file, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              {file.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
