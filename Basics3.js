//functions and usages

function add(a,b){
	return a+b;
}

console.log(add(2,3));


//ARRAYS

var a=4;
var b = ["hello", "world", 4,2132131, "JS!"]

console.log(b);

console.log("size of the array: "+b.length);

for(var i = 0; i < 4; i++){
	console.log( b[i] );
}

//another way of declaring array

var cArray = new Array();

cArray[0]="Goodbye!!";

cArray[1]="Supp!!";

cArray[2]=2;

console.log(cArray);


console.log("print it reverse");


console.log( cArray.length   );

for(var j=cArray.length-1; j >= 0; j-- ){
	console.log(  cArray[j]   );
}

var name = "Feyyaz";
console.log(name.charAt(3));
var newName = name.concat("    Cimen    ");
console.log(newName);

console.log(name.indexOf("z"));


//substring		2nd included and 5th index excluded	
		
console.log(name.slice(2, 5));

console.log(name.toUpperCase());


console.log(newName);
console.log(newName.trim());

//String object declaraation
var name2= new String ("feyyazzz");


console.log(name2);



