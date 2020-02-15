// express モジュールのインスタンス作成
const express = require('express');
const app = express();
// パス指定用モジュール
const path = require('path');
// /api/index.js で定義されたミドルウェア
const api = require('./api/');

// 8080番ポートで待ちうける
app.listen(8080, () => {
  console.log('Running at Port 8080...');
});

// APIルーティング用ミドルウェアを/apiに設定
app.use('/api/', api);

// 静的ファイルのルーティング
app.use(express.static(path.join(__dirname, 'public')));

// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});
