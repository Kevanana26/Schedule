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



//is if someone fucks up (somehow)
  if (!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(selectedDay)) {
    alert('Please enter a valid day (A-G)')
    return
  }
  const letterIndex = letter.charCodeAt(0) - 'A'.charCodeAt(0); // assigns each letter a number
  console.log(`Letter is ${letterIndex}.`) // A=0, B=1, C=2...
  const schedule = response.schedule;
  const tableBody = $("#schedule-table tbody");
  let build = [];
  const getByPeriod = (period) => schedule.filter(item => item.period === period)[0];
  if (letter !== "G") {
    for (let i = 0; i < 3; i++) {
      let rotatedIndex = (i - letterIndex) % 4; // keeps numbers wrapping around 1-4
      console.log(`Pre-ternary rotatedIndex ${rotatedIndex}.`)
      rotatedIndex < 0 ? rotatedIndex += 4 : null; // makes numbers wrap around negative
      console.log(`Post-ternary rotatedIndex ${rotatedIndex}.`)
      build.push(getByPeriod(rotatedIndex + 1));
    }
  } else {
    build = [getByPeriod(3), getByPeriod(4), getByPeriod(7)];
  }
  build.push(getByPeriod(0)); // Always add schedule[0] (lunch) in the middle
  if (letter !== "G") {
    for (let ii = 0; ii < 2; ii++) {
      let latterRotatedIndex = (ii - letterIndex) % 3; // Rotates through [0, 1, 2]
      let periodIndex = latterRotatedIndex + 5; // Map indices to periods [5, 6, 7]
      periodIndex < 5 ? periodIndex += 3 : null; // makes numbers wrap around negative
      build.push(getByPeriod(periodIndex));
    }        
  } else {
    build.push(getByPeriod(5));
    build.push(getByPeriod(6));
  }
  console.log(build); // checking array to see if all is well
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
},
error: function (jqXHR, textStatus, errorThrown) {
  console.error("Error loading data:", textStatus, errorThrown); // Log error details
  alert("Failed to load schedule data. Check the console for more details.");
}
});
}
// jQuery dropdown (W3schools)
function dropdownAppear() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
  }
}
}
}