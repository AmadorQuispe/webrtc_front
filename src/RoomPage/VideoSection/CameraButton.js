import { useState } from 'react';
import CameraButtonImg from '../../resources/images/camera.svg';
import CameraButtonOffImg from '../../resources/images/cameraOff.svg';
import * as webRTCHandler from "../../utils/webRTCHandler";
const CameraButton = () => {
    const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false);
    const handleCameraButtonPresed = () => {
        webRTCHandler.toggleCamera(isLocalVideoDisabled);
        setIsLocalVideoDisabled(!isLocalVideoDisabled);
    }


    return ( 
        <div className='video_button_container'>
            <img
                src={isLocalVideoDisabled? CameraButtonOffImg : CameraButtonImg}
                className="video_button_image"
                alt=""
                onClick={handleCameraButtonPresed}
            />
            
        </div>
     );
}
 
export default CameraButton;