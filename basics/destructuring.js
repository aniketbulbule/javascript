            // Destructuring
            // The process of extracting the values from the array or object into the variables is known as Destructuring
            // 1.Object Destructuring
            // 2.Array Destructuring

            // # Object Destructuring
            // 1. The process of extracting the values from the object into the variables is known as object
            //    destructuring.
            // 2. All the key names provided on LHS are consider as variable and these variables should be declared
            //   and written inside curly braces.
            // 3. The variable name should same as object key name
            // 4. Js engine will search for the key inside the object.
            // 5. If the key is present , the value is extracted and copy into variable.
            // 6. If the key is not present , undefined is store in the variable.
            // 7. After destructuring , we can directly access variable names , without using object reference.


            // let backPack = {
            //   item1: "Camera",
            //   item2: "Tiffin",
            //   item3: "Charger",
            //   myStuff: {
            //     myItem1: "Toothbrush",
            //     myItem2: "Water bottle",
            //     myItem3: "Blankets",
            //   },
            // };

            // let { item1, item2, item3 } = backPack;

            // console.log(item1);
            // console.log(item2);
            // console.log(item3);

            //-----

            // let obj = {
            //   id: 1,
            //   name: "Aniket",
            //   age: 23,
            // };
            // console.log(obj); //{id: 1, name: 'Aniket', age: 23}

            // let { id, name } = obj;
            // console.log(id); //we directly acess variables names , without using object reference.  //1
            // console.log(name); //Aniket
            // //console.log(age);     //Xage is not defined
            // //console.log(rollno);  //X

            // console.log(({ id, name } = obj)); // {id: 1, name: 'Aniket', age: 23}


          // #Array Destructuring
          // 1. The process of extracting the values from the array into the variables is known as array destructuring.
          // 2. All the key names provided on LHS are consider as variable and should bewritten inside square
          // brackets.
          // 3. Js engine will extract the array values and stored them variables in the same order as they are present
          // inside array.
          // 4. if we try to access value which is not present inside array , js engine will store undefined inside that
          // variable.

          let arr=[10,20,30,40,50];
          // console.log(arr); 

          // let [a,b,c,d,e]=arr

          // console.log(a); //10
          // console.log(b); //20
          // console.log(c); //30
          // console.log(d); //40
          // console.log(e); //50

          // let [a,,,,b]=arr
          // console.log(a);
          // console.log(b);//50
          // let [,,,,,a]=arr
          // console.log(a); //undefined

          // let [b,,c,,] =arr
          // console.log(c); //30
