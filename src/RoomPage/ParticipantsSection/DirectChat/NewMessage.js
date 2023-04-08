import React, { useState } from 'react'
import sendMessageButton from '../../../resources/images/sendMessageButton.svg'
import * as wss from '../../../utils/wss'
export const NewMessage = ({ activeConversation, identity }) => {
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        setMessage(e.target.value);
    }

    const handleKeyPressed = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    }

    const sendMessage = () => {
        wss.sendDirectMessage({
            receiverSocketId: activeConversation.socketId,
            identity: identity,
            messageContent: message
        });        
        setMessage('');
    }

    return (
        <div className='new_message_container new_message_direct_border'>
            <input
                className='new_message_input'
                value={message}
                onChange={handleTextChange}
                placeholder='Type your message'
                type='text'
                onKeyDown={handleKeyPressed}
            />
            <img
                className='new_message_button'
                src={sendMessageButton}
                onClick={sendMessage}
            />

        </div>
    )
}
