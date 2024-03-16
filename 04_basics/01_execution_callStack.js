/*     JavaScript Execution Context

       ===> Global Execution Context (refer to this)
       In browser environment `this` value will be window

       ===> Functional Execution Context 
       ===> Eval Execution Context

       {} javaScript code will run in two phases
       1- Memory Creation phase
       2- Execution Phase

       In Memory creation phase every undefined will store in every variable
       And in case of function,function defination will store
       for instance,
       a,b=undefined
       add => function defination
       result,result1 =undefined

       ++++++ Execution phase ++++++ 
       a=9 ,b=7
       
            Functions will build their own execution context
        ==^ 1- New Variable environment 
            2- Execution thread
            Then again MCP and Execution phase


            +++++ Call Stack +++++
            If a function execute within a function then it`ll follow LIFO principle
            and this happen also in recursive function
            





*/

let a=9
let b=7
function add(a,b) {
 return a+b
}
let result = add(a,b)
let result1= add(4,8)

































    
