// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let currentDate = dayjs();
let hour9 = $('#hour-9 > textarea');
let hour10 = $('#hour-10 > textarea');
let hour11 = $('#hour-11 > textarea');
let hour12 = $('#hour-12 > textarea');
let hour1 = $('#hour-1 > textarea');
let hour2 = $('#hour-2 > textarea');
let hour3 = $('#hour-3 > textarea');
let hour4 = $('#hour-4 > textarea');
let hour5 = $('#hour-5 > textarea');


$('#currentDay').text(currentDate.format('MMM D, YYYY'));

$('document').ready(() => {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on('click', (event) => {
    event.preventDefault()
    saveTask();
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  displayTasks();

  //
  // TODO: Add code to display the current date in the header of the page.
});

function checkTime() {
  //compare the timed schedule block to CurrentTime and change class accordingly. If schedule is less than currentTime, change color to grey, etc.  
}

function saveTask() {
  localStorage.setItem("hours", getUserInput());
}

const getUserInput = () => {
  return JSON.stringify({
    hour9: hour9.val(),
    hour10: hour10.val(),
    hour11: hour11.val(),
    hour12: hour12.val(),
    hour1: hour1.val(),
    hour2: hour2.val(),
    hour3: hour3.val(),
    hour4: hour4.val(),
    hour5: hour5.val(),
  });
}

const getTaskData = () => {
  let taskData = localStorage.getItem("hours");
  if(!taskData) {
    taskData = '[]';
  }
  return JSON.parse(taskData);
}

function displayTasks() {
  const tasks = getTaskData();
  hour1.text(tasks.hour1);
  hour2.text(tasks.hour2);
  hour3.text(tasks.hour3);
  hour4.text(tasks.hour4);
  hour5.text(tasks.hour5);
  hour9.text(tasks.hour9);
  hour10.text(tasks.hour10);
  hour11.text(tasks.hour11);
  hour12.text(tasks.hour12);
}
