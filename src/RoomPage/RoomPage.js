import { useEffect } from "react";
import { useSelector } from "react-redux";
import ChatSection from "./ChatSection/ChatSection";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import RoomLabel from "./RoomLabel";
import VideoSection from "./VideoSection/VideoSection";
import * as webRTCHandler from '../utils/webRTCHandler';
import Overlay from "./Overlay";
import "./RoomPage.css";

function RoomPage() {
    console.log('room page')
    const state = useSelector(state => state);
    const { roomId,
        identity,
        isRoomHost,
        showOverlay,
        connectOnlyWithAudio } = state;
    useEffect(() => {
        if (!isRoomHost && !roomId) {
            const siteUrl = window.location.origin;
            window.location.href = siteUrl;
        } else {
            webRTCHandler.getLocalPreviewAndInitRoomConnection(
                isRoomHost, identity, roomId, connectOnlyWithAudio
            );
        }

    }, [])
    return (
        <div className="room_container">
            <ParticipantsSection />
            <VideoSection />
            <ChatSection />
            <RoomLabel roomId={roomId} />
            {showOverlay && <Overlay />}
        </div>
    );
}

export default RoomPage;