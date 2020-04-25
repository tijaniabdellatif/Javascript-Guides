const free = () => {
    const person = { name: 'amine', notes: [7, 5, 4]};
    const note =person.notes;
    console.log(note);
    var maxValue=Math.max(...person.notes);
    console.log(maxValue);
    delete person.notes;
    person.notes = maxValue;
    console.log(person);
    
}

free();