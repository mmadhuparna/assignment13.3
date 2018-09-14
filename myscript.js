//creating JSON object 
var jObjects = [  
  {
      "name":"harry",
      "age":"20",
      "weight":"60",
      "height":"5.7",
      "friends":[ "Sam", "Ken", "Lian" ],
      "college":{
          "name":"GCT",
          "city":"Coimbatore",
          "pincode":"653422"
        }
  },
  {
      "name":"Aliya",
      "age":"23",
      "weight":"55",
      "height":"5.6",
      "friends":[ "kian", "Renu", "Mary" ],
      "college":{
          "name":"VIT",
          "city":"Chennai",
          "pincode":"403065"
        }
  },
  {
      "name":"Bala",
      "age":"29",
      "weight":"70",
      "height":"5.6",
      "friends":[ "Lisa", "Rahul", "Arnav" ],
      "college":{
          "name":"JNU",
          "city":"Hyderabad",
          "pincode":"542432"
        }
  },
  {
    "name":"richa",
    "age":"25",
    "weight":"60",
    "height":"5.5",
    "friends":[ "Priya", "Anu", "Asha" ],
    "college":{
        "name":"JU",
        "city":"KOlkata",
        "pincode":"700029"
      }
}
];
var jString = JSON.stringify(jObjects);
console.log(jObjects); // display result as objects
console.log(jString) ; // display result as string