import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, sendReply, markAsSeen } from '../store/actions/contactActions';
import { List, Badge, Typography, Button, Input, message as antdMessage } from 'antd';
import '../styles/messagePage.css';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const MessagePage2 = () => {
  const dispatch = useDispatch();
  const { messages, status, error } = useSelector((state) => state.contact);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleSelectMessage = (msg) => {
    setSelectedMessage(msg);
    if (!msg.seen) {
      dispatch(markAsSeen(msg._id));
    }
  };

//   const handleSendReply = () => {
//     if (selectedMessage && replyText.trim()) {
//       dispatch(sendReply(selectedMessage._id, replyText));
//       setReplyText('');
//       antdMessage.success("Reply sent!");
//     }
//   };
const handleSendReply = async () => {
    if (selectedMessage && replyText.trim()) {
      try {
        const updatedMessage = await dispatch(sendReply(selectedMessage._id, replyText));
        antdMessage.success("Reply sent!");
        setSelectedMessage(updatedMessage); // now it has latest replies
        setReplyText('');
      } catch (error) {
        antdMessage.error("Failed to send reply",error);
      }
    }
  };
  const sortedMessages = [...messages].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  if (status === 'loading') return <p>Loading messages...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="message-page-container">
      {/* Left - Message List */}
      <div className="message-list">
        <Title level={4}>Messages</Title>
        <List
          itemLayout="horizontal"
          dataSource={sortedMessages}
          renderItem={(msg) => (
            <List.Item
              className={`message-item ${selectedMessage?._id === msg._id ? 'active' : ''}`}
              onClick={() => handleSelectMessage(msg)}
            >
              <List.Item.Meta
                title={
                  <>
                    {msg.name}
                    <Badge
                      style={{ marginLeft: 10 }}
                      status={msg.seen ? 'success' : 'processing'}
                      text={msg.seen ? 'Seen' : 'Unseen'}
                    />
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>

      {/* Right - Message Content */}
      <div className="message-detail">
        {selectedMessage ? (
          <>
            <Title level={4}>Message from {selectedMessage.name}</Title>
            <Paragraph>{selectedMessage.message}</Paragraph>

            <Title level={5}>Replies:</Title>
            {selectedMessage.replies?.length > 0 ? (
              selectedMessage.replies.map((r, i) => (
                <Paragraph key={i} style={{ marginLeft: '1rem', fontStyle: 'italic' }}>
                  ↳ {r.text}
                </Paragraph>
              ))
            ) : (
              <Paragraph type="secondary">No replies yet.</Paragraph>
            )}

            <TextArea
              rows={4}
              placeholder="Write your reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              style={{ marginTop: '1rem' }}
            />
            <Button type="primary" onClick={handleSendReply} style={{ marginTop: '0.5rem' }}>
              Send Reply
            </Button>
          </>
        ) : (
          <Paragraph>Select a message to view its details</Paragraph>
        )}
      </div>
    </div>
  );
};

export default MessagePage2;
