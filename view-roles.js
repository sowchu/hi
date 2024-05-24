document.getElementById('view-roles-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const functionName = document.getElementById('search-function-name').value;
    try {
        const response = await fetch('https://<API_GATEWAY_ENDPOINT>/getRoleID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('idToken')
            },
            body: JSON.stringify({ functionName })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        document.getElementById('role-id-result').innerText = `Role ID: ${result.roleID}`;
    } catch (error) {
        document.getElementById('role-id-result').innerText = `Error: ${error.message}`;
    }
});