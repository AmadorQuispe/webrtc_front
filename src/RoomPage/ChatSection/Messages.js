import { useSelector } from 'react-redux'

const Message = ({ author, content, someAuthor, messageCreatedByMe }) => {
    const alignClass = messageCreatedByMe
        ? 'message_align_right'
        : 'message_align_left';
    const authorText = messageCreatedByMe
        ? 'You'
        : author;
    const contentAdditionalStyles = messageCreatedByMe
        ? 'message_right_styles'
        : 'message_left_styles';
    return (
        <div className={`message_container ${alignClass}`}>
            {!someAuthor && <p className='message_title'>{authorText}</p>}
            <p className={`message_content ${contentAdditionalStyles}`}>
                {content}
            </p>
        </div>
    )
}
export const Messages = () => {    
    const {messages} = useSelector( state => state );
    
    return (
        <div className='messages_container'>
            {messages.map((message, i) => {
                const sameAuthor = i>0 && message?.identity === messages[i-1]?.identity
                return (
                    <Message
                        key={`${message.content}${i}`}
                        author={message.identity}
                        content={message.content}
                        someAuthor={sameAuthor}
                        messageCreatedByMe={message.messageCreatedByMe}
                    />
                )
            })}
        </div>
    )
}
