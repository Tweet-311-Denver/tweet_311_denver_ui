export const sendReport = async payload => {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await
    fetch('https://tweet311denver-service.herokuapp.com/api/v1/locations', options);
  if(!response.ok) {
    throw new Error('Error: There was a problem submitting your report.');
  }
  const id = await response.json();
  return id
};
