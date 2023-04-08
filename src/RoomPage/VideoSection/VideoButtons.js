import { useSelector } from "react-redux";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";
import SwitchToScreenSharingButton from "./SwitchToScreenSharingButton";

const VideoButtons = () => {
    const { connectOnlyWithAudio } = useSelector( state => state );
    
    return ( 
        <div className="video_buttons_container">
            <MicButton/>
            {!connectOnlyWithAudio && <CameraButton/>}
            <LeaveRoomButton/>
            {!connectOnlyWithAudio && <SwitchToScreenSharingButton/>}
        </div>
     );
}
 
export default VideoButtons;