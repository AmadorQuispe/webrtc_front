import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { setIsRoomHost } from '../store/actions';
import JoinRoomTitle from './JoinRoomTitle';
import JoinRoomContent from './JoinRoomContent';

import './JoinRoomPage.css';

const JoinRoomPage = ()=> {
    const dispatch = useDispatch();

    const state = useSelector( state => state.isRoomHost );
    
    const search = useLocation().search;

    useEffect(() => {
      const isRoomHost = new URLSearchParams(search).get('host');
      if(isRoomHost){
        dispatch(setIsRoomHost(true));
      }
    }, [])
    

    return ( 
        <div className="join_room_page_container">
            <div className="join_room_page_panel">
                <JoinRoomTitle isRoomHost={ state }/>
                <JoinRoomContent/>
            </div>
        </div>
     );
}


export default  JoinRoomPage ;