import { SERVICE_KEY } from 'react-native-dotenv';

export const sendReport = async payload => {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await
    fetch(`http://localhost:3000/api/v1/reports?serviceKey=${SERVICE_KEY}`, options);
  if(!response.ok) {
    throw new Error('Error: There was a problem submitting your report.');
  }
  const report = await response.json();
  return report
};
