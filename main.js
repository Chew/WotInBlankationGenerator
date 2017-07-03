var lines2 = [

["Wot in"],
 ["oxygen fixation",
 "lunch combination",
 "patient appreciation",
 "potion of regeneration",
 "strength vs concentration",
 "behavior expectations",
 "titration",
 "respiration",
 "hydration",
 "assassination",
 "calculation",
 "pollination",
 "constellation",
 "taxation without representation",
 "reincarnation",
 "quadratic equation",
 "immigration",
 "occupation",
 "operation",
 "confimnation",
 "registration",
 "alienation",
 "my nation",
 "activation",
 "procrastination",
 "anticipation",
 "relocation",
 "adoration",
 "transportation",
 "graduation",
 "congregation",
 "creation",
 "notation",
 "complication",
 "legalization",
 "representation",
 "location",
 "abbreviation",
 "justification",
 "application",
 "discoloration",
 "frustration"],

    ];

function changeMessage(){
    for(var i=0; i<3; i++){
            document.getElementById(i+"line").innerHTML=lines2[i][(Math.floor(Math.random()*lines2[i].length))];
    }
    document.getElementById("startBttn").textContent = "Again?";
}
