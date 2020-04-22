var a = Number(prompt("a ="));
var b = Number(prompt("b ="));
var c = Number(prompt("c ="));
 
// résoud x selon lme signe de delta
function resoudreX ( a, b, c, callback )
{
    // calcul du delta
    var delta = Math.pow(b, 2) - 4 * a * c;
    var x = [];
    if ( delta > 0 )
    { // deux solutions
        x[ 0 ] = (-b - Math.sqrt(delta)) / 2 * a;
        x[ 1 ] = (-b + Math.sqrt(delta)) / 2 * a;
    }
    else if ( delta < 0 )
    { // pas de solution
    }
    else if ( deta = 0 )
    { // une seule solution
        var x = (-b + Math.sqrt(delta)) / 2 * a;
    }
 
    if ( callback )
    { // si il y a une callback de definie
        callback ( x );
    }
    else
    { // sinon
        return ( x );
    }
};
 
// appel à la fonction de resolution avec un callback
resoudreX ( a, b, c, function( data )
{
    var resultat = "";
    switch ( data.length )
    {
        case 0:
        {
            resultat = "delta est négatif, il n'y a donc pas de solution.";
            break;
        }
        case 1:
        {
            resultat = "Il y a une solution unique: x=" + data[ 0 ];
            break;
        }
        case 2:
        {
            resultat = "Il y a deux solutions: X1= " + data[ 0 ] + "et X2 = " + data[ 1 ];
            break;
        }
    }
 
    document.write(resultat);
    alert(resultat);
});

console.log( resoudreX ( a, b, c ) );
