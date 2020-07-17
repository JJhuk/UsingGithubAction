const request = require('request')

const TARGET_URL='https://notify-api.line.me/api/notify'
const TOKEN = '7AxVSvUUOsFki4Lo7y3wRpzYyUyJTnODpPr4973cLOr'

request.post({
    url:TARGET_URL,
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    },
    form: {
        message: '안녕하세요. Line Notify 테스트입니다.',
        stickerId: 52114138
    }
}, (error, response,body) => {
    console.log(body);
})