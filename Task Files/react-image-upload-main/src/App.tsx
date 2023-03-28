import "./styles.css";

import React, { useState } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray: any = Array.from(e.target.files)
        .map((file) => {
          if (file.size <= 2 * 1024 * 1024 && file.type.startsWith("image/")) {
            return URL.createObjectURL(file);
          }
          return alert("somthing went wrong--Allow max 2MB image and file type only image ");
        })
        .filter(Boolean);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map((file: any) => URL.revokeObjectURL(file));
    }
  };

  const deleteImage = (index: number) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };

  const renderPhotos = (source: string[]) => {
    return source.map((photo: string, index: number) => {
      return (
        <div key={index}>
          <img src={photo} onClick={() => setSelectedIndex(index)} />
          <button onClick={() => deleteImage(index)}>Delete</button>
        </div>
      );
    });
  };

  return (
    <div className="app">
      <div className="heading">Task-Add-Muiltiple-Img</div>
      <div>
        <input
          type="file"
          id="file"
          accept="image/png ,image/jpeg,image/jpg"
          multiple
          onChange={handleImageChange}
        />
        <div className="label-holder">
          <label htmlFor="file" className="label">
            <i className="add-photo">ADD-IMG</i>
          </label>
        </div>
        <div className="result">{renderPhotos(selectedFiles)}</div>
      </div>
      {selectedFiles.length > 0 && (
        <ReactImageGallery
          items={selectedFiles.map((url) => ({ original: url }))}
          startIndex={selectedIndex}
        />
      )}
    </div>
  );
};

export default App;
