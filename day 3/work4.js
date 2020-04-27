function eba() {
    const person = { name: 'amine', notes: [7, 5, 4,2] },
        note = person.notes;
    // console.log(note);
    const max = Math.max(...note);
    // console.log(max);
    delete person.notes;
    person.notes = max;
    console.log(person)
}

eba();