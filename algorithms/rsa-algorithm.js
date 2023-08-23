 
  /**
   * 
   * @param {int} x 
   * @returns is prime or not
   * check if a number is prime
   */
  const isPrime = (x) => {

    for(i=2;i<=Math.sqrt(x);i++){

        if( x % i === 0){

            console.log('number is not a prime number');
            return 0;
        }
    }

    console.log('x is prime');
    return 1;
   }

    
    /**
     * 
     * @param {int} x 
     * @param {int} y 
     * @returns pgcd
     *   pgcd (a,b) {
     *               a si b= 0
     *               pgcd(b,a mod b)
     *         }
     * 
     * Since b (18) is not equal to 0, we move to the else block.
    
      - We calculate a % b (48 % 18 = 12) and make a recursive call with arguments b (18) and a % b (12).
      - we again enter the else block with b (12) not equal to 0.
      - We calculate a % b (18 % 12 = 6) and make another recursive call with arguments b (12) and a % b (6).
      - Entering the else block again with b (6) not being 0.
      - Calculate a % b (12 % 6 = 0). Now b is 0, so we exit the recursion.

       end

     */
    const calculatePGCDR = (x,y) => {

        x = parseInt(x);
        y = parseInt(y);
    
        if(y === 0){
    
            return x;
        }
        else {
    
            return calculatePGCD(y, x % y);
        }
    }

    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    const calculatePGCD = (x,y) => {

        let disiveur = 0;
        if(x > 0 && y >0){
  
           for(let i = 1; i<= x; i++){
  
                if(x%i === 0 && y%i === 0){
                   disiveur = i;
                }
           }
        }
  
        return disiveur;
    }
  
 
 
 /**
  * ## Big challenge
     * Rsa algorithm : asymmetric : pairs of keys data encrypted is onliy de
     * decrypted with private key
     * What's RSA : RSA works by generating a public and a
     *  private key. The public and private keys
     *  are generated together and form a key pair.
     * 
     * The public key can be used to encrypt any arbitrary piece of data, but cannot decrypt it
     * 
     * The private key can be used to decrypt any piece of data that was encrypted by it’s corresponding public key.
     */

    /**
     * Example 
     * Encryption : 
     *  c = P^e mod n
     * 
     * Decryption : 
     *  P = c^d mod n 
     * 
     * public key : {e,n}
     * private key : {d,n} 
     * 
     * Key generation 
     * 
     * consider 2 large prime numbers q,p
     * we calculate n = p* q
     * euler function : euler (p-1) (q-1)
     * Choose a small number e, co-prime to euler 
     * with gcd(euler,e) = 1 and 1<e<euler
     * find d, such as d*e mod euler = 1
     */
 /**
  * Algorithm solution : 
  *  two prime numbers p=3,q=5
  *   n = p*q = 3*5 = 15 
  *   n=15
  * 
  *  find euler
  *  euler = (p-1)(q-1)
  *  euler = 8
  * 
  * find e such as gcd(e,euler = 1) && 1<e<euler 
  *  
  * e= 3
  * 
  * pgcd (x,y) => 
  * 
  * 561 modulo 357 = 204
  * 
  * r = 0  => le dernier reste non null 
  * r =! 0 => a recoit b & b recoit r 
  * le pgcd est obtenu lorsque le r = 0
  *  
  *Example:
Enter the value of p: 7
Enter the value of q: 19

n = pq = 7 * 19 = 133
λ(n) = (p – 1)(q – 1) = λ(n) = (7 – 1)(19 – 1) = 108

The number e should be less than 108 and greater than 1.
Thus, (i * e) % λ(n) = 1, (65 * 5) % 108 = 1
The value of n is 133
The value of λ(n) is 108
The value of e is 5
The value of d is 65
*/

