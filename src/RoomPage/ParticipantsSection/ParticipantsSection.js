import Participants from "./Participants";
import { DirectChat } from "./DirectChat/DirectChat";

const ParticipantsSection = () => {
    return (
        <div className="participants_section_container">
            <div className="participants_label_container">
                <p className="participants_label_paragraph">PARTICIPANTS</p>
            </div>
            <Participants/>
            <DirectChat/>
        </div>
    );
}

export default ParticipantsSection;