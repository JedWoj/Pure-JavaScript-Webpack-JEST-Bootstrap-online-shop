export class opinionsSlider {

    constructor() {
        this.dots = document.querySelectorAll('.opinions__dot');
        this.txtBox = document.querySelector('.opinions__text');
        this.dotsHandler();
        this.automaticChange();
        this.active = 2;
    }

    automaticChange(option) {
        console.log(option);
        if (option !== 'stop') {
        const interval = setInterval(() => {
            this.switchContent(this.active.toString());
            this.active < 5 ? this.active++ : this.active = 1;
        }, 4000)
        }

        if (option === 'stop') {
            clearInterval(interval);
            const newInterval = setInterval(() => {
                this.switchContent(this.active.toString());
                this.active < 5 ? this.active++ : this.active = 1;
            }, 4000)
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
        this.changeDotColor(num);
        this.active = num;
        switch (num) {
            case '1':
                this.changeText(`"Welcome," he said. "Welcome to a new year at Hogwarts! Before we begin
                our banquet, I would like to say a few words. And here they are: Nitwit!
                Blubber! Oddment! Tweak!`);
                this.active = 1;
                break;
            case '2':
                this.changeText(`"Mad?" said Percy airily. "He's a genius! Best wizard in the world! But
                he is a bit mad, yes. Potatoes, Harry?"`);
                this.active = 2;
                break; 
            case '3':
                this.changeText(`"Oh, you know Quirrell already, do you? No wonder he's looking so
                nervous, that's Professor Snape. He teaches Potions, but he doesn't want
                to -- everyone knows he's after Quirrell's job. Knows an awful lot about
                the Dark Arts, Snape."`)
                this.active = 3;
                break;
            case '4':
                this.changeText(`"So we've just got to try on the hat!" Ron whispered to Harry. "I'll
                kill Fred, he was going on about wrestling a troll."`);
                this.active = 4;
                break;
            case '5':
                this.changeText(`"We can talk later, Karkaroff!" spat Snape. "Potter! What are you doing?" "Clearing up my armadillo bile, Professor," said Harry innocently, straightening up and showing Snape the sodden rag he was holding.`);
                this.active = 5;
                break;   
        }
        this.automaticChange('stop');
    }

    dotsHandler() {
        this.dots.forEach(dot => dot.addEventListener('click', (e) => {
            const target = e.target.closest('.opinions__dot');
            if(!target) return
            this.switchContent(target.dataset.num)
        }))
    }
}