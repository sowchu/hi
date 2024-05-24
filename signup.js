document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value;

    const poolData = {
        UserPoolId: 'us-east-1_abTTBaq31', // replace with your user pool ID
        ClientId: '5977q2t9i2732s2tvrjctgtccr' // replace with your app client ID
    };
    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    const attributeList = [];
    const dataEmail = {
        Name: 'email',
        Value: email
    };
    const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    userPool.signUp(username, password, attributeList, null, function(err, result) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        const cognitoUser = result.user;
        console.log('User name is ' + cognitoUser.getUsername());
        // Redirect to the create/update Lambda page
        window.location.href = 'index.html';
    });
});