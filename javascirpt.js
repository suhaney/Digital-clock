let body = document.getElementsByTagName("body");
console.log(body);

let clock = document.getElementById("clock");
console.log(clock);

let setting = document.getElementById("icons");
 console.log(setting);

let toggle = document.getElementById("toggle-btn");
 console.log(toggle);

let words = document.getElementById("format");
console.log(words);

function format(){
let now = new Date();
let month = document.getElementById("month");
let monthnames = ["January" , "February" , "March" , "April" , "May" , "June"
 , "July " , "August" , "September" , "October" , "November" , "December"]; 
 let index = now.getMonth();
 month.innerHTML = monthnames[index];
 let day = document.getElementById("day");
let daynames = ["sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday"
 , "Saturday"]; 
 let today = now.getDay();
day.innerHTML = daynames[today];
date.innerHTML= now.getDate();
let hours = document.getElementById("hours");
let min = document.getElementById("min");
let seconds = document.getElementById("seconds"); 
 let hour = now.getHours();
 hour = hour %12;
 hour = hour === 0 ? 12:hour;
 hours.innerHTML = hour;
 min.innerHTML = now.getMinutes();
seconds.innerHTML = now.getSeconds();
date.innerHTML =  now.getDate();

let ampm =  document.getElementById("ampm");
let time = now.getHours();
 if(time < 12){
    ampm.innerHTML = "AM";
 }
 if(time >= 12){
    ampm.innerHTML = " PM";
 }
let year = document.getElementById("year");
 year.innerHTML =  now.getFullYear();
}
 format();
setInterval(format , 1000);

let time2 = document.createElement("span");
time2.setAttribute("id" ,"tim");
toggle.addEventListener("click" , ()=>{
function updatetime(){
let tim = document.getElementById("tim");
setting.append(time2);
 time2.innerHTML = new Date();
 words.style.textDecoration = "line-through";
 words.style.color = "gray";
}
setInterval( updatetime , 1000);
updatetime();
});
const quotes = [
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function updateQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = `${randomQuote.quote}`;
    authorElement.textContent = `-${randomQuote.author}`;
}
updateQuote();
setInterval(updateQuote, 10000);

let usercolor = document.getElementById("text-color");
console.log(usercolor);
  let bgcolor = document.getElementById("background-color");
 console.log(bgcolor);
 let font = document.getElementById("bgofdoc");
   console.log(font);
   let form_container = document.getElementsByClassName("form-container")[0];
   console.log(form_container);
 let background_img = document.getElementById("background-image");
 console.log(background_img);

  function updatecolor(){
   clock.style.color = usercolor.value; 
 }
 usercolor.addEventListener("input" , updatecolor);

 function updatebgcolor(){
    clock.style.backgroundColor = bgcolor.value;
 }
 bgcolor.addEventListener("input" , updatebgcolor);

 function fontupdate(){
    document.body.style.background = font.value;
 }
  font.addEventListener("input" , fontupdate);

 updatecolor()
 updatebgcolor();
 fontupdate();