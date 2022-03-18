// Super Class
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    getInfo() {
    return this.name + '가(이) ' + this.sound + ' 소리를 낸다.'
    }
}

class Friends extends Animal {
    constructor(name, sound) {
        super(name, sound);      // 부모의 생성자 함수 호출
    }
}

const dog = new Friends('개', '멍멍')
const cat = new Friends('고양이', '야옹')

console.log(dog.getInfo())
console.log(cat.getInfo())

console.log(dog.constructor.name)   // Frineds
console.log(cat.constructor.name)   // Frineds

console.log(dog instanceof Friends) // true
console.log(dog instanceof Animal) // true