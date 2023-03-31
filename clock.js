/* Rotation of numbers */
const number = () =>{
    var n = document.getElementsByClassName("number")
    var str = ""
    for (let i = 1; i<=n.length; i++)
    {
        str = str + `.clock .num${i}{
            rotate: ${(i)*(360/n.length)}deg;
        }
        .clock .num${i} span{
            rotate: ${-(i)*(360/n.length)}deg;
        }
        `
    }
    return str
}
var stored1 = number()
document.head.innerHTML += `<style>${stored1}</style>`

/* Hands rotation */
setInterval(()=> {
    var t = new Date()
    var th = t.getHours()
    var tm = t.getMinutes()
    var ts = t.getSeconds()
    // console.log(`${th}:${tm}:${ts}`)
    sec.style.transform = `rotate(${(ts*6)-90}deg)`
    min.style.transform = `rotate(${((tm*6)-90)+((ts/10)*1)}deg)`
    hr.style.transform = `rotate(${((th*30)-90)+((tm/13)*6)}deg)`
}, 1000)

/* Current hour highlight */
setInterval(()=> { 
    var h = (new Date()).getHours()
    var num = document.getElementsByClassName("number")
    for (let i = 0; i < (num.length); i++)
    {
        if ((h%12) === i+1){
            num[i].classList.add("color")
        }
        else{
            num[i].classList.remove("color")
        }
    }
    /* AM or PM */
    if ((h/12)>=1)
    {
        meridian.innerHTML = "PM"
    }
    else
    {
        meridian.innerHTML = "AM"
    }
}, 1000)

/* Adding between lines */
const lines = () => {
    
    for(let i=1; i<=60; i++)
    {
        if (i%5===0)
        {

        }
        else
        {
            clock.innerHTML += `<div class="number" id="line${i}">|</div>`
            document.getElementById(`line${i}`).style.rotate = `${i*6}deg`
            document.getElementById(`line${i}`).style.fontSize = "8px"
        }
    }
}
lines()


