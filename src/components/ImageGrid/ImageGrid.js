import React from "react";
import useFirestore from "../../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div key={doc.id}>
            <img src={doc.url} alt="pic" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
