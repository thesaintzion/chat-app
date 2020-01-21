const chatForm = document.querySelector('#chat-form');
const messagesCon = document.querySelector('#messages');
let name = 'Saint Lion';
const dateSent = new Date();
let body = document.querySelector('#body');

console.log('date', dateSent);
let typingText = document.querySelector(".typing-text");


chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (body.value === "") {
        alert('Please fill in the box')
    } else {
        if (messagesCon) {
            const demo = `
        <div class=" col-11 chat-box">
            <div class="chat-box-inner">
        <h4>${name}<span> ${dateSent}</span></h4>
                <div class="card">
                    <div class="card-body">
                        <p>${body.value}</p>
                    </div>
                </div>
            </div>
        </div>
        `;

            const demo2 = `
        <div class=" col-11 chat-box">
            <div class="chat-box-inner">
        <h4>Solape <span> ${dateSent}</span></h4>
                <div class="card">
                    <div class="card-body">
                        <p>${body.value}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
            let you = document.createElement('div');
            you.classList.add('you', 'row');
            you.innerHTML = demo2;

            let me = document.createElement('div');
            me.classList.add('me', 'row');
            me.innerHTML = demo;
            let success = messagesCon.appendChild(me);
            setTimeout(function() {
                typingText.style.visibility = 'visible';
            }, 1000);

            if (success) {
                window.scrollTo(0, document.body.scrollHeight);
                setTimeout(function() {
                    messagesCon.appendChild(you);
                    window.scrollTo(0, document.body.scrollHeight);
                    typingText.style.visibility = 'hidden';
                }, 5000);
            }
        } else {
            alert('nothig')
        }
    }
});



// socket connection
const socket = io.connect('http://localhost:3500/');

socket.on('chat', function(data) {
    console.log(data);
});