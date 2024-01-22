let kelioniuInformacija = [
    {
      marsrutas: "Vilnius - Kaunas",
      isvykimoData: "2024-01-22 11:15",
      kelionesTrukme: "01:10",
      atvykimoData: "2024-01-22 12:25",
      atstumas:100
    },
    
    {
      marsrutas: "Vilnius - Trakai",
      isvykimoData: "2024-01-22 10:15",
      kelionesTrukme: "00:30",
      atvykimoData: "2024-01-22 10:45",
      atstumas: 20
    },
    
    {
      marsrutas: "Vilnius - Klaipeda",
      isvykimoData: "2024-01-22 06:00",
      kelionesTrukme: "03:00",
      atvykimoData: "2024-01-22 09:00",
      atstumas: 320
    },
    
    {
      marsrutas: "Vilnius - Siauliai",
      isvykimoData: "2024-01-22 08:10",
      kelionesTrukme: "02:10",
      atvykimoData: "2024-01-22 10:20",
      atstumas: 210
    },
    
    {
      marsrutas: "Vilnius - Varena",
      isvykimoData: "2024-01-23 11:00",
      kelionesTrukme: "01:00",
      atvykimoData: "2024-01-23 12:00",
      atstumas: 45
    }
  ];
  //Pasirinkto marsruto informacija
  function marsrutoKelionesInformacija(index) {
    if (index >= 0 && index < kelioniuInformacija.length) {
      const kelione = kelioniuInformacija[index];
      console.log("Marsrutas:", kelione.marsrutas);
      console.log("Išvykimo data:", kelione.isvykimoData);
      console.log("Kelionės trukmė:", kelione.kelionesTrukme);
      console.log("Atvykimo data:", kelione.atvykimoData);
    }
  }
  
  marsrutoKelionesInformacija(1);


  //Ilgiausios keliones atstumas
  function rastiIlgiausiasAtstuma() {
    let ilgiausiasAtstumas = 0;
    let ilgiausiasAtstumasIndex = -1;
  
    kelioniuInformacija.forEach((kelione, index) => {
      if (kelione.atstumas > ilgiausiasAtstumas) {
        ilgiausiasAtstumas = kelione.atstumas;
        ilgiausiasAtstumasIndex = index;
      }
    });
  
    return ilgiausiasAtstumasIndex;
  }
  
  const ilgiausiasAtstumasIndex = rastiIlgiausiasAtstuma();
  
  if (ilgiausiasAtstumasIndex !== -1) {
    const ilgiausiosDistancijosKelione = kelioniuInformacija[ilgiausiasAtstumasIndex];
    console.log("Ilgiausias kelionės atstumas:", ilgiausiosDistancijosKelione.atstumas, "km");
  };


//   Trumpiausios keliones visa informacija

function rastiTrumpiausiasAtstuma() {
    let trumpiausiasAtstumas = Infinity;
    let trumpiausiasAtstumasIndex = -1;
  
    kelioniuInformacija.forEach((kelione, index) => {
      if (kelione.atstumas < trumpiausiasAtstumas) {
        trumpiausiasAtstumas = kelione.atstumas;
        trumpiausiasAtstumasIndex = index;
      }
    });
  
    return trumpiausiasAtstumasIndex;
  }
  
  const trumpiausiasAtstumasIndex = rastiTrumpiausiasAtstuma();
  
  if (trumpiausiasAtstumasIndex !== -1) {
    const trumpiausiosDistancijosKelione = kelioniuInformacija[trumpiausiasAtstumasIndex];
    console.log("Trumpiausias kelionės atstumas: ${trumpiausiosDistancijosKelione.atstumas} km | Marsrutas: ${trumpiausiosDistancijosKelione.marsrutas} | Išvykimo data: ${trumpiausiosDistancijosKelione.isvykimoData} | Kelionės trukmė: ${trumpiausiosDistancijosKelione.kelionesTrukme} | Atvykimo data: ${trumpiausiosDistancijosKelione.atvykimoData}");
  };
  

  //Ilgiausios keliones visa informacija


const longestRoute = kelioniuInformacija.reduce((max, kelione) => (kelione.atstumas > max.atstumas ? kelione : max), kelioniuInformacija[0]);

console.log(`Ilgiausias kelionės maršrutas: ${longestRoute.marsrutas} | Išvykimo data: ${longestRoute.isvykimoData} | Kelionės trukmė: ${longestRoute.kelionesTrukme} | Atvykimo data: ${longestRoute.atvykimoData} | Atstumas: ${longestRoute.atstumas} km`);



//Keliones kurios trtuko ilgiau, nei para

function marsrutasKurisIlgesnisNeiPara() {
    kelioniuInformacija.forEach((kelione) => {
        const [hours, minutes] = kelione.kelionesTrukme.split(':');
        
        const trukmeInMinutes = parseInt(hours) * 60 + parseInt(minutes);

        if (trukmeInMinutes > 24 * 60) {
            console.log(`Marsrutas: ${kelione.marsrutas} | Kelionės trukmė: ${kelione.kelionesTrukme}`);
        }
    });
}