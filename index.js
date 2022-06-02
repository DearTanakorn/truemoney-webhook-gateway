require('dotenv').config();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
const url = process.env.URL || 'http://localhost:3000';

const express = require('express');
const app = express();

// Set express to accept reverse proxy
app.set('trust proxy', true);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const jwt = require('jsonwebtoken');
const transactions = [];

app.post('/webhook', (req, res) => {
  if (!req.body.message) return res.send(400);

  // verify jwt
  jwt.verify(req.body.message, process.env.JWT_SECRET, (err, decoded) => {
    if (err || !decoded) return res.status(401).json({ message: 'Invalid Secret!' });

    transactions.push(decoded);
    res.status(200).send();
  });

  // หากไม่ต้องการ verify jwt สามารถ comment ด้านบนและ uncomment ด้านล่างได้เลยครับ
  // transactions.push(jwt.decode(req.body.message));
  // res.status(200).send();
});

app.get('/', (_, res) => {
  let response = '';
  for (let x of transactions) {
    if (x.server) return;
    response += `รับโอนเงินจากเบอร์ ${x.sender_mobile}\nจำนวน ${(x.amount / 100).toFixed(2)} บาท\nวันที่ทำรายการ ${new Date(x.received_time).toLocaleString('th-TH')}\nข้อความ ${x.message ? x.message : '-'}\n`;
  }
  return res.send(response);
});

app.all('*', (_, res) => res.status(404).send());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) return res.status(400).send();
  console.error(err);
  res.status(500).send();
});

app.listen(port, host, () => {
  console.log(`Listening on (${host}:${port})`, url);
});
