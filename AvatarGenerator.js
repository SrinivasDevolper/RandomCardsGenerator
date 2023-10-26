let imageID = document.getElementById("imageID");
let headingID = document.getElementById("headingID");
let paragraphID = document.getElementById("paragraphID");
let paraID = document.getElementById("paraID");
let leftID = document.getElementById("leftID");
let rightID = document.getElementById("rightID");
let buttonID = document.getElementById("buttonID");

let profiles = [{
        id: 0,
        image: "https://res.cloudinary.com/dya20h8av/image/upload/v1686053900/uW1-W4zjQ4XCW3zms-Jtg-transformed_hdghit.jpg",
        heading: "Lusi Lehara",
        paragraph: "Web Developer",
        para: "She is Software Developer. She is Working at Microsoft, and She is a Team Leader."
    },
    {
        id: 1,
        image: "https://res.cloudinary.com/dya20h8av/image/upload/v1686120721/STqbdEFD-EbGAAkwKOGSh-transformed_vn5bwy.jpg",
        heading: "James Oliver",
        paragraph: "Game Developer",
        para: "He is a Game Devolper. He is a CEo of Gamenuts."
    },
    {
        id: 2,
        image: "https://img.freepik.com/premium-vector/young-handsome-man-illustration_632498-22.jpg?w=740",
        heading: "Charlotte George",
        paragraph: "Android Develpoer",
        para: "He is a Andriod Devolper. He is a working at Microhard, He is a Team Leader, He is Consultor."
    },
    {
        id: 3,
        image: "https://img.freepik.com/premium-vector/young-handsome-man-illustration_632498-29.jpg?w=740",
        heading: "Jack David",
        paragraph: "Hardware Developer",
        para: "He is a Hardware Devolper. He is a Director of Hardworth."
    }
];
let counter = 0;

function cards(counter) {
    let content = profiles[counter];
    imageID.src = content.image;
    headingID.textContent = content.heading;
    paragraphID.textContent = content.paragraph;
    paraID.textContent = content.para;
}
cards(counter);
rightID.onclick = function() {
    if (counter < 3) {
        counter += 1;
    } else {
        counter = 0;
    }
    cards(counter);
};

leftID.onclick = function() {
    if (counter > 0) {
        counter -= 1;
    } else {
        counter = profiles.length - 1;
    }
    console.log(counter);
    cards(counter);
}
buttonID.onclick = function() {
    counter = Math.floor(Math.random() * 4);
    cards(counter);
}