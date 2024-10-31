$(document).ready(){function {
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
  const getByPeriod = (period) => schedule.filter(item => item.period === period)[0];
  if (letter !== "G") {
    for (let i = 0; i < 3; i++) {
      let rotatedIndex = (i + letterIndex) % 4; // keeps numbers wrapping around 1-4
      build.push(getByPeriod(rotatedIndex + 1));
    }
  } else {
    build = [getByPeriod(3), getByPeriod(4), getByPeriod(7)];
  }
  build.push(getByPeriod(0)); // Always add schedule[0] (lunch) in the middle
  if (letter !== "G") {
    for (let ii = 0; ii < 2; ii++) {
      let latterRotatedIndex = (ii + letterIndex) % 3; // Rotates through [0, 1, 2]
      let periodIndex = [5, 6, 7][latterRotatedIndex]; // Map indices to periods [5, 6, 7]
      build.push(getByPeriod(periodIndex));
    }        
  } else {
    build.push(getByPeriod(5));
    build.push(getByPeriod(6));
  }
  tableBody.find(".remove").remove();
  // Loop through the schedule array and create table rows
  build.forEach(item => {
      let row = `
          <tr class="remove">
              <td>${item.period}</td>
              <td>${item.name || "N/A"}</td>
              <td>${item.teacher || "N/A"}</td>
              <td>${item.room || "N/A"}</td>
          </tr>
      `;
      tableBody.append(row);
  });
}
)
}}