//Q1 : How to compare two JSON have the same properties without order?
        //let obj1 = { name: "Person 1", age:5};
        //let obj2 = { age:5, name: "Person 1"};

        let obj1 ={

            name:"Person 1",
            age:"5"
            
            }
         let obj2 ={
                
                age:"5",
                name:"Person 1"
            }
            console.log(JSON.stringify(obj1));
            console.log(JSON.stringify(obj1)===JSON.stringify(obj2));

         
