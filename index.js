function* genFunc(){
    yield '☆'
    console.log('First log!')
    yield '★'
    console.log('second log!')
    return 'Done'
}

// const genObj = genFunc()
// console.log(genObj.next())
// console.log(genObj.next())
// console.log(genObj.next())
// console.log(genObj.next())

function* getEmoji(){
    yield 'a'
    yield 'b'
    yield 'c'
}

const getObj = getEmoji()
// console.log([...getObj])

for(let item of getObj){
    console.log(item)
}

const array = [1, 2, 3]
const string = 'hey'
const object = {name: "ji"}
function regularFunction(){
  return 'I am a basic function'
}

function* generatorFunction(){
    return 'I am a generator function'
}

const generatorObject = generatorFunction()
console.log(array[Symbol.iterator])
console.log(string[Symbol.iterator])
console.log(generatorObject[Symbol.iterator])

object[Symbol.iterator] = function* (){
    yield this
}

object[Symbol.iterator]
console.log([...object])
for(let item of object) console.log(item)

object[Symbol.iterator] = function* () {
    yield Object.keys(this)
}

console.log([...object])

const emojis = ['1', '2']

function* genFunc(){
    yield '3'
    yield* emojis
    yield '4'
}

const genObj = genFunc()
console.log([...genObj])

object[Symbol.iterator] = function* (){
    yield* Object.keys(this)
}
console.log([...object])

function* generatorFunction(){
    const second = yield 'first!'
    console.log(second)
    return 'all done!'
}

const generaObj = generatorFunction()
console.log(generaObj.next())
console.log(generaObj.next())

const bookClubs = [
    {
    name: "The cool club",
    clubMembers: [
        {
            name: "John Doe",
            books: [
                {id: "hs891", title: "A perfect"},
                {id: "ey812", title: "A good book"}
            ]
        }
    ],
},
{
    name: "the better club",
    clubMembers: [
        {
            name: "Jane doe",
            books: [
                {id: "u8291", title: "a great book"},
                {id: "p9201", title: "a nice book"}
            ]
        }
    ]
}
]

function* iterateBooks(books){
    for(let i = 0; i < books.length; i++){
        yield books[i]
    }
}

function* iterateMembers(members){
    for(let i = 0; i < members.length; i++){
        const clubMember = members[i]
        yield* iterateBooks(clubMember.books)
    }
}

function* iterateBookClubs(bookClubs){
    for(let i = 0; i < bookClubs.length; i++){
        const bookClub = bookClubs[i]
        yield* iterateMembers(bookClub.clubMembers)
    }
}

const it = iterateBookClubs(bookClubs)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

function findBook(id){
    const genObj = iterateBookClubs(bookClubs)
    let result = genObj.next()

    while(!result.done){
        if(result.value.id === id){
            return result.value
        } else {
            result = genObj.next()
        }
    }
}

console.log(findBook('ey812'))