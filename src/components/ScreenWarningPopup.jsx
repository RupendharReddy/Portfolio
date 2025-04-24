import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';

const ScreenWarningPopup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 430 && width < 1024) {
      setIsModalVisible(true);
    }
  }, []);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Responsive Notice"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleOk}
      okText="Got it!"
    >
      <p>This site is optimized for mobile and desktop views.</p>
      <p>For the best experience, please use a mobile device or a PC.</p>
    </Modal>
  );
};

export default ScreenWarningPopup;
