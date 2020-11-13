const date = document.getElementById("date");
let options = { weekday: 'long', month: 'long', day: 'numeric' };
let today = new Date();
let hrs = today.getHours();
let nextTaskId = 1;
let greet;
date.innerHTML = today.toLocaleDateString('en-us', options);

if (hrs < 12)
    greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening';

document.getElementById('timegreeting').innerHTML =
    '<b>' + greet + '</b>';

const list = document.getElementById("tasks-container");
function addHabit(habit, id) {
    const text = `<div class="task-holder">
        <p class="text">${habit}
        <i class="fa fa-trash-alt toright" job="delete" id="${id}"></i>
        </p>
    </div>
    <div class="checkbox-holder">
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
</div>`
    const position = "beforeEnd"
    list.insertAdjacentHTML(position, text);
    container.push({
        name: habit,
        id: id
    })
}

const input = document.getElementById("input-habit");
document.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        addNewHabit();
    }

})

function addNewHabit() {
    const habit = input.value;
    if (habit) {
        addHabit(habit, nextTaskId++);
    }
    input.value = "";
}
