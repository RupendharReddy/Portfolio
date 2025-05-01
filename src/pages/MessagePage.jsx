// src/pages/MessagePage.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, sendReply } from '../store/actions/contactActions';

const MessagePage = () => {
  const dispatch = useDispatch();
  const { messages, status, error } = useSelector((state) => state.contact);
  const [replyText, setReplyText] = useState('');
  const [selectedMessageId, setSelectedMessageId] = useState(null);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleSendReply = () => {
    if (selectedMessageId && replyText) {
      dispatch(sendReply(selectedMessageId, replyText));
      setReplyText('');
    }
  };

  if (status === 'loading') return <p>Loading messages...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Contact Messages</h2>
      {messages.map((msg) => (
        <div key={msg._id}>
          <p>
            <strong>{msg.name}</strong>: {msg.message}
          </p>
          {msg.replies.map((r, idx) => (
            <p key={idx} style={{ marginLeft: '20px' }}>
              ↳ {r.text}
            </p>
          ))}
          <button onClick={() => setSelectedMessageId(msg._id)}>Reply</button>
        </div>
      ))}

      {selectedMessageId && (
        <div>
          <textarea
            rows="4"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button onClick={handleSendReply}>Send Reply</button>
        </div>
      )}
    </div>
  );
};

export default MessagePage;
