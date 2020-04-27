

const note= () => {
    const stuDent = { name: 'amine', notes: [7, 5, 4]};

    var topNote=Math.max.apply(null,stuDent.notes);
    stuDent.notes =topNote;
    console.log(stuDent);

}

note(); 