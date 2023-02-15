function newDisplay(name, picture){
    var newElement = document.createElement("div");
    var newImage = document.createElement("div");
    var newText = document.createElement("h1");
    newElement.className = 'container';
    newImage.className = 'image';
    var newTextNode = document.createTextNode(name);
    newImage.style.backgroundImage = 'url(' + picture + ')';
    newText.appendChild(newTextNode);
    newElement.appendChild(newImage);
    newElement.appendChild(newText);
    document.body.appendChild(newElement);
}

class Person{
    constructor(name, picture){
        this.name = name;
        this.picture = picture;
    }
}

var personArr = [
    new Person("Ada Lovelace", "https://daily.jstor.org/wp-content/uploads/2019/10/ada_lovelace_pioneer_1050x700.jpg"),
    new Person("Alan Turing", "https://hips.hearstapps.com/hmg-prod/images/alan-turing-9512017-1-402.jpg"),
    new Person("Charles Babbage", "https://cdn.britannica.com/12/194612-050-6100BA16/Charles-Babbage.jpg"),
    new Person("Steve Jobs", "https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg?v=1617291443&w=1920&h=1080"),
    new Person("Bill Gates", "https://www.telegraph.co.uk/multimedia/archive/00596/news-graphics-2005-_596940a.jpg"),
    new Person("Elon Musk", "https://i2-prod.dailystar.co.uk/incoming/article26823664.ece/ALTERNATES/s615b/0_Elon-Musks-Chinese-doppelganger-so-convincing-people-think-hes-a-deepfake.jpg")
]

for(var i = 0; i < personArr.length; i++){
    newDisplay(personArr[i].name, personArr[i].picture);
}