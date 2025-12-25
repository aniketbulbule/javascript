//? 🍛 "Lo re, yeh rahe tumhare JavaScript ke easy-easy  tasks"
//? 🔁 Loops (forEach, for...of, for...in – sirf arrays ke liye)
//! 1. Har sheher ka naam print karo (forEach se)
//? Indian cities ka array diya gaya hai. Har city ke liye print karo: City visited: [city]
// const cities = ["Mumbai", "Pune", "Indore", "Kolkata"];
// cities.forEach((city,i,arr)=>{
//     console.log(city);
// })

//! 2. Sab even PIN codes print karo (for...of)
//? Pin codes ka array hai. Sirf even wale print karo.
// const pinCodes = [110001, 560034, 400001, 700019, 600005];
// for (const pinCode of pinCodes) {
//     if(pinCode%2==0){
//         console.log(pinCode);
//     }
// }

//! 3. IPL players ka naam aur unka index print karo (forEach)
//? Jaise: "0 - Dhoni", "1 - Kohli", etc.
// const players = ["Dhoni", "Kohli", "Rohit", "Pandya"];
// players.forEach((val,i,arr)=>{
//     console.log(`${i} - ${val}`);
// })

//! 4. Har item ko ek message ke saath print karo (for...of)
//? Jaise: "Item mil gaya: [item]"
// const items = ["Dahi", "Pani Puri", "Lassi", "Aloo Paratha"];
// for (const item of items) {
//     console.log(`Item mil gaya : ${item}`);
// }

//? 🔄 map – Naye array banane ka magician
//! 5. Sab price pe 18% GST jod do (map ka use)
//? ₹ ke prices ka array diya hai. Har ek pe GST lagake naya array banao.
// const prices = [100, 250, 500, 750];
// let newArr = prices.map((val,i,arr)=>{
//     return val += val*18/100;
// })
// console.log(newArr);

//! 6. Naam ko short form mein convert karo (map)
//? Jaise: "Sachin Tendulkar" → "S. Tendulkar"
// const names = ["Sachin Tendulkar", "Rahul Dravid", "MS Dhoni"];
// let shortNames = names.map((val,i,arr)=>{
//     temp = val.split(" ");
//     temp[0] = temp[0].charAt(0);
//     return `${temp[0]}. ${temp[1]}`
// })
// console.log(shortNames);

//! 7. Har naam ki length nikaalo (map)
// Array ke har string ki length ka array banao.
// const names = ["Delhi", "Jaipur", "Chandigarh", "Mumbai"];
// let lengthArr = names.map((val,i,arr)=>{
//     return val.length
// })
// console.log(lengthArr);

//! 8. Sab item names ko UPPERCASE mein convert karo




// "biryani" → "BIRYANI"
// const foodItems = ["biryani", "paneer", "samosa", "jalebi"];
// let upCase = foodItems.map((val,i,arr)=>{
//     return val.toUpperCase()
// })
// console.log(upCase);

//! 9. Har student's roll number ke aage "Roll No." jod do
// Output hona chahiye: Roll No. 101, Roll No. 102, etc.


// const rollNumbers = [101, 102, 103, 104];
// rollNumbers.map((val,i,arr)=>{
//     console.log(`Roll No. ${val}`)
// })

//? filter – Sirf kaam ki cheezein bacha lo
//! 10. Sab odd numbers filter karo (filter)
// Array mein se sirf odd numbers chahiye.



// const numbers = [2, 5, 8, 11, 14, 17];
// let oddNumbers = numbers.filter((val,i,arr)=>{
//     return val%2!=0
// })
// console.log(oddNumbers);

//! 11. Sirf bade log (age > 18) ko bacha lo (filter)
//? Bas adult log hi filter karo (string/number nahi, sirf logic!)


// const ages = [12, 22, 17, 30, 19];
// let newArr = ages.filter((age,i,arr)=>{
//     return age>18
// })
// console.log(newArr);

//! 12. Sab long naam (length > 6) filter karo
//? Chhote naam hata do.
// const names = ["Amit", "Abhishek", "Parthiban", "Ramesh"];
// let newNames = names.filter((name,i,arr)=>{
//     return name.length>6
// })
// console.log(newNames);

//! 13. Sab items jinke naam "p" se shuru ho rahe hain, filter karo
//? Case-insensitive check karo.
// const snacks = ["Pani Puri", "Bhel", "Poha", "Pizza", "Samosa"];
// let newArr = snacks.filter((val,i,arr)=>{
//     return val.includes("P")||val.includes("p")
// })
// console.log(newArr);

//! 14. ₹100 se kam wale items nikaalo (filter)
//? Budget friendly list chahiye bhai!
// const prices = [150, 80, 60, 120, 200, 40];
// let budgetFriendlyList = prices.filter((val,i,arr)=>{
//     return val<100
// })
// console.log(budgetFriendlyList);

//? reduce – Total ka king
//! 15. Sab item prices ka total nikaalo (reduce)
//? Kirana store ki total bill banana hai.


// const itemPrices = [40, 80, 60, 30, 100];
// let total = itemPrices.reduce((acc,val,i,arr)=>{
//     return acc+val
// })
// console.log(total);

//! 16. Sentence banao words se (reduce)
//? Ek array of words diya hai, poora sentence banado.
// const words = ["India", "is", "my", "country"];
// let sentence = words.reduce((acc,val)=>{
//     return `${acc} ${val}`
// })
// console.log(sentence);

//! 17. Har word ki total length milaake ek number banao (reduce)
//? Jaise ek hi string mein sab milakar length.
// const states = ["Goa", "Kerala", "Punjab", "Gujarat"];
// let number = states.reduce((acc,val)=>{
//     return acc+val.length;
// },0)
// console.log(number);

//! 🔍 find – Pehla mil jaaye toh kaafi hai
//? 18. Pehla naam find karo jo "M" se start hota ho (find)
// Bhai "M" se hero chahiye.
// const names = ["Amit", "Manish", "Vikas", "Mehul"];
// let name = names.find((val)=>{
//     return val.charAt(0)=="M"
// })
// console.log(name);

//! 19. Pehla bada number find karo jo 500 se upar ho (find)
//? Bas pehla mil jaaye, baaki chhodo.
// const prices = [120, 300, 550, 800];
// let price = prices.find((val)=>{
//     return val>500
// })
// console.log(price);

//? 🔃 sort & reverse – Thoda arrange, thoda ulta
//! 20. Sab numbers ascending mein sort karo
//? Chhota se bada.
// const marks = [88, 45, 76, 90, 69];
// marks.sort((a,b)=>{
//     return a-b
// })
// console.log(marks);

//! 21. Sab words ko reverse order mein print karo
//? Last word pehle aayega.
// const fruits = ["Banana", "Mango", "Apple", "Guava"];
// fruits.reverse()
// console.log(fruits);

//! 22. Sab strings ko alphabetical order mein lagao (sort)
// const items = ["Jalebi", "Barfi", "Rasgulla", "Gulab Jamun"];
// items.sort((a,b)=>{
//     return a.charCodeAt(0)-b.charCodeAt(0)
// })
// console.log(items);

//! 23. Dates ko sort karo (string format)
//? "2023-05-01" jaisi dates ko sahi order mein lagao.
// const dates = ["2024-01-01", "2023-12-12", "2024-03-01"];
// // dates.sort((a,b)=>{
// //     let aArr = a.split("-")
// //     let bArr = b.split("-")
// //     return aArr[0]-bArr[0]
// // })
// dates.sort()
// console.log(dates);

//? 🔤 String methods only – Bas string se kheloge ab!
//! 24. Har naam ka pehla character nikaalo (charAt / [0])
// const names = ["Ankita", "Bhavesh", "Chandan", "Divya"];
// let newArr = names.map((val,i,arr)=>{
//     return val.charAt(0)
// })
// console.log(newArr);

//! 25. Sab strings ko lowercase mein convert karo (toLowerCase)
// const cities = ["DELHI", "MUMBAI", "CHENNAI"];
// for (let i = 0; i < cities.length; i++) {
//     cities[i] = cities[i].toLowerCase()    
// }
// console.log(cities);

//! 26. Har string ke aage "Mr./Ms." jod do (concat)
// const names = ["Ravi", "Sneha", "Arjun"];
// for (let i = 0; i < names.length; i++) {
//     console.log(`Mr./Ms. ${names[i]}`);    
// }

//! 27. Sab strings ke starting/trailing spaces hata do (trim)
// const messyNames = ["  Raju  ", "   Meena", "Tarun   "];
// console.log(messyNames);
// for (let i = 0; i < messyNames.length; i++) {
//     messyNames[i] = messyNames[i].trim()    
// }
// console.log(messyNames);

//! 28. Check karo kaunse string "Singh" se end ho rahe hain (endsWith)
// const surnames = ["Ram Singh", "Ajay", "Rohit Singh"];
// surnames.map((val)=>{
//     console.log(`${val} = ${val.endsWith("Singh")}`);
// })

//! 29. Sab string ko 10 characters tak padStart karo (padStart)
// const numbers = ["45", "6", "123", "9999"];
// numbers.map((val)=>{
//     console.log(`${val.padStart(10,"*")}`);
// })

//! 30. "Delhi" ko "New Delhi" bana do (replace)
// const city = "Delhi";
// let replaceCity = city.replace("Delhi","New Delhi")
// console.log(replaceCity);

//! 31. Substring nikalo first 3 characters ka (substring / slice)
// const names = ["Amitabh", "Shahrukh", "Salman"];
// let subStirng = names.map((val)=>{
//     return val.substring(0,3);
// })
// console.log(subStirng);

//! 32. Har string ka last character print karo
// const foods = ["Poha", "Upma", "Idli", "Dosa"];
// foods.map((val)=>{
//     console.log(val.charAt(val.length-1));
// })

//! 33. Convert string to array using split() and back to string using join()
// const sentence = "Chai peene chalein?";
// let arr = sentence.split(" ");
// console.log(arr);
// let s = arr.join(" ")
// console.log(s);