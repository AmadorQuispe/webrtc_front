import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import JoinRoomInputs from "./JoinRoomInputs";
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';
import { setConnectOnlyWithAudio, setIdentity, setRoomId } from '../store/actions'
import ErrorMessage from "./ErrorMessage";
import JoinRoomButtons from "./JoinRoomButtons";
import { useNavigate } from "react-router-dom";
import { getRoomExits} from '../utils/api'

const JoinRoomContent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector(state => state, shallowEqual);
    const { isRoomHost, connectOnlyWithAudio } = state;
    const [ roomIdValue, setRoomIdValue ] = useState('');
    const [ nameValue, setNameValue ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState(null)
    const handleConnectOnlyWithAudio = ()=>{
        dispatch(setConnectOnlyWithAudio(!state.connectOnlyWithAudio))
    }
    const handleJoinRoom = async () => {
        dispatch(setIdentity(nameValue));
        if(isRoomHost){
            createRoom();
        }else{
            await joinRoom();
        }
    };
    const joinRoom = async () =>{
        const responseMessage =  await getRoomExits(roomIdValue);
        const { roomExist,full} = responseMessage;
        if(roomExist){
            if(full){
                setErrorMessage('Meeting is full. Please try again later.');
            }else{
                dispatch(setRoomId(roomIdValue));
                navigate('/room');
            }
        }else{
            setErrorMessage('Meeting not found. Check your meeting id.');
        }
    }
    const createRoom = () =>{
        navigate('/room');
    }
    return (
        <>
            <JoinRoomInputs
                roomIdValue={roomIdValue}
                setRoomIdValue={setRoomIdValue}
                nameValue={nameValue}
                setNameValue={setNameValue}
                isRoomHost={ isRoomHost }
            />
            <OnlyWithAudioCheckbox
                connectOnlyWithAudio={ connectOnlyWithAudio }
                setConnectOnlyWithAudio = {handleConnectOnlyWithAudio}
            />
            <ErrorMessage errorMessage={errorMessage}/>
            <JoinRoomButtons
                handleJoinRoom={ handleJoinRoom }
                isRoomHost = { isRoomHost }
            />
        </>
    );
};




export default JoinRoomContent;