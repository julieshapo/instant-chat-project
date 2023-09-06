import { UserAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();

  return (
    <div>
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} alt={`${message.name}'s avatar`} />
          </div>
        </div>
        <div className="chat-header">{message.name}</div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
