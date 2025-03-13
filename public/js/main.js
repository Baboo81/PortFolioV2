"use strict";

//Footer map:

//Create map:
const centroid = [50.71036, 4.36889];
const map = L.map('mapid').setView(centroid, 16.4);

//Add tiles & marker:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([50.71036, 4.36889]).addTo(map);

//Horloge:
function clock () {
    //Récupération de : l'heure, des minutes, des secondes:
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    //Corréler les valeurs avec les degrés de l'horloge:
    const hour = hours * 30;
    const minute = minutes * 6;
    const seconde = secondes * 6;
    //Affichage des valeurs par rapport aux aiguilles de l'horloge:
    document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.seconde').style.transform = `rotate(${seconde}deg)`;
}
    //On utilise setInterval afin d'actualiser l'horloge toutes les secondes:
    setInterval(clock, 1000);

//Animation balls:
const ball = document.getElementById('logo');
let leftPos = 0;
let upDownPos = 0;
let dir = -1;
let current_rotation = 0; 

ball.style.position = "absolute";

function ballAnimate1 () {

    if (leftPos == 1900) {
        dir = 1
    } else if 
        (leftPos == -90) {
        dir = -1
    }
    
    leftPos += -2 * dir;
    current_rotation += 1;
    

    ball.style.left = `${leftPos}px`;
    ball.style.transform = 'rotate('  + current_rotation + 'deg)';

    requestAnimationFrame(ballAnimate1);
};

requestAnimationFrame(ballAnimate1);

//Chargement des pages  
let sections = ["home", "about", "skills", "picto", "stage", "certif"];

// Fonction pour charger le contenu d'une section
function loadSection(section) {
    if (sections.includes(section)) {
        // Utilisation de fetch pour récupérer le contenu de la section
        fetch(`sections/${section}.php`)
            .then(response => response.text())
            .then(data => {
                document.getElementById("sections-container").innerHTML = data;
            })
            .catch(error => {
                console.error('Erreur de chargement de la section:', error);
            });
    }
}

//Fonction pour charger le contenu de chaque section
function onScroll() {
    // Récupérer la position actuelle du scroll
    const scrollPosition = window.scrollY;

    // Vérifier dans quelle section on se trouve en fonction de la position de scroll
    if (scrollPosition < document.getElementById('about').offsetTop) {
        loadSection("home");
    } else if (scrollPosition >= document.getElementById('about').offsetTop && scrollPosition < document.getElementById('skills').offsetTop) {
        loadSection("about");
    } else if (scrollPosition >= document.getElementById('skills').offsetTop && scrollPosition < document.getElementById('picto').offsetTop) {
        loadSection("skills");
    } else if (scrollPosition >= document.getElementById('picto').offsetTop && scrollPosition < document.getElementById('stage').offsetTop) {
        loadSection("picto");
    } else if (scrollPosition >= document.getElementById('stage').offsetTop && scrollPosition < document.getElementById('certif').offsetTop) {
        loadSection("stage");
    } else if (scrollPosition >= document.getElementById('certif').offsetTop) {
        loadSection("certif");
    }
}

// Attacher l'événement de défilement
window.addEventListener('scroll', onScroll);