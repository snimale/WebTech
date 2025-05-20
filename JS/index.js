// alert("helo");

// let age;
// console.log(age);
// console.log("asdasd", age, "asdasd");

// console.log(2 ** 3);
// console.log("12" == 12);
// console.log("12" === 12);
// console.log("12" != 12);
// console.log("12" !== 12);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let arr = [1, 2, 3];
// for (let e of arr) {
//   console.log(e);
// }
// if you use let e in arr/obj, e will be key instead of value, so for array, it will be its index as array is an object with its indices as its keys

// let arr = [1, 2, 3];
// console.log(arr["0"]);
// console.log(arr[0]);

// let str = "helo";
// let newStr = `new ${str}`;
// console.log(str.length);
// console.log(str[0]);
// console.log(newStr);
// str.toUpperCase();
// str.toLowerCase();
// str.trim();
// console.log(str.slice(0, 2));
// console.log(str.concat(newStr));
// str = str.replace("he", "ge");
// console.log(str);
// console.log(newStr.split(" "));

// let arr = ["a", true, 1];
// console.log(arr.shift());
// console.log(arr);
// arr.unshift("a");
// console.log(arr);
// arr.push("z");
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.slice(1, 2));
// console.log("----------");
// console.log(arr);
// arr.splice(1, 2, "soh", "hos", 1, 2, 3);
// console.log(arr);

// let sum = 0;
// let arr = [1, 2, 3];
// arr.forEach((val) => {
//   sum += val;
// });
// console.log(sum);

// let arr = [1, 2, 3];
// let arr2 = arr.map((res) => {
//   res = res * 2;
//   return res;
// });
// console.log(arr2);

// let button = document.getElementById("but");
// let buttonarr = document.getElementsByClassName("but");
// let buttonarr2 = document.getElementsByTagName("input");
// button = document.querySelector("#but"); //first ele
// buttonarr = document.querySelectorAll("#but"); // all ele
// console.log(button);

// let button = document.getElementById("but");
// console.log(button.className);
// console.log(button.tagName);
// console.log(button.innerHTML);
// console.log(button.innerText);
// console.log(button.textContent);
// button.onclick = onCl;
// function onCl() {
//   let txt = document.getElementById("txt");
//   console.log(txt.value);
// }
// button.style.backgroundColor = "pink";
// button.style = "border: 2px solid black; background-color: red;";
// console.log(button.getAttribute("id"));

// let button = document.getElementById("but");
// let p = document.createElement("p");
// p.innerText = "helllo";
// console.log(p);
// document.body.append(p);
// document.body.prepend(p);
// document.body.after(button);
// document.body.before(button);

// let obk = {
//   item: "helo",
//   getItem: function () {
//     return this.item;
//   },
// };

// class item {
//   constructor() {}
//   getItem() {
//     return this.sss;
//   }
// }

// let button = document.getElementById("but");
// button.classList.add("active");
// button.classList.add("hi");
// button.classList.remove("active");
// console.log(button.classList);

// button.remove();

// console.log(document.forms.length);

// setTimeout(() => {
//   console.log(102103);
// }, 1000);

// let promise = new Promise((resolve, reject) => {
//   resolve("ji");
// });
// console.log(promise);
// promise.then((res) => {
//   console.log(res);
// });

// when you use let a = await <promise>, a will auto get the result of resolve of promise

async function getRandom() {
  let res = await fetch("http://localhost/practice/index.php", {
    method: "POST",
    body: JSON.stringify({ units: "100" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
}

document.getElementById("but").onclick = getRandom;
