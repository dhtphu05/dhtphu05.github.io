//bai 1
function isPrimeNumber(n){
    if (n<2) return false;
    else{
        for (let i=2; i<=Math.sqrt(n); i++){
            if (n%i==0){
                return false;
            }
        }
        return true;
    }
}
function printPrimeNumbers(n){
    if(isPrimeNumber(n)) console.log(n + "la so nguyen to");
    else console.log(n + "khong phai so nguyen to");
}
console.log("Bai 1:");
printPrimeNumbers(5);
printPrimeNumbers(6);
//bai 2
function listPrimeNumbersBetween(a,b){
    if(a>b){
        let temp = a;
        a = b;
        b = temp;
    }
    for (let i=a;i<=b;i++){
        if(isPrimeNumber(i)) console.log(i);
    }
}

console.log("Bai 2:");
console.log("cac so nguyen to tu 1 den 10 la: ");
listPrimeNumbersBetween(1,10);
//bai 3
function getNameOfMonth(a){
    console.log("Thang" + a);
}
console.log("Bai 3:");
getNameOfMonth(1);
//bai 4
function getLongestWordOfSequence(s){
    let words=s.split(" ");
    let longestWord=words[0];
    for (let i=1;i<words.length;i++){
        if(words[i].length>longestWord.length) longestWord=words[i];
    }
    console.log("chuoi la: " + s);
    console.log("Tu dai nhat dau tien la: "+longestWord);
}
console.log("Bai 4:");
getLongestWordOfSequence("hello cac bannnn nhe");
//bai 5
function deleteSpaceInStartAndEndString(s){
    let i=0;
    while(s[i]===" "){
        i++;
    }
    let j=s.length-1;
    while(s[j]===" "){
        j--;
    }
    let result="";
    for (let k=i;k<=j;k++){
        result+=s[k];
    }
    return result;
}
console.log("Bai 5:");
console.log("chuoi ban dau: "+ "   hello cac ban    ");
console.log(deleteSpaceInStartAndEndString("   hello cac ban    "));

