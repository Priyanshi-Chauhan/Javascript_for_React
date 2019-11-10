//DIFFERENCE BETWEEN LET , CONST AND VAR
//var -> function
//let -> block
//const -> block(but unlike var its value cant be reassigned .)
//below are the examples to illustrate  the difference
function hello(){
    for(var i=0;i<5;i++){
        console.log(i)
    }
    console.log(i)
}
hello();
//writing console.log(i) between the two curly braces will giev the array.
function hiiii(){
    for(let i=0;i<5;i++){
        console.log(i)
    }

}
hiiii();
//const cant be written like var or let like the below code 
//function hola(){
  //  for(const i=0;i<5;i++){
    //    console.log(i)
    //}
    //console.log(i)
//}
//hola();
 // Also it cant be declared like the code below 
 // const x=2;
 //const x=6;
 //console.log(x)
 //Will the error as-
 //SyntaxError: Identifier 'x' has already been declared


 const x=2;
 console.log(x)


