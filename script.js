const url = 'http://localhost:3000'
const input = document.querySelector('#blink-number')
function makeBlink(){
    const route = `http://localhost:3000/blink/${input.value}`;
    fetch(route)
    .then( (response) => {
        console.log("The LED connected to your Arduino is blinking!")  
        const body = response.json();
        body.then((data) => {
            console.log(data);
            input.value = '';
        })
    })
}
function stopBlink(){
    console.log(input.value);
    const url = 'http://localhost:3000/stopblink';
    fetch(url)
    .then( (response) => {
        console.log("The LED connected to your Arduino has stopped blinking!")

        const body = response.json();
        body.then ( (data) => {
            console.log(data);
            input.value = '';
        })
    })
}