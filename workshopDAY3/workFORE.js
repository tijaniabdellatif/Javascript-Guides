//workshop "4"

let person={
    name:'amin',
    notes:[5,6,3,20],

};
function Affich()
    {
       var maxValue=Math.max(...person.notes);
       return maxValue;

    }
var topnote=Affich();
function retu()
{
    person.topNote=topnote;
    delete person.notes;
    console.log(person);
}
retu();