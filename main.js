document.getElementById('create-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const functionName = document.getElementById('create-function-name').value;
    // Add your create Lambda logic here
    console.log('Creating Lambda:', functionName);
});

document.getElementById('update-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const functionName = document.getElementById('update-function-name').value;
    const roleName = document.getElementById('update-role-name').value;
    // Add your update Lambda logic here
    console.log('Updating Lambda:', functionName, 'with role', roleName);
});