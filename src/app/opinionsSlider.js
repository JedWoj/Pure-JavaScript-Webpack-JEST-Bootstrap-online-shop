export class OpinionsSlider {

    constructor() {
        this.dots = document.querySelectorAll('.opinions__dot');
        this.txtBox = document.querySelector('.opinions__text');
        this.active = 2;
        this.checkUrl();
    }

    checkUrl() {
        const url = window.location.href;
        if (url === 'http://localhost:8080/index.html' || url === 'http://localhost:8080/') {
            this.dotsHandler();
            this.automaticChange();
        };
    }

    automaticChange(option) {
        const interval = setInterval(() => {
            this.switchContent(this.active.toString());
            this.changeDotColor(this.active);
            this.active < 5 ? this.active++ : this.active = 1;
        }, 4000)

        if (option === 'stop') {
            clearInterval(interval);
        }
    }

    changeText(txt) {
        this.txtBox.textContent = txt;
    }

    changeDotColor(num) {
        this.dots.forEach(dot => {
            dot.classList.remove('opinions__dot--active');
        })
        this.dots[num - 1].classList.add('opinions__dot--active');
    }

    switchContent(num) {
        switch (num) {
            case '1':
                this.changeText(`"Welcome," he said. "Welcome to a new year at Hogwarts! Before we begin
                our banquet, I would like to say a few words. And here they are: Nitwit!
                Blubber! Oddment! Tweak!`);
                break;
            case '2':
                this.changeText(`"Mad?" said Percy airily. "He's a genius! Best wizard in the world! But
                he is a bit mad, yes. Potatoes, Harry?"`);
                break; 
            case '3':
                this.changeText(`"Oh, you know Quirrell already, do you? No wonder he's looking so
                nervous, that's Professor Snape. He teaches Potions, but he doesn't want
                to -- everyone knows he's after Quirrell's job. Knows an awful lot about
                the Dark Arts, Snape."`)
                break;
            case '4':
                this.changeText(`"So we've just got to try on the hat!" Ron whispered to Harry. "I'll
                kill Fred, he was going on about wrestling a troll."`);
                break;
            case '5':
                this.changeText(`"We can talk later, Karkaroff!" spat Snape. "Potter! What are you doing?" "Clearing up my armadillo bile, Professor," said Harry innocently, straightening up and showing Snape the sodden rag he was holding.`);
                break;   
        }
    }

    dotsHandler() {
        this.dots.forEach(dot => dot.addEventListener('click', (e) => {
            const target = e.target.closest('.opinions__dot');
            if(!target) return
            this.switchContent(target.dataset.num)
            this.changeDotColor(target.dataset.num);
            this.automaticChange('stop');
            this.active = Number(target.dataset.num);
        }))
    }
}