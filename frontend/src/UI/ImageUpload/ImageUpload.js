import React from "react";
import "./ImageUpload.scss";

// aj don noooo"!"!"!""!?!?!??!""

const ImageUpload = props => {
  return (
    <div className="imageUploadContainer">
      <form action="##">
        <i className="far fa-images uploadImage" />
        <input
          type="file"
          name={props.name}
          accept="image/*"
          className={"custom-file-input"}
        />

        <input
          className="uploadRelativeDiv"
          type="submit"
          value="Upload image"
        />
      </form>
    </div>
  );
};
export default ImageUpload;
