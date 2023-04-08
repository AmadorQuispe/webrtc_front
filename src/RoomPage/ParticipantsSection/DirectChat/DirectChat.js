import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ConversationNotChosen } from './ConversationNotChosen';
import { MessagesContainer } from './MessagesContainer';
import { NewMessage } from './NewMessage';


const getDirectChatHistory = (directChatHistory,socketId=null) => {
    if(!socketId || !directChatHistory){
        return [];
    }else{
        const history = directChatHistory.find(h=>h.socketId === socketId);
        return history ?  history.chatHistory : [];
    }
}

export const DirectChat = () => {
    const [messages, setMessages] = useState([]);
    const { activeConversation, directChatHistory,identity } = useSelector(state => state);
    //console.log({ activeConversation, directChatHistory,identity })
    useEffect(() => {
      setMessages(
        getDirectChatHistory(
            directChatHistory,
            activeConversation ? activeConversation.socketId: null
        )
      );
    }, [activeConversation,directChatHistory])
    return (
        <div className='direct_chat_container'>
            <div className='direct_chat_header'>
                <p className='direct_chat_header_paragraph'>
                    {activeConversation ? activeConversation.identity : ''}
                </p>
            </div>
            <MessagesContainer messages={ messages }/>
            <NewMessage 
                activeConversation={activeConversation}
                identity={identity}
            />
            {!activeConversation && <ConversationNotChosen/>}
        </div>
    )
}
