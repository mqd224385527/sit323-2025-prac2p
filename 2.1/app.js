const express = require('express');
const app = express();
const port = 3000;

// 从 'public' 目录提供静态文件
app.use(express.static('public'));

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
