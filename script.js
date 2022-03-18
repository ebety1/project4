function the_time(){
    var hour = document.getElementById('hour');
    var date = document.getElementById('date');
    
 

    var data = new Date()

    hour.innerHTML = data.getHours()+':' + data.getMinutes()+':' + data.getSeconds()
    date.innerHTML = data.getMonth()+1+"-"+data.getDate()+"-"+data.getFullYear()
}
setInterval(the_time,1000);
onload = the_time();


function setItem(){
    var myColor =document.getElementById('myColor').value
    localStorage.setItem('save',myColor)
    document.getElementById('insidebox').style.background = localStorage.getItem('save')
    document.getElementById('body').style.background  = localStorage.getItem('save')
}
function setColor(){
    document.getElementById('myColor').value = localStorage.getItem('save');
    document.getElementById('insidebox').style.background = localStorage.getItem('save')
    document.getElementById('body').style.background  = localStorage.getItem('save')

}
setInterval(setColor,100)