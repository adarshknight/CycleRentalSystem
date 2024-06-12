import React, { useState } from 'react';
import './Chatbot.css'; // Import Chatbot styles

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [input, setInput] = useState(''); // State to store user input

  // Function to handle sending a message
  const sendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Simulate bot response (you can replace this with actual API call to a chatbot service)
    setTimeout(() => {
      setMessages([...messages, { text: getBotResponse(message), sender: 'bot' }]);
    }, 500);
  };

  // Function to get bot response based on user input
  const getBotResponse = (userMessage) => {
    // Commands for navigation
    if (userMessage.toLowerCase().startsWith('go to')) {
      const destination = userMessage.substring(6).trim().toLowerCase();
      switch (destination) {
        case 'about':
          return 'Navigating to the About section...'; // You can replace this with actual navigation code
        case 'contact':
          return 'Navigating to the Contact section...'; // You can replace this with actual navigation code
        // Add more cases for other sections as needed
        default:
          return "I'm sorry, I couldn't find that section.";
      }
    } else if (userMessage.toLowerCase().includes('click here')) {
      return 'You clicked on the link. Do you want to go to the Bike Rental page?';
    } else if (userMessage.toLowerCase() === 'yes') 
    
    {
      window.location.href = 'http://localhost:3000/bike-rental';
      return 'Redirecting to the Bike Rental page...';
    } else if (userMessage.toLowerCase() === 'no') {
      return 'Okay, let me know if you need anything else.';
    }

    // Other commands and responses
    switch (userMessage.toLowerCase()) {
      case 'rent a bike':
        return 'Sure! Please visit our Bike Rental page for more information.';
      case 'ride like a local':
        return 'You can explore our Ride Like a Local tours for a unique biking experience.';
      case 'tour packages':
        return 'We offer various tour packages to exciting destinations. Check out our Tours section for more details.';
      default:
        return "I'm sorry, I didn't understand that. How can I assist you?";
    }
  };

  // Function to handle button click
  const handleButtonClick = (option) => {
    sendMessage(option);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <span className="chatbot-title">Paramesh Bot</span>
        {/* Add chatbot icon */}
        <img className="chatbot-image" src="https://t4.ftcdn.net/jpg/04/46/38/69/360_F_446386956_DiOrdcxDFWKWFuzVUCugstxz0zOGMHnA.jpg" alt="Paramesh Bot" />
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-options">
        <button onClick={() => handleButtonClick('Rent a bike')}>Rent a bike</button>
        <button onClick={() => handleButtonClick('Ride like a local')}>Ride like a local</button>
        <button onClick={() => handleButtonClick('Tour packages')}>Tour packages</button>
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage(input);
              setInput('');
            }
          }}
        />
        <button onClick={() => sendMessage(input)}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
