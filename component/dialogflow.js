// dialogflow.js

import { SessionsClient } from '@google-cloud/dialogflow';

const projectId = 'YOUR_PROJECT_ID'; // Replace 'YOUR_PROJECT_ID' with your Dialogflow project ID
const sessionId = 'YOUR_SESSION_ID'; // Replace 'YOUR_SESSION_ID' with a unique session ID

// Creates a new session client
const sessionClient = new SessionsClient();

// Function to detect intent using Dialogflow API
export const detectIntent = async (message) => {
  try {
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode: 'en-US',
        },
      },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    return result.fulfillmentText;
  } catch (error) {
    console.error('Error detecting intent:', error);
    throw new Error('Failed to detect intent');
  }
};
