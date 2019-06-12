import React, { Component } from 'react'

import Overlay from '../../components/Login/Overlay/Overlay'
import OverlayPanel from '../../components/Login/Overlay/OverlayPanel'
import Form from '../../components/Login/Form/Form';
import Button from '../../components/UI/Button/Button'

import "./Home.scss";



export default class Home extends Component {
    state = {
        leftPanel : false,
        rightPanel : false

    };


    setRightActive = ()=> {
        this.setState(prevState=>( {rightPanel : !prevState.rightPanel  } ) )
    }
    render() {
       
        return (
            <div  className = {[ 'container', this.state.rightPanel? 'right-panel-active': ''].join(" ")} >
                <Form classes= 'sign-up-container'
                title='Create Account'
                buttontext='Sign Up'/>
                <Form  classes= 'sign-in-container'
                title='Sign in'
                buttontext='Sign In'/>

                <Overlay>
                    <OverlayPanel classes='overlay-left'
                    title='Welcome Back!'
                    text='To keep connected with us please login with your personal info'
                    ><Button classes='ghost' clicked={this.setRightActive}>Sign In</Button> </OverlayPanel>
                    <OverlayPanel classes='overlay-right' 
                    title='Hello, Friend!'
                    text='Enter your personal details and start journey with us'>
                    <Button classes='ghost' clicked={this.setRightActive}>Sign Up</Button>
                        </OverlayPanel>
                   
                </Overlay>
                
            </div>
        )
    }
}
