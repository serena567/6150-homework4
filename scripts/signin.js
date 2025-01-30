// 确保页面加载完后才执行脚本
document.addEventListener("DOMContentLoaded", function () {
    // 获取表单和按钮元素
    const signInForm = document.getElementById("signin-form");
    const signInButton = document.getElementById("signin-btn");

    // 为表单绑定提交事件
    signInForm.addEventListener("submit", function (event) {
        event.preventDefault(); // 防止表单默认提交

        // 获取输入的用户名和密码
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // 简单的验证
        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        // 模拟 "Sign In" 操作，实际开发中你可能需要发送请求到服务器进行验证
        if (username === "admin" && password === "password123") {
            alert("Sign In successful! Welcome, " + username + "!");
            // 这里可以重定向到另一个页面或者执行其他操作
        } else {
            alert("Invalid username or password.");
        }
    });
});
