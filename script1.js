var sound = new Audio();
sound.src = 'song.mp3';
var timer;

 class Alarm{
  
    constructor(){
        console.log('constructur created');
    }
    
    setAlarm(el){
        var time = document.getElementById('alarmTime').valueAsNumber;
        console.log("time"+time);
        if(isNaN(time)){
            alert("Invalid DateTime");
            return;
        }
     
        var alarm = new Date(time);
        console.log(alarm);
        var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
        var duration = alarmTime.getTime() - (new Date()).getTime();
     
        if(duration < 0){
            alert(`please check date and time . Note : Date should not be less than current date` );
            return;
        }
     
        timer = setTimeout(this.initAlarm, duration);
        el.innerHTML = " Cancel Alarm";
        el.setAttribute('onclick', 'obj.cancelAlarm(this);');
        el.setAttribute('class', 'btn btn-danger');
    }
     
     
     cancelAlarm(el){
        el.innerHTML = "Set Alarm";
    //    let  al=document.getElementById('alarmButton');
        el.setAttribute('onclick', 'obj.setAlarm(this);');
        el.setAttribute('class', 'btn btn-success');
        clearTimeout(timer);
    }
     
     initAlarm(){
        sound.loop = true;
        sound.play();
        document.getElementById('alarmButton').style.display = 'none';
        document.getElementById('selectButton').style.display = '';
    }
     
     stopAlarm(){
        sound.pause();
        sound.currentTime = 0;
        document.getElementById('selectButton').style.display = 'none';
        this.cancelAlarm(document.getElementById('alarmButton'));
        document.getElementById('alarmButton').style.display = '';
    }
     
    snoozeAlarm(e){
        this.stopAlarm();
        setTimeout(this.initAlarm, 300000);
        e.innerText = "Cancel Alarm";
        e.setAttribute('onclick', 'obj.cancelAlarm(this)');
    }
 }

let  obj=new Alarm();

