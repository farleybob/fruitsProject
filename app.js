const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "No name specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
 
    rating: 7,
    review: "Peaches bruh"
});

fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({

    name: "John",
    age: 37
});

person.save();

Fruit.updateOne({review: "Peaches bruh"}, {name: "Peach"}, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Success");
    }
});