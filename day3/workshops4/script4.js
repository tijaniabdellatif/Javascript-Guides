const note= () => {
    const student = { name: 'amine', notes: [7, 5, 4]};
   
    var topNote=Math.max.apply(null,student.notes);
    student.notes =topNote;
    console.log(student);

}

note();