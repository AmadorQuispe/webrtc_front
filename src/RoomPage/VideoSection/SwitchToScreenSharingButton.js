import { useState } from 'react';
import SwitchImg from '../../resources/images/switchToScreenSharing.svg';
import LocalScreenSharingPreview from './LocalScreenSharingPreview';
import * as webRTCHandler from '../../utils/webRTCHandler';
const constraints = {
    audio: false,
    video: true,
}
const SwitchToScreenSharingButton = () => {
    const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
    const [screenSharingStream, setScreenSharingStream] = useState(false);

    const handleScreenShareToggle = async () => {
        if (!isScreenSharingActive) {
            let stream = null;
            try {
                stream = await navigator.mediaDevices.getDisplayMedia(constraints);

            } catch (error) {
                console.log('Error occurred when trying to get an access to screen share stream');

            }
            if (stream) {
                setScreenSharingStream(stream);
                webRTCHandler.toggleScreenShare(isScreenSharingActive,stream);
                setIsScreenSharingActive(true);
            } else {
                webRTCHandler.toggleScreenShare(isScreenSharingActive);
                setIsScreenSharingActive(false);
                screenSharingStream.getTracks().forEach(t => t.stop());
                setScreenSharingStream(null);
            }
        }
        setIsScreenSharingActive(!isScreenSharingActive);
    }
    return (
        <>
            <div className='video_button_container'>
                <img
                    src={SwitchImg}
                    onClick={handleScreenShareToggle}
                    className='video_button_image'
                    alt=""
                />
            </div>
            {isScreenSharingActive && (
                <LocalScreenSharingPreview stream={screenSharingStream}/>
            )}
        </>
    );
}

export default SwitchToScreenSharingButton;