let app = new Vue({

    el: "#app",

    data: {

        clockstuff: '00:00:00',
        alarmstuff: '',
        alarminput: '',
        alarmstate: 'off'

    },

    created: function () {

        let self = this;
        self.clockstuff = self.setTime();

        setInterval(function() {
            self.clockstuff = self.setTime();
            self.checkAlarm();

        }, 1000);


    },

    methods: {

        setTime: function () {

            let now = new Date();

            let hours = now.getHours();
            if (hours < 10) {
                hours = '0' + hours;
            }

            let minutes = now.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            let seconds = now.getSeconds();
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            return hours + ':' + minutes + ':' + seconds;


        },

        checkAlarm: function () {
          if (this.alarmstate=="off") {
            if (this.clockstuff==this.alarmstuff) {
              alarm.style.display= 'block';
              this.alarmstate='on'

              display.style.border = '1px solid red';



          } else {
            alarm.style.display= 'none';
          }
        }

         if (this.alarmstate=="on") {
           alarm.style.display= 'block';
         }


      },

        alarmOff: function () {
          this.alarmstate='off';
          alarm.style.display='none';
          setalert.style.display='none';
          display.style.border='none';


        },

        setAlarm: function () {
          setalert.style.display='block';

        }




    }




});
