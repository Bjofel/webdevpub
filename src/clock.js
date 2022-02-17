export class Clock { 
    constructor(hour, min) {
        this._hour = hour
        this._min = min
        this._alarm = false
        this._alarmHour;
        this._alarmMin   
        this._larm = false     
        if (this._hour >= 24 || this._hour < 0) {
          console.log("Error: hour value must be >= 0 and < 24")
        }  if (this._min > 60 || this._min < 0) {
          console.log("Error: minute value must be >= 0 and < 60")
        }
    }    
    get time() {
      if (this._hour < 10 && this._min < 10) {
        return ("0" + this._hour + ":0" + this._min)
      } 
      if (this._hour < 10 && this._min >= 10) {
        return ("0" + this._hour + ":" + this._min)
      }
      if (this._hour >= 10 && this._min < 10) {
        return (this._hour + ":0" + this._min)
      }
      if (this._hour >= 10 && this._min >= 10) {
        return (this._hour + ":" + this._min)
      }
      /* return this._hour + ":" + this._min */
      
    }
    tick() {
      this._min += 1
      if (this._min >= 60) {
        this._hour += 1
        this._min -= 60
      }
      if (this._hour === 24) {
        this._hour -= 24
      }
      if (this._hour < 10 && this._min < 10) {
        console.log("0" + this._hour + ":0" + this._min)
      } 
      if (this._hour < 10 && this._min >= 10) {
        console.log("0" + this._hour + ":" + this._min)
      }
      if (this._hour >= 10 && this._min < 10) {
        console.log(this._hour + ":0" + this._min)
      }
      if (this._hour >= 10 && this._min >= 10) {
        console.log(this._hour + ":" + this._min)
      }
      if (this._alarmHour == this._hour && this._alarmMin == this._min && this._alarm) {
        console.log("Alarm!!!")
        this._larm = true        
      }
    } 
    setAlarm(hour, min) {
      this._alarmHour = hour
      this._alarmMin = min
      this._alarm = true    
      }
    activateAlarm() {
      this._alarm = true
    }
    deactivateAlarm() {
      this._alarm = false
    }
    get alarmIsActive() {
      return this._alarm
    }  
    
  }