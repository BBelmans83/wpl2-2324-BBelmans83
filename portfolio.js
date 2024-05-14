const werken = [
    {
        werk: 'Mist',
        type: 'Photoshop',
        imgPath: 'pho01.png'
    },{
        werk: 'Liefde auto',
        type: 'Photoshop',
        imgPath: 'pho02.png'
    },{
        werk: 'Vlinder',
        type: 'Photoshop',
        imgPath: 'pho03.png'
    },{
        werk: 'Vliegende jongen',
        type: 'Photoshop',
        imgPath: 'pho04.png'
    },{
        werk: 'Hagedis',
        type: 'Photoshop',
        imgPath: 'pho05.png'
    },{
        werk: 'Retro',
        type: 'Photoshop',
        imgPath: 'pho06.png'
    },{
        werk: 'Sport phone',
        type: 'Photoshop',
        imgPath: 'pho07.png'
    },{
        werk: 'MockUp',
        type: 'Photoshop',
        imgPath: 'pho08.png'
    },{
        werk: 'MockUp',
        type: 'Photoshop',
        imgPath: 'pho09.png'
    },{
        werk: 'Werkstuk 1',
        type: 'Illustrator',
        imgPath: 'ill1.png'
    },{
        werk: 'Werkstuk 2',
        type: 'Illustrator',
        imgPath: 'ill2.png'
    },{
        werk: 'Werkstuk 4',
        type: 'Illustrator',
        imgPath: 'ill4.png'
    },{
        werk: 'Werkstuk 5',
        type: 'Illustrator',
        imgPath: 'ill5.png'
    },{
        werk: 'Werkstuk 6',
        type: 'Illustrator',
        imgPath: 'ill6.png'
    },{
        werk: 'Werkstuk 7',
        type: 'Illustrator',
        imgPath: 'ill7.png'
    },{
        werk: 'Werkstuk 8',
        type: 'Illustrator',
        imgPath: 'ill8.png'
    },{
        werk: 'Werkstuk 9',
        type: 'Illustrator',
        imgPath: 'ill9.png'
    },{
        werk: 'Werkstuk 10',
        type: 'Illustrator',
        imgPath: 'ill10.png'
    },{
        werk: 'Werkstuk 11',
        type: 'Illustrator',
        imgPath: 'ill11.png'
    },{
        werk: 'Werkstuk 12',
        type: 'Illustrator',
        imgPath: 'ill12.png'
    },{
        werk: 'Werkstuk 13',
        type: 'Illustrator',
        imgPath: 'ill13.png'
    },{
        werk: 'Werkstuk 14',
        type: 'Illustrator',
        imgPath: 'ill14.png'
    },{
        werk: 'Werkstuk 15',
        type: 'Illustrator',
        imgPath: 'ill15.png'
    },{
        werk: 'Werkstuk 16',
        type: 'Illustrator',
        imgPath: 'ill16.png'
    },{
        werk: 'Werkstuk 17',
        type: 'Illustrator',
        imgPath: 'ill17.png'
    },{
        werk: 'Werkstuk 18',
        type: 'Illustrator',
        imgPath: 'ill18.png'
    },{
        werk: 'Werkstuk 19',
        type: 'Illustrator',
        imgPath: 'ill19.png'
    },{
        werk: 'Werkstuk 20',
        type: 'Illustrator',
        imgPath: 'ill20.png'
    },{
        werk: 'Werkstuk 21',
        type: 'Illustrator',
        imgPath: 'ill21.png'
    },{
        werk: 'Werkstuk 22',
        type: 'Illustrator',
        imgPath: 'ill21.png'
    },{
        werk: 'Werkstuk 23',
        type: 'Illustrator',
        imgPath: 'ill23.png'
    },{
        werk: 'Werkstuk 24',
        type: 'Illustrator',
        imgPath: 'ill24.png'
    },{
        werk: 'Werkstuk 7',
        type: 'Divers',
        imgPath: 'Divers01.png'
    },{
        werk: 'Werkstuk 8',
        type: 'Divers',
        imgPath: 'Divers02.png'
    },{
        werk: 'Werkstuk 9',
        type: 'Divers',
        imgPath: 'Divers03.png'
    },{
        werk: 'Werkstuk 10',
        type: 'Divers',
        imgPath: 'Divers04.png'
    },
]

let selector = document.getElementById('typeDropdown');
let waardeSelector = 'Photoshop';

//aanmaken en toevoegen van de titel
let titel = document.createElement("h2");
let titelNaam = document.createTextNode("Werken");
titel.appendChild(titelNaam);

//eerst werken toevoegen aan HTML voor te starten! - anders kan je 'remove' niet doen - is dan onbekend
addWerkenToDocument();

//selector event listener geven; waarde van de selector opvragen en al de gewenste auto's uit de bron halen die juiste waarde hebben
selector.addEventListener("change", ()=>{
    //eerst pagina opkuisen
    //document.getElementsByClassName('alleWerkenContainer')[0].remove();
    //functie aanmaken voor beter/overzichtelijke code
    addWerkenToDocument();
});

function getWerken(){
    waardeSelector = document.getElementById('typeDropdown').value;

    let werkenToShow = [];
    if (waardeSelector === 'Photoshop'){

        for(let werk of werken){
            if (werk.type === waardeSelector){
                werkenToShow.push(werk);
            }
        }
    } else if (waardeSelector === 'Illustrator'){
        for(let werk of werken){
            if (werk.type === waardeSelector){
                werkenToShow.push(werk);
            }
        }
    }else if (waardeSelector === 'Divers'){
        for(let werk of werken){
            if (werk.type === waardeSelector){
                werkenToShow.push(werk);
            }
        }
    }
    else{
        werkenToShow = werken;
    }
    return werkenToShow;
}

function addWerkenToDocument() {
    let werkenToShow = getWerken();

    let alleWerkenContainers = document.querySelectorAll('.tech-get-all-werk');

    alleWerkenContainers.forEach(alleWerkenContainer => {
        if (!alleWerkenContainer) {
            alleWerkenContainer = document.createElement('div');
            alleWerkenContainer.className = 'tech-get-all-werk';
            document.body.appendChild(alleWerkenContainer);
        }

        alleWerkenContainer.innerHTML = '';

        for (let werk of werkenToShow) {
            let individueleWerkenContainer = document.createElement('div');
            individueleWerkenContainer.className = 'individueleWerkenContainer';

            let afbeeldingElement = document.createElement('img');
            let textElement = document.createElement('div');

            textElement.innerHTML = `<h3>${werk.werk}</h3>`;
            afbeeldingElement.src = './assets/werken/' + werk.imgPath;

            // Voeg de lichtbox-functionaliteit toe
            afbeeldingElement.onclick = function() {
                openLightbox(afbeeldingElement.src);
            };

            individueleWerkenContainer.appendChild(textElement);
            individueleWerkenContainer.appendChild(afbeeldingElement);

            alleWerkenContainer.appendChild(individueleWerkenContainer);
        }
    });
}

// Open de lichtbox en stel de bron van de afbeelding in wanneer erop wordt geklikt
function openLightbox(imgSrc) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "block";
    lightboxImg.src = imgSrc;
}

// Sluit de lichtbox wanneer erop wordt geklikt
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
