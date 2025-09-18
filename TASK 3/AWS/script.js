document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-button');
    const apiResponseDiv = document.getElementById('api-response');

    // Replace this with your GCP API's external IP address.
    const apiEndpoint = 'http://YOUR_GCP_API_ENDPOINT:80'; 

    fetchButton.addEventListener('click', async () => {
        apiResponseDiv.innerHTML = '<p>Fetching data...</p>';
        
        try {
            const response = await fetch(apiEndpoint);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Display the data from the API
            apiResponseDiv.innerHTML = `<p><strong>Success!</strong> Data received from GCP:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
            
        } catch (error) {
            console.error('Error:', error);
            apiResponseDiv.innerHTML = `<p><strong>Error:</strong> Could not connect to the API.</p><p>Check the console for details.</p>`;
        }
    });
});