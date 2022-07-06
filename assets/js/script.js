//set today's date
var today = moment().format('dddd, MMMM YYYY')
var displayDate = document.getElementById('currentDay')
displayDate.innerHTML = today
var hour = moment().format('HH')
//var hour = 09
console.log(hour)

//compare hour to current time
$('.time').each(function () {
	//ex: gets the id of hour-09 and splits it to just 09
	var timeDiv = $(this).attr('id').split('-')
	console.log(timeDiv[1])
	//compares hour to timeDiv and add classes accordingly
	if (hour == timeDiv[1]) {
		console.log('present')
		$(this).addClass('present')
		$(this).children('.description').addClass('white-text')
	} else if (hour < timeDiv[1]) {
		console.log('future')
		$(this).addClass('future')
	} else if (hour > timeDiv[1]) {
		console.log('past')
		$(this).addClass('past')
	} else {
		console.log('There has been an error in comparing hour to timeDiv')
	}
})
$('.saveButton').click(function (e) {
	e.preventDefault()
	//gets the textArea value (could also use document.getelementid but tried using jquery instead to practice)
	var value = $(this).siblings('.time-block').val()
	//ex: gets the id of hour-9 and splits it to just 9
	var time = $(this).parent().attr('id').split('-')[1]
	localStorage.setItem(time, value)
})
//get items from localstorage and putting them inside their timeblocks
document.getElementById('09text').value = localStorage.getItem('09')
for (let i = 10; i <= 17; i++) {
	document.getElementById(i + 'text').value = localStorage.getItem(i)
}
