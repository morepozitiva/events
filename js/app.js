const app = Vue.createApp({
    data() {
        return {
            email: null,
            telegramToken: '1667452098:AAELpYOL1P2qRIYJYUr91mK7wrnaLVTc6fo',
            botID: '1667452098',
            chatID: '180739492'
        }
    },
    methods:{
        subscribe() {
            console.log(this.email);
            fetch(`https://api.telegram.org/bot${this.telegramToken}/sendMessage`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    chat_id: this.chatID,
                    text: `Отправлен запрос на подпистку от ${this.email}`
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });
        }
    }
})

app.component('countdown', {
    props: ['todate'],
    data() {
        return {
            till: Date.parse(this.todate),
            days: 0,
            hours: 0,
            mins: 0,
            secs: 0,
            intervalID: null
        }
    },
    mounted() {
        this.intervalID = setInterval(() => {
           let now = new Date(),
               diff = Math.floor(((this.till - now.getTime()) / 1000));

            if (diff < 0) {
                clearInterval(this.intervalID);
           } else {

            this.days = Math.floor(diff / (60 * 60 * 24))
                diff = diff - this.days * (60 * 60 * 24)
            
            this.hours = Math.floor(diff / (60 * 60))
                diff = diff - this.hours * (60 * 60)

            this.mins = Math.floor(diff / 60)
                diff = diff - this.mins * 60

            this.secs = diff
           }

            

            //    console.log(diff);
        }, 1000)
    },
    template: `
        <ul class="countdown">
            <li class="countdown__item">
            <div class="countdown__num">{{ days }}</div>
            <div class="countdown__text">days</div>
            </li>
            <li class="countdown__item">
            <div class="countdown__num">{{ hours }}</div>
            <div class="countdown__text">hours</div>
            </li>
            <li class="countdown__item">
            <div class="countdown__num">{{ mins }}</div>
            <div class="countdown__text">minutes</div>
            </li>
            <li class="countdown__item">
            <div class="countdown__num">{{ secs }}</div>
            <div class="countdown__text">seconds</div>
            </li>
        </ul>
    `
});

app.mount('#app');

// Vue.createApp(App).mount('#app');