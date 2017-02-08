


var readingList = [

  {title: "The Left Hand of Darkness",
  author: "Ursula Le Guin",
  alreadyRead: true,},

  {title: "Your Life and Others",
  author: "Ted Chiang",
  alreadyRead: true ,},

  {title: "Trigger Warnings",
  author: "Neil Gaiman",
  alreadyRead: false,},

  {title: "Sandman",
  author: "Neil Gaiman",
  alreadyRead: true,},

  {title: "Lilith's Brood",
  author: "Octavia Butler",
  alreadyRead: false,},

]

count = readingList.length;

for (var i=0; i< count; i++){
  if(readingList[i].alreadyRead === true){
    console.log('You already read "' + readingList[i].title + '" by ' + readingList[i].author);
  }
  else{
    console.log('You still need to read "' + readingList[i].title + '" by ' + readingList[i].author);

  }
}
