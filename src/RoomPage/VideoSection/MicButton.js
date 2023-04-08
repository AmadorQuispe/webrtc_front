import { useState } from "react";
import MicButtonImg from '../../resources/images/mic.svg';
import MicButtonOffImg from '../../resources/images/micOff.svg';
import * as webRTCHandler from "../../utils/webRTCHandler";

const MicButton = () => {
    const [isMicMuted, setIsMicMuted] = useState(false);
    const handleMicButtonPresed = () =>{
        webRTCHandler.toggleMic(isMicMuted);
        setIsMicMuted(!isMicMuted);        
    };
    return ( 
        <div>
            <img
                src={isMicMuted ? MicButtonOffImg: MicButtonImg}
                onClick={handleMicButtonPresed}
                className="video_button_image"
                alt=""
            />
        </div>
     );
}
 
export default MicButton;