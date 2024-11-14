let actionVerb = prompt('Name a Adjective')
let userAge = prompt('Name a Animal')
let objName = prompt('Give me a name')
let storyName = prompt('Give me a name')
let areaPlace = prompt('Give me a place')
let objNoun = prompt('Give me a activity')
let objAdj = prompt('Give me another Adjective')
let objNoun1 = prompt('Give me a Noun')
let objVerb = prompt('Give me a place')
let objPlace = prompt('Give me a item')
let objAddj = prompt('Give me another Adjective')
let objCre = prompt('Give me a Creature')
let objNoun3 = prompt('Give me another noun')
let objAdddj = prompt('Give me another Adjective')
let objPlnoun = prompt('Give me a Plural Noun')


console.log(actionVerb)
console.log(userAge)
console.log(objName)
console.log(storyName)
console.log(areaPlace)
console.log(objNoun)
console.log(objPlace)
console.log(objNoun1)
console.log(objVerb)
console.log(objAddj)
console.log(objCre)
console.log(objNoun3)
console.log(objAdddj)
console.log(objPlnoun)





let myStory = `One day, a ${actionVerb} ${userAge} named ${objName} decided to escape from the ${storyName}. It had been stuck in a ${areaPlace} for hours, and it was ready for some ${objNoun} action! It grabbed its trusty ${objPlace} and began to ${objNoun1} toward the ${objVerb}.

Suddenly, it came across a ${objAddj} ${objCre} who warned, “You must solve the riddle of the ${objNoun3} if you want to get past me!”

With a ${objAdddj} smile, ${userAge} replied, “I’ll solve it, no problem!” And just like that, the ${userAge} solved the riddle, defeated the ${objCre}, and made its way to freedom—leaving behind a trail of ${objPlnoun} as it went.

`
document.getElementById('story').innerHTML= myStory;