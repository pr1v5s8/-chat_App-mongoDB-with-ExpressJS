const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
};

let allChats = [
    {
        from: "Neha",
        to: "Preeti",
        msg: "Send me notes for the exam.",
        created_at: new Date(),
    },
    {
        from: "Rohit",
        to: "Mohit",
        msg: "Teach me JS callbacks.",
        created_at: new Date(),
    },
    {
        from: "Amit",
        to: "Sumit",
        msg: "I wanted to learn css.",
        created_at: new Date(),
    },
    {
        from: "Anita",
        to: "Ramesh",
        msg: "Bring me some fruits.",
        created_at: new Date(),
    },
    {
        from: "Tony",
        to: "Peter",
        msg: "Love you 3000.",
        created_at: new Date(),
    },
    {
        from: "Sonu",
        to: "Monu",
        msg: "Give me your insta id.",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);