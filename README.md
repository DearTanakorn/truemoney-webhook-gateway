# Truemoney webhook gateway

Repo นี้สำหรับใช้ในการศึกษา ข้อมูลที่ได้รับมาจาก Webhook จะถูกเก็บในตัวแปร
หาก Restart process ไปแล้วจะไม่สามารถนำข้อมูลกลับมาใช้ใหม่ได้

หากต้องการความช่วยเหลือสามารถติดต่อได้ที่ [Discord](https://discord.deartanakorn.com) ในช่อง #repo-support

## Requirement

- Node.js 14.0.0 หรือใหม่กว่า (เทสบน Node.JS 16 ไม่มีปัญหา)
- JWT Secret ของ Webhook

## Prerequisites

1. ก่อนจะเริ่มการติดตั้ง ต้องมี Server ที่สามารถเข้าถึงได้จากด้านนอก
   (ในส่วนนี้ไม่รู้ว่าทาง Truemoney รองรับการส่ง HTTP หรือ port อื่น ๆ นอกจาก 443 หรือไม่)
2. หลังจากได้ Server แล้วให้ทำการตั้งค่าลิ้งค์ Webhook ไปที่ URL ของท่านแล้วตามด้วย /webhook เช่น http://example.com/webhook
<img src="https://user-images.githubusercontent.com/43856376/171544028-77e2a972-312f-439b-9d1c-053397fc73af.jpg" height="500">

4. เมื่อตั้งค่าลิ้งค์เสร็จเรียบร้อยแล้ว ให้นำ Secret ที่ได้รับหลังจากนั้นมาใส่ใน .env ตรง JWT_SECRET
<img src="https://user-images.githubusercontent.com/43856376/171543646-18566f5b-4ab2-4403-96d5-5d228cf58051.png" height="500">


## Installation

1. ทำการ Clone repo นี้ลงไปใน Server ที่ต้องการ
2. ติดตั้ง Package ต่าง ๆ ของ Node.JS
   สำหรับ NPM
   ```sh
   npm install
   ```
   สำหรับ Yarn
   ```
    yarn install
   ```
3. เปลี่ยนชื่อจาก '.env.example' เป็น '.env'
4. แก้ไข JWT_SECRET ใน `.env` ที่ได้รับหลังจากตั้งค่า Webhook เสร็จเรียบร้อยแล้ว
   ```
    JWT_SECRET=jwt_token
   ```

## How to run

1. เปิด CMD หรือ Bash ขึ้นมา
2. พิมพ์คำสั่ง `node app.js`

## Contributing

สำหรับใครที่ต้องการแก้ไขหรือมีข้อเสนอต่าง ๆ สามารถเปิด Issue หรือ Pull request มาได้เลยนะครับ เนื่องจากไม่ค่อยได้เขียน Repo เป็นสาธารณะมากสักเท่าไหร + ค่อนข้างเมา ๆ ตอนเขียนด้วย ฮ่า ๆ

## Supporting

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/R6R7D1A6E)
