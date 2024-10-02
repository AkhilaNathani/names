const indiaData = {
    "name": "INDIA",
    "children": [
        {
            "name": "Andhra Pradesh",
            "children": [
                {
                    "name": "Guntur", // District 1 in Andhra Pradesh
                    "children": [
                        {"name": "Tenali", "children": generateVillages(["Pedapulivarru", "Angalakuduru", "Kolakaluru", "Kunchanapalli", "Vemuru"])},
                        {"name": "Narasaraopeta", "children": generateVillages(["Kondrapole", "Reddygudem", "Velpuru", "Vinukonda", "Chilakaluripeta"])},
                        {"name": "Mangalagiri", "children": generateVillages(["Neerukonda", "Tadepalli", "Undavalli", "Atmakur", "Venkatayapalem"])},
                        {"name": "Sattenapalle", "children": generateVillages(["Pedakakani", "Edlapadu", "Krosur", "Phirangipuram", "Bapatla"])},
                        {"name": "Ponnur", "children": generateVillages(["Karlapalem", "Cherukupalli", "Nidubrolu", "Parchur", "Valluru"])}
                    ]
                },
                {
                    "name": "Krishna", // District 2
                    "children": [
                        {"name": "Vijayawada", "children": generateVillages(["Gannavaram", "Ibrahimpatnam", "Kanchikacherla", "Penamaluru", "Nunna"])},
                        {"name": "Nuzvid", "children": generateVillages(["Agiripalli", "Chatrai", "Musunuru", "Reddigudem", "Vissannapeta"])},
                        {"name": "Machilipatnam", "children": generateVillages(["Avanigadda", "Challapalli", "Koduru", "Nagayalanka", "Pedana"])},
                        {"name": "Kankipadu", "children": generateVillages(["Ibrahimpatnam", "Vuyyuru", "Vedadri", "Thotlavalluru", "Pamarru"])},
                        {"name": "Gudivada", "children": generateVillages(["Mudinepalli", "Pedaparupudi", "Gannavaram", "Pamarru", "Kaikaluru"])}
                    ]
                },
                {
                    "name": "Prakasam", // District 3
                    "children": [
                        {"name": "Ongole", "children": generateVillages(["Tangutur", "Singarayakonda", "Chimakurthy", "Jarugumalli", "Valluru"])},
                        {"name": "Chirala", "children": generateVillages(["Parchur", "Vetapalem", "Ipurupalem", "Chinnaganjam", "Jandrapeta"])},
                        {"name": "Markapur", "children": generateVillages(["Dornala", "Cumbum", "Mundlamuru", "Podili", "Giddalur"])},
                        {"name": "Giddalur", "children": generateVillages(["Bestavaripeta", "Komarolu", "Racharla", "Pamur", "Kanigiri"])},
                        {"name": "Kanigiri", "children": generateVillages(["Pedacherlo Palle", "Darsi", "Kandukur", "Voletivaripalem", "Pamur"])}
                    ]
                },
                {
                    "name": "Kadapa", // District 4
                    "children": [
                        {"name": "Proddatur", "children": generateVillages(["Yerraguntla", "Jammalamadugu", "Pulivendula", "Mydukur", "Chakrayapeta"])},
                        {"name": "Pulivendula", "children": generateVillages(["Lingala", "Muddanur", "Simhadripuram", "Thondur", "Vemula"])},
                        {"name": "Rayachoti", "children": generateVillages(["Lakkireddipalle", "Kalakada", "Gopavaram", "Chitvel", "Galiveedu"])},
                        {"name": "Badvel", "children": generateVillages(["Porumamilla", "Brahmamgarimatham", "Duvvur", "Nandalur", "Rajupalem"])},
                        {"name": "Jammalamadugu", "children": generateVillages(["Muddanur", "Yerraguntla", "Peddamudium", "Peddaraveedu", "Pulivendula"])}
                    ]
                },
                {
                    "name": "Chittoor", // District 5
                    "children": [
                        {"name": "Tirupati", "children": generateVillages(["Renigunta", "Ramachandrapuram", "Vadamalapeta", "Tiruchanoor", "Peruru"])},
                        {"name": "Madanapalle", "children": generateVillages(["Angallu", "Kurabalakota", "Punganur", "Vayalpad", "Ramasamudram"])},
                        {"name": "Punganur", "children": generateVillages(["Somala", "Peddapanjani", "Mulakalacheruvu", "Thamballapalle", "Pedduru"])},
                        {"name": "Nagari", "children": generateVillages(["Nindra", "Puttur", "Vadamalapeta", "Karvetinagaram", "Nagalapuram"])},
                        {"name": "Palamaner", "children": generateVillages(["Baireddipalle", "Gangavaram", "Palamaner", "Kuppam", "Sodam"])}
                    ]
                }
            ]
        },
        {
            "name": "Telangana",
            "children": [
                {
                    "name": "Hyderabad", // District 1 in Telangana
                    "children": [
                        {"name": "Charminar", "children": generateVillages(["Shah Ali Banda", "Gowlipura", "Shalibanda", "Falaknuma", "Purana Pul"])},
                        {"name": "Secunderabad", "children": generateVillages(["Mettuguda", "Padmarao Nagar", "Tarnaka", "Bolarum", "Safilguda"])},
                        {"name": "Begumpet", "children": generateVillages(["Yousufguda", "SR Nagar", "Ameerpet", "Punjagutta", "Somajiguda"])},
                        {"name": "Madhapur", "children": generateVillages(["Kondapur", "Gachibowli", "Serilingampally", "Hafeezpet", "Manikonda"])},
                        {"name": "Shamshabad", "children": generateVillages(["Mamidipally", "Pahadi Shareef", "Nadergul", "Adibatla", "Moinabad"])}
                    ]
                },
                {
                    "name": "Ranga Reddy", // District 2
                    "children": [
                        {"name": "Serilingampally", "children": generateVillages(["Shah Ali Banda", "Gowlipura", "Shalibanda", "Falaknuma", "Purana Pul"])},
                        {"name": "Kandukur", "children": generateVillages(["Mettuguda", "Padmarao Nagar", "Tarnaka", "Bolarum", "Safilguda"])},
                        {"name": "Kukatpally", "children": generateVillages(["Yousufguda", "SR Nagar", "Ameerpet", "Punjagutta", "Somajiguda"])},
                        {"name": "Miyapur", "children": generateVillages(["Kondapur", "Gachibowli", "Serilingampally", "Hafeezpet", "Manikonda"])},
                        {"name": "KPHB", "children": generateVillages(["Mamidipally", "Pahadi Shareef", "Nadergul", "Adibatla", "Moinabad"])}
                    ]
                },
                {
                    "name": "Khammam", // District 3
                    "children": [
                        {"name": "Mudigonda", "children": generateVillages(["Shah Ali Banda", "Gowlipura", "Shalibanda", "Falaknuma", "Purana Pul"])},
                        {"name": "Sathupallybad", "children": generateVillages(["Mettuguda", "Padmarao Nagar", "Tarnaka", "Bolarum", "Safilguda"])},
                        {"name": "Warangal", "children": generateVillages(["Yousufguda", "SR Nagar", "Ameerpet", "Punjagutta", "Somajiguda"])},
                        {"name": "Karimnagar", "children": generateVillages(["Kondapur", "Gachibowli", "Serilingampally", "Hafeezpet", "Manikonda"])},
                        {"name": "Hanumakonda", "children": generateVillages(["Mamidipally", "Pahadi Shareef", "Nadergul", "Adibatla", "Moinabad"])}
                    ]
                },
                // We can add more districts for Telangana and Tamil Nadu with similar structure
            ]
        },
        {
            "name": "Tamil Nadu",
            "children": [
                {
                    "name": "Chennai", // District 1 in Tamil Nadu
                    "children": [
                        {"name": "Tondiarpet", "children": generateVillages(["Mannadi", "Vyasarpadi", "Mint", "Royapuram", "Washermanpet"])},
                        {"name": "Mylapore", "children": generateVillages(["Triplicane", "Thiruvanmiyur", "Kotturpuram", "Adyar", "Mandaveli"])},
                        {"name": "Teynampet", "children": generateVillages(["Nandanam", "Kodambakkam", "T. Nagar", "Saidapet", "West Mambalam"])},
                        {"name": "Guindy", "children": generateVillages(["Velachery", "Madipakkam", "Pallikaranai", "St. Thomas Mount", "Nanganallur"])},
                        {"name": "Alandur", "children": generateVillages(["Kilkattalai", "Meenambakkam", "Pammal", "Chromepet", "Tambaram"])}
                    ]
                }
            ]
        },
        // Add Karnataka and Maharashtra with similar structure
    ]
};

// Function to generate villages for each mandal
function generateVillages(villageNames) {
    return villageNames.map(name => ({ "name": name }));
}
