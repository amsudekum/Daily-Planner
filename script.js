// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let currentDate = dayjs();
let currentHour = dayjs().hour();
let hour9 = $('#hour-9 > textarea');
let hour10 = $('#hour-10 > textarea');
let hour11 = $('#hour-11 > textarea');
let hour12 = $('#hour-12 > textarea');
let hour1 = $('#hour-1 > textarea');
let hour2 = $('#hour-2 > textarea');
let hour3 = $('#hour-3 > textarea');
let hour4 = $('#hour-4 > textarea');
let hour5 = $('#hour-5 > textarea');


console.log(currentHour)

$('#currentDay').text(currentDate.format('MMM D, YYYY'));

$('document').ready(() => {

  $('.saveBtn').on('click', (event) => {
    event.preventDefault()
    saveTask();
  });

  checkTime(9);
  checkTime(10);
  checkTime(11);
  checkTime(12);
  checkTime(1);
  checkTime(2);
  checkTime(3);
  checkTime(4);
  checkTime(5);

  displayTasks();

});

function checkTime(target) {

    let targetEl = $('#hour-' + target)
    if (currentHour == target) {
      targetEl.removeClass('neutral')
      targetEl.removeClass('past')
      targetEl.removeClass('future')
      targetEl.addClass('present');
    } else if (currentHour < target) {
      targetEl.removeClass('neutral')
      targetEl.removeClass('present');
      targetEl.removeClass('past')
      targetEl.addClass('future');
    } else if (currentHour > target) {
      targetEl.removeClass('future');
      targetEl.removeClass('neutral')
      targetEl.removeClass('present')
      targetEl.addClass('past')
      
    } 

    console.log(targetEl)
  }; 
// }



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
