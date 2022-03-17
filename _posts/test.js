// Super Class
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

Animal.prototype.getInfo = function() {
    return this.name + '가(이) ' + this.sound + ' 소리를 낸다.'
}

function Friends(name, sound) {
    // 명시적 바인딩
    Animal.call(this, name, sound);
}

// Sub Class
Friends.prototype = Object.create(
    Animal.prototype,
)

Friends.prototype.constructor = Friends;

const dog = new Friends('개', '멍멍')
const cat = new Friends('고양이', '야옹')

console.log(dog.getInfo())
console.log(cat.getInfo())

console.log(dog.constructor.name)   // Frineds
console.log(cat.constructor.name)   // Frineds

console.log(dog instanceof Friends) // true
console.log(dog instanceof Animal) // true
