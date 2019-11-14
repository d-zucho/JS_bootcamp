const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habbits to work on',
    body: 'Work out more, meditate'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]


// ---- sort method

const sortNotes = function (notes) {
    notes.sort(function (a, b) { // a and b will be some objects in notes
        // if a should come firts, returns -1
        // if b should come first, returns 1
        // if a and b are same, returns 0
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }

    })
}

sortNotes(notes)

console.log(notes)





// will search for specified title in notes
// if it exists, uses findIndex to return the specific note
const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}


// if we want to look for index so we can remove or alter, we use FINDINDEX



// if looking for item directly, FIND is a good choice
const findOtherNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}


// USING FILTER

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}




// const filteredNotes = notes.filter(function (note, index) {
//     const isTitleMatch = note.title.toLowerCase().includes('ne')
//     const isBodyMatch = note.body.toLowerCase().includes('ne')
//     return isTitleMatch || isBodyMatch
// })