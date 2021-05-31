class AnimalZoo {
    constructor(sound)
    {
        this.sound = sound;
    }

    speak(something)
    {
        const words = something.split(" ");
        
        const space  = words.map((el)=>  el + " " + this.sound);
        return space.join(" ");
    }
}

const lion = new AnimalZoo("roar");
const tiger = new AnimalZoo("grrr");

console.log(lion.speak("I'm a lion"));
console.log(tiger.speak("Lions suck"));


document.write("<pre>" + lion.speak("I'm a lion") + "</pre>" + "<br>" + "<pre>" + tiger.speak("Lions suck") + "<pre>" );
