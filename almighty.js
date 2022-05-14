

const almightyArray = [];
const image = `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(@@@@((##&&/(#&&%%,,,,,  ,,,,(,,,(,,,,(,,,(,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(##&%%(#&&%%%,,(,,  ,,,,,,,,,,,,,,,,,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(@&%%%(&&%%%%%%&&&&@@,,,,,,,,,,,,,,,,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@((,,,,///&@%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#,,,((,,,@@@@@,,,@/////@#,,,,,,,,,,,,,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,//#((@,,,/@***//@/##@,@////,,,,,,,,////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%,*##((,,,,,,,/@@@@/***#,////,,,,,,/////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##//#((,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,/@((,,,,,,,,,,,,,,,,,,,,,%%,,,,,%%,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%,/#(,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%#%,(/,,,,,,,,,,,,,,,,,,,,,,,,,,,/,,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%##,@,,,,,,,,,,,,,,,,,,,,##,,,,,##,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%##%#,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%@%%%%%%%%%%%###@(,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%@%%%%%%#####/,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%@#%####@/,,,,,,,,,,,,,,,,,,,,,,,,,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%&@//,,,,,,,,,,,,,,,,,,,,,,,,,@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%,,,,,,#//////@,,,,`;

let line0 = '';
let line1 = '';
let line2 = '';
let line3 = '';
let line4 = '';
let line5 = '';
let line6 = '';
let line7 = '';
let line8 = '';
let line9 = '';
let line10 = '';
let line11 = '';
let line12 = '';
let line13 = '';
let line14 = '';
let line15 = '';
let line16 = '';
let line17 = '';
let line18 = '';
let line19 = '';
let line20 = '';
let line21 = '';
let line22 = '';
let line23 = '';
let line24 = '';
let line25 = '';
let line26 = '';
let line27 = '';
let line28 = '';
let line29 = '';
let line30 = '';
let line31 = '';
let line32 = '';

for(let j=0;j<image.length;j++){
   
    if(j<80){
        line0 += image[j];
    }
    if(j>80 && j<160){
        line1 += image[j];
    }
    if(j>160 && j<240){
        line2 += image[j];
    }
    if(j>240 && j<320){
        line3 += image[j];
    }
    if(j>320 && j<400){
        line4 += image[j];
    }
    if(j>400 && j<480){
        line5 += image[j];
    }
    if(j>480 && j<560){
        line6 += image[j];
    }
    if(j>560 && j<640){
        line7 += image[j];
    }
    if(j>640 && j<720){
        line8 += image[j];
    }
    if(j>720 && j<800){
        line9 += image[j];
    }
    if(j>800 && j<880){
        line10 += image[j];
    }
    if(j>880 && j<960){
        line11 += image[j];
    }
    if(j>960 && j<1040){
        line12 += image[j];
    }
    if(j>1040 && j<1120){
        line13 += image[j];
    }
    if(j>1120 && j<1200){
        line14 += image[j];
    }
    if(j>1200 && j<1280){
        line15 += image[j];
    }
    if(j>1280 && j<1360){
        line16 += image[j];
    }
    if(j>1360 && j<1440){
        line17 += image[j];
    }
    if(j>1440 && j<1520){
        line18 += image[j];
    }
}
almightyArray.push(line0);
almightyArray.push(line1);
almightyArray.push(line2);
almightyArray.push(line3);
almightyArray.push(line4);
almightyArray.push(line5);
almightyArray.push(line6);
almightyArray.push(line7);
almightyArray.push(line8);
almightyArray.push(line9);
almightyArray.push(line10);
almightyArray.push(line11);
almightyArray.push(line12);
almightyArray.push(line13);
almightyArray.push(line14);
almightyArray.push(line15);
almightyArray.push(line16);
almightyArray.push(line17);
almightyArray.push(line18);


const almightyPush = function(){
    console.log('This world');
    setTimeout(function(){
        console.log('shall know')
    },1000);
    setTimeout(function(){
        console.log('pain........')
    },2000);
    setTimeout(function(){
        console.log('All mightyyyyyy puuuuuuussh!')
    },7000);
    i = 0;
    setTimeout(function(){
        setInterval(function(){
            if(almightyArray[i] === undefined){
                return;
            }
            console.log(almightyArray[i]);
            i++
            },100)
    },9000)
}

almightyPush();