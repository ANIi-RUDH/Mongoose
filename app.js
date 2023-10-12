const mongoose = require('mongoose');
// Connection URL
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");


const fruitSchema = new mongoose.Schema({
  name: {
    type:String,
    require:true},
    
    rating:{
      
      type:Number,
      min:1,
      max:10
    },
    review:{
    type:String,
    require:true
  }
  
});

const FFruit = mongoose.model("Fruit", fruitSchema);


const Papple=new FFruit({
  name:"Pineapple",
  rating:10,
  review:"Great fruit"
})
// Papple.save()
const fruiit = new FFruit({
  name: "Apple",
  rating: 8,
  review: "Solid to Eat"  
});

const kiwi=new FFruit({
  name:"KIWI",
  rating:10,
  review:"Brown in colour"
})
const banana=new FFruit({
  name:"BANANA",
  rating:9,
  review:"Yellow in colour"
})
const grape=new FFruit({
  name:"GRAPE",
  rating:8,
  review:"Purple in colour"
})
const mango=new FFruit({
  name:"MANGO",
  rating:10,
  review:"Yellow in colour"
})



// FFruit.insertMany([kiwi,banana,grape,mango,fruiit ])
// .then((docs) => {
//   console.log("Documents inserted successfully:", docs);
// })
// .catch((error) => {
//   console.error("Error inserting documents:", error);
// });


FFruit.find()
.then ((seed)=>{
  seed.forEach(function(item){
    console.group(item.name )
  })
  console.log("Here is your Orchard",seed);

  })
// note the words inside the  .then and .catch don't matter what matter is the .then, .catch 
.catch((happy)=>{
  console.log("Some fruits went missing",happy);
})

FFruit.updateOne({rating:5},{rating:7})
.then((docs)=>{
  console.log("New updation successfull:",docs);

})
.catch((err)=>{
  console.log("Some error occured while updating:",err)
})




const personSchema=new mongoose.Schema({
  name:{
    type:String,
  require:true},
  age: {
    type:Number,
    required:1
  },
  favouriteFruit:fruitSchema

});
const Person=mongoose.model("Human",personSchema)


const individual=new Person({
  name:"Anirudh Pathania",
  age:21
})  

// individual.save()
// .then((docs)=>{
//   console.log("New Update for Humans collection",docs)
// })
// .catch((err)=>{
//   console.log("Something is wrong in Humans insertions part",err)
// })


const individual2=new Person({
  name:"Ritta",
  age:21,
  favouriteFruit:Papple
})
// individual2.save()
// mongoose.connection.close()