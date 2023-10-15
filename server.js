const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // 포트 설정

// 정적 파일을 제공하기 위해 React 앱 빌드 폴더를 사용합니다.
app.use(express.static(path.join(__dirname, 'build')));

// 모든 경로에서 React 앱을 서빙합니다.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});