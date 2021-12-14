const images=[
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const imgLen=images.length;

const chosenImage=images[random*imgLen];

const bgImg=document.createElement("img");

bgImg.src=`img/${chosenImage}`;

document.body.appendChild(bgImg);