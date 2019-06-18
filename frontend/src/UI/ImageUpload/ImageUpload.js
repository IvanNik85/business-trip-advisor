import React from "react";
import "./ImageUpload.scss";
import Icon from '../Icon/Icon'



const ImageUpload = props => {
  return (
    <div className="imageUploadContainer">
      <form action="##">
        <label htmlFor={"imageUpload"}>
          <a style={{ cursor: "pointer" }}>
            <Icon iconClass={"images "} fontSize={"50px"} />
          </a>
        </label>
        <input
          type="file"
          name="imageUpload"
          accept="image/*"
          id="imageUpload"
          style={{ display: "none" }}
        />

        <input type="submit" value="Upload image" />
      </form>
    </div>
  );
};
export default ImageUpload;
