import { useDispatch, useSelector } from "react-redux";
import { setActiveConversation } from "../../store/actions";


const SingleParticipant = ({ identity, lastItem,participant, socketId }) => {
    const dispatch = useDispatch();
    const handleOpenActiveChatbox = () => {
        if(participant.socketId !== socketId){
            dispatch(setActiveConversation(participant))
        }
    }
    return (
        <>
            <p className="participants_paragraph" onClick={handleOpenActiveChatbox}>{identity}</p>
            {!lastItem && <span className="participants_separator_line"></span>}
        </>
    )
};


const Participants = () => {
    const state = useSelector(state => state);    
    const { participants,socketId } = state;
    return (
        <div className="participants_container">
            {participants.map((participant, i) => (
                <SingleParticipant
                    key={participant.identity}
                    lastItem={participants.length === i + 1}
                    participant={participant}
                    identity={participant.identity}
                    socketId={socketId}
                />
            ))}
        </div>
    );
}

export default Participants;