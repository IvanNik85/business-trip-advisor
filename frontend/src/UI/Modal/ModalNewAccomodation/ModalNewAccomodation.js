import React from "react";
import "./ModalNewAccomodation.scss";
import InputField from '../../../components/Login/Form/Input';
import '../../../components/Login/Form/Input';
import TextArea from '../../TextArea/TextArea';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import '../../ImageUpload/ImageUpload.scss';
import Selection from "../../../components/Select/Selection";

 const ModalNewAccomodation = (props) => {
    return (
        <div className='modalNewAccomodation'>
             <div  className="formAndImg">
                <form >
                    <label htmlFor='hotelURL'>Enter property URL</label>
                        <InputField
                            type={"text"}
                            name={"hotelURL"}
                            placeholder={"https://www..."}
                            classes={"inputNameFullWidth"}
                    />
                    <label htmlFor='hotelURL'>Enter hotel name</label>
                    <InputField
                        type={"text"}
                        name={"hotelURL"}
                        placeholder={"name, city, country"}
                        classes={"inputNameFullWidth"}
                    />
                    <div className='starHotel'>
                    <Selection 
                          options={["Hotel", "Hostel", "Apartments"]}
                            setOption={props.setOption}
                            classes={"modalSelect"}
                    />
                    <div>
                    <i className="fas fa-star"></i>
                  
                    <Selection 
                          options={["", "1", "2" ,"3" ,"4" ,"5"]}
                            setOption={props.setOption}
                            classes={"modalSelect"}
                    />
                    </div>
                    </div>
                    <div className='twoItems'>
                        <div className='imageContainer'>
                            <label htmlFor={"imageUpload"}>
                            <a>
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
                        </div>
                        <TextArea
                        placeholder={'hotel description:'}
                        />
                    </div>
                    <div className='twoItems'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9541676458994!2d20.40913961500631!3d44.80212267909863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f92363f1881%3A0x550c0955fccddcc2!2sSavski+nasip+7%2C+Beograd+11070!5e0!3m2!1sen!2srs!4v1561017703799!5m2!1sen!2srs"   frameBorder="0" style={{width:'40%',height:'100%',paddingTop:'1em'}} allowFullScreen></iframe>
                        <div className='address'>
                            <label htmlFor='address'>Address</label>
                            <InputField
                                type={"text"}
                                name={"address"}
                                // placeholder={"address"}
                                classes={"inputName"}
                            />
                            <label htmlFor='city'>City</label>
                            <InputField
                                type={"text"}
                                name={"city"}
                                // placeholder={"city"}
                                classes={"inputName"}
                            />
                            <label htmlFor='country'>Country</label>
                            <InputField
                                type={"text"}
                                name={"country"}
                                // placeholder={"country"}
                                classes={"inputName"}
                            />
                        </div>
                    </div>
                    <Button classes='button'><span>SAVE </span></Button>
                 </form>
            </div> 
        </div>
    )
}
export default ModalNewAccomodation;
