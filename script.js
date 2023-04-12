// https://docs.google.com/spreadsheets/d/e/2PACX-1vSz0iaiIsLxijvhQTLHBFwVLv0KLCVTm2fPsji77hcvQxC1i6bI64nVJ55rKUSvIcM5FSrsLoaP7p4T/pub?gid=0&single=true&output=csv

// https://spreadsheets.google.com/feeds/list/1rRXbPEz4EwhMH_wpm3d-B3mezBDRQUHboARxlFM8otM/od6/public/values?alt=json
// https://docs.google.com/spreadsheets/d/e/feeds/list/1rRXbPEz4EwhMH_wpm3d-B3mezBDRQUHboARxlFM8otM/od6/public/values?alt=json


/* 
const getResource = async (url) => {
    const res = await fetch(url);              

    if(!res.ok) {                              //  проверяем на ошибку в запросе с помощью св-в промиса
        // создаем объект ошибки и throw - это выкинуть ее в консоль
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);   //  св-во status - статус к-ый вернул нам сервер(200, 404, 500 и др)
    }
    
    return await res.json();              //  тут промис трансформируется из JSON в объект
};

getResource('https://script.google.com/macros/s/AKfycbybt3cFUux13jTCULikFepK_8rSs3nIwVYqmvE1jc-6uLIHVj330e4X0qAhm0dkNJaEPQ/exec')
    .then(data => console.log(data)); */


// POST request to Google Sheets
// https://script.google.com/macros/s/AKfycbymNYj3DS67MJW7eGzZpTOCusdbGTyuJh42yok3t6Cd09jDIX98oLEO781Z1JnYkwG1/exec


/*     fetch('https://script.google.com/macros/s/AKfycbymNYj3DS67MJW7eGzZpTOCusdbGTyuJh42yok3t6Cd09jDIX98oLEO781Z1JnYkwG1/exec', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({name: 'Alex', phone: 322, id: 1})
    })
    .then(response => response.json())
    .then(json => console.log(json)); */

    fetch('https://script.google.com/macros/s/AKfycbymNYj3DS67MJW7eGzZpTOCusdbGTyuJh42yok3t6Cd09jDIX98oLEO781Z1JnYkwG1/exec', {
        method: "POST",
        mode: 'no-cors',
        headers: {
            'Content-type': 'text/plain'
        },
        body: 'Hello World'
    });