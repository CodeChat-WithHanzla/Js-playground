function outer(){
    let name="Hanzla"
    function inner(){
        console.log(`My name is ${name}`);
    }
    inner()
}
outer()

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  