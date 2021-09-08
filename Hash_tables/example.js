let user = {
    name: "mansur",
    age: 22,
    magic: true,
    screem: function(){
        console.log("oo reyy!");
    }
};

console.log(user.age);  //O(1)

user.spell = "huraah!";  //O(1)

user.screem();   //O(1)
