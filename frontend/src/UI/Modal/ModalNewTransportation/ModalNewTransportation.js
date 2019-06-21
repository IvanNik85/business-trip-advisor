import React from 'react';
import './ModalNewTransportation.scss';
import '../../../components/Login/Form/Input';
import Button from '../../Button/Button';
import Selection from "../../../components/Select/Selection";
import InputField from '../../../components/Login/Form/Input';

const ModalNewTransportation = (props) => {

    return (
        <div>
             <form >
                    <label htmlFor='hotelURL'>City from</label>
                        <InputField
                            type={"text"}
                            name={"hotelURL"}
                            classes={"inputNameFullWidth"}
                    />
                    <label htmlFor='hotelURL'>City to</label>
                    <InputField
                        type={"text"}
                        name={"hotelURL"}
                        classes={"inputNameFullWidth"}
                    />
                    <label htmlFor='hotelURL'>Select transportation type</label>
                    <Selection 
                          options={["Bus", "Airplane", "Taxi"]}
                            setOption={props.setOption}
                            classes={"modalSelect"}
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
                    <Button />
                 </form>
        </div>
    )
}
export default ModalNewTransportation;