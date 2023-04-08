import React, { useEffect, useRef } from 'react';

const SingleMessage = ({ isAuthor, messageContent }) => {
    const messageStyling = isAuthor
        ? "author_direct_message"
        : "receiver_direct_message";

    const containerStyling = isAuthor
        ? "direct_message_container_author"
        : "direct_message_container_receiver";

    return (
        <div className={containerStyling}>
            <p className={messageStyling}>{messageContent}</p>
        </div>
    )
};


export const MessagesContainer = ({ messages }) => {
    const scrollRef = useRef();
    useEffect(() => {
        if (scrollRef) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])
    return (
        <div className='direct_messages_container'>
            {messages.map(m =>
            (<SingleMessage
                messageContent={m.messageContent}
                isAuthor={m.isAuthor}
                key={`${m.identity}-${m.messageContent}`}
            />)
            )}
            <div ref={scrollRef}></div>
        </div>
    )
}
