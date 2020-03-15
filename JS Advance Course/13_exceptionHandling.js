/**     Exception Handling   */

// syntax

/** 
try{
    //statements;
}catch(){
    // statements
}   */

try {
  variable;
  console.log("Try Block");
} catch (e) {
  console.log(`catch Block Error ${e}`);
  console.log(`catch Block Error message${e.message}`);
  console.log(`catch Block Error name ${e.name}`);
  console.log(`catch Block Error stack ${e.stack}`);
}
