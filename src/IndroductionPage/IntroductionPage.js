import React, { useEffect } from 'react';
import logo from '../resources/images/logo.png';
import ConnectingButtons from './ConnectingButtons';
import { useDispatch } from 'react-redux';
import { setIsRoomHost} from '../store/actions'
import './IntroductionPage.css'
const IntroductionPage = ()=> {
    const dispatch = useDispatch();
    

    useEffect(() => {
      //setIsRoomHostAction(false);
      dispatch(setIsRoomHost(false))
    }, [])
    
    return (  
        <div className='introduction_page_container'>
            <div className='introduction_page_panel'>
                <img src={logo} className ='introduction_page_image'/> 
                <ConnectingButtons/> 
            </div>
        </div>
    );
}



export default IntroductionPage;