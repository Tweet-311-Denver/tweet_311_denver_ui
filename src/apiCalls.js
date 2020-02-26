import { SERVICE_KEY } from 'react-native-dotenv';

export const sendReport = async payload => {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  let url = `https://tweet311denver-service.herokuapp.com/api/v1/reports?serviceKey=${SERVICE_KEY}`;
  const response = await
    fetch(url, options);
  if(!response.ok) {
    throw new Error(`${response.status}: There was a problem submitting your report.`);
  }
  const report = await response.json();
  return report
};
