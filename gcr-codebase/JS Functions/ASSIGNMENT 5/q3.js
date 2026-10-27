```javascript
// Object using an arrow function
const user = {
    name: "Rajat",

    showName: () => {
        console.log("Arrow Function:", this.name);
    }
};

// Call the arrow function
user.showName();

// Object using a normal function
const userFixed = {
    name: "Rajat",

    showName: function () {
        console.log("Normal Function:", this.name);
    }
};

// Call the normal function
userFixed.showName();
```
