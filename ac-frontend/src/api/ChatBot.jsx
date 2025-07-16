import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://beta.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://beta.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '6856b070d9a1b4e219c4a999');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

  return null; // This component does not render any JSX
};

export default ChatBot;
