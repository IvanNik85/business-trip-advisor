import React from "react";
import "./ModalBodyFeed.scss";
import Selection from "../../../../components/Select/Selection";
// import RateSlid from '../../../../components/Feedback/RateSlider/RateSlid';
import TextArea from "../../../../UI/TextArea/TextArea";
import ImageUpload from "../../../../UI/ImageUpload/ImageUpload";
import RateSlider from "../../../../components/Feedback/RateSlider/RateSlider";
import InputField from "../../../../components/Login/Form/Input";

const ModalBodyFeed = props =>
  props.show ? (
    <div className="formAndImg">
      <form className="formFeedbackContainer">
        <div className="formFlexContainer">
          <div className="modalSelection">
            <InputField
              type={"text"}
              name={"inputName"}
              placeholder={"Enter your name"}
              classes={"inputName"}
            />
            <Selection
              options={["option1", "option2", "option3"]}
              setOption={props.setOption}
              classes={"modalSelect"}
            />
            <RateSlider />
          </div>

          {/* <RateSlid /> */}
        </div>
        <TextArea label={"Your feedback"} />
      </form>
      <ImageUpload />
    </div>
  ) : null;

export default ModalBodyFeed;
