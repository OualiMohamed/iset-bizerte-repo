function ex1 () {
    let res = "";

    // Structure tableau de voitures (Array of Objects)
    let voitures = [
        {
            marque: "Polo",
            anneeF: "2010",
            dateAchat: new Date("2012-12-3"),
            getAge : function () {
                let age = 0;
                let dateNow = new Date();
                age =  dateNow.getFullYear() - this.dateAchat.getFullYear();  
                return age;
            }
        },
        {
            marque: "Chery",
            anneeF: "2017",
            dateAchat: new Date("2020-5-5"),
            getAge : function () {
                let age = 0;
                let dateNow = new Date();
                age =  dateNow.getFullYear() - this.dateAchat.getFullYear();  
                return age;
            }
        },
        {
            marque: "Kia",
            anneeF: "2015",
            dateAchat: new Date("2017-8-8"),
            getAge : function () {
                let age = 0;
                let dateNow = new Date();
                age =  dateNow.getFullYear() - this.dateAchat.getFullYear();  
                return age;
            }
        },
        {
            marque: "Mahindra",
            anneeF: "2019",
            dateAchat: new Date("2021-2-2"),
            getAge : function () {
                let age = 0;
                let dateNow = new Date();
                age =  dateNow.getFullYear() - this.dateAchat.getFullYear();  
                return age;
            }
        }
    ];

    // for (let i=0; i<voitures.length; i++) {
    //     console.log(voitures[i].marque);    
    // }
    
    // voitures.forEach(voiture => {
    //     console.log(voiture.marque);
    // });

    res += '<table class="table table-striped table-hover">';
        res += '<thead>';
            res += '<tr>';
                res += '<th scope="col">Marque</th>';
                res += '<th scope="col">Année de fabrication</th>';
                res += '<th scope="col">Date d\'achat</th>';
                res += '<th scope="col">Age de la voiture</th>';
            res += '</tr>';
        res += '</thead>';
        res += '<tbody>';
            voitures.forEach(voiture => {
                res += '<tr>';
                    res += '<td>' + voiture.marque + '</td>';
                    res += '<td>' + voiture.anneeF + '</td>';
                    res += '<td>' + voiture.dateAchat.toDateString() + '</td>';
                    res += '<td>' + voiture.getAge() + ' ans</td>';
                res += '</tr>';
            });
        res += '</tbody>';
    res += '</table>';


    let zone = document.getElementById("zone");
    zone.innerHTML = res;
}
