 let timeleft;
 let timerInterval;
 let isRunning = false ;

 const timerDisply = document.getElementById('time');
 const startBtn = document.getElementById('start-btn');
 const stopBtn = document.getElementById('stop-btn');


   const startTimer = (duration) => {
   let timer = duration;

     timerInterval = setInterval(() =>{
     const minutes = parseInt(timer / 60, 10);
     const seconds = parseInt(timer % 60, 10 );
     const displyMinutes =  minutes < 10 ? '0' + minutes : minutes;
     const displySeconds = seconds < 10 ? '0' + seconds : seconds;

     timerDisply.textContent = displyMinutes + ':' + displySeconds;

     if(--timer < 0){
         clearInterval(timerInterval);
         timerDisply.textContent = 'Breath Out'

         setTimeout( () => {
            timerDisply.textContent = 'Breath In'
            startTimer(timeleft);
         }, 3000)
     }

   }, 1000);
}
const stopTimer = () => {
  clearInterval(timerInterval);
  timerDisply.textContent = 'Breath In';
  isRunning = false;
}

 startBtn.addEventListener('click', () => {
    if( !isRunning){
      timeleft = 10;
      startTimer(timeleft);
      isRunning = true;
    }
 })

 stopBtn.addEventListener('click', () => {
    stopTimer();
    isRunning = false;
 })