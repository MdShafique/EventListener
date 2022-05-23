function makeGreen() {
    document.body.style.backgroundColor = "green";
}
const blueButton = document.getElementById('makeBlueButton');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = "blue";
}
const yellowButton = document.getElementById('makeYelloBtn');
yellowButton.onclick = function () {
    document.body.style.backgroundColor = 'yellow';
}
const goldenRodButton = document.getElementById('makeGoldenRodBtn');
goldenRodButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}
const hotPinkButton = document.getElementById('makeHotPinkBtn');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})
document.getElementById('makeLightBlue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})