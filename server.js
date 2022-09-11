const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

const { Board, Led } = require("johnny-five");
const board = new Board();
// let isBlinking = false;

let blink, stopblink, blinkTimes;
const msgStatus = {
    msg : '',
    isBlinking : false
}

app.get('/blink/:times', (req, res) => {
    console.log(req.params)
    // res.send("Hellow world!");
    msgStatus.msg = 'Começando a festa...';
    msgStatus.isBlinking = true;
    res.json(msgStatus);
    blinkTimes(Number(req.params.times))
    // blink()
})
app.get('/stopblink', (req, res) => {
    // res.send("Bye!!")
    // res.json({msg: 'Bye', status: isBlinking})
    msgStatus.msg = 'Desligando';
    res.json(msgStatus);
    stopblink()

})

app.listen(3000, () => {
    console.log("Server has started and is listening on port 3000")
})



board.on("ready", () => {
    console.log('Board ready')
    const led = new Led(13);
    
    let timesRun = 0;
    
    blinkTimes = (cycles) => {
        let interval = setInterval(() => {
        led.toggle()
        timesRun += 1;
        console.log('pisca');
        isBlinking = true;
        if (timesRun === (cycles*2) ) {
            clearInterval(interval);
            timesRun = 0;
            
        }
        },1000)
    
    }
    blink = () => {
        led.blink(1000);
    }

    stopblink = () => {
        led.stop()
        led.off()
    }

  });