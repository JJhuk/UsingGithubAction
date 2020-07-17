/*import fs from 'fs';
const errorMessage = fs.readFile('errorLog.txt','utf-8', function(err,data){
    console.log(data);
})
*/

import request from 'requset';

const TARGET_URL='https://notify-api.line.me/api/notify'
const TOKEN = '7AxVSvUUOsFki4Lo7y3wRpzYyUyJTnODpPr4973cLOr'

request.post({
    url:TARGET_URL,
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    },
    form: {
        message: `안녕하세요 내용은 입니다.`,
    }
}, (error, response,body) => {
    console.log(body);
})