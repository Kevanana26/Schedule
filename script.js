$(document).ready(){
  const scheduleUrl = 'https://api.npoint.io/5e0bbb5d32a86ba8f280'


  const bellSchedule = {
    1: { start: '8:24 AM', end: '9:31 AM' },
    2: { start: '9:36 AM', end: '10:43 AM' },
    3: { start: '10:48 AM', end: '11:55 AM' },
    4: { start: '12:41 PM', end: '1:48 PM' },
    5: { start: '1:53 PM', end: '3:00 PM' }
  }
$('#submitDay').on('click', function() {
  const selectedDay = $('#dayInput').val().toUpperCase()




  if (!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(selectedDay)) {
    alert('Please enter a valid day (A-G)')
    return
  }
$.ajax(){
  url = 'https://api.npoint.io/5e0bbb5d32a86ba8f280'
  const aDayClasses = getClassesForDay('A');
console.log(aDayClasses);
const bDayClasses = getClassesForDay('B');
console.log(bDayClasses);
const cDayClasses = getClassesForDay('C');
console.log(cDayClasses);
const dDayClasses = getClassesForDay('D');
console.log(dDayClasses);
const eDayClasses = getClassesForDay('E');
console.log(eDayClasses);
const fDayClasses = getClassesForDay('F');
console.log(fDayClasses);
const gDayClasses = getClassesForDay('G');
console.log(gDayClasses);
}
}
)
}