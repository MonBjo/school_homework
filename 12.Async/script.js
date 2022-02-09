letsDance("polka");
letsDance("foxtrott");

function letsDance(danceStyle) {
    let willDance = new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(danceStyle == "polka") {
                resolve("Yes, polka is my thing!");
            } else {
                reject("No, not even when this pandemic is over, would I dance " + danceStyle + " with you.");
            }
        }, 1000); // 1 second
    });
    
    console.log("willDance", willDance);
    
    willDance.then(function(value) {
        console.log("resolve: ", value);
    }).catch(function(value) {
        console.log("reject: ", value);
    });
}



webProject();

function webProject(){
    let doWebProject = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Researcha målgruppen"), 4000);
    }).then(function(progress) {
        console.log(progress);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Skissa upp en design på papper"), 2000);
        });
    }).then(function(progress) {
        console.log(progress);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Gör skissen till pixel perfect mockup I Figma / XD"), 3000);
        });
    }).then(function(progress) {
        console.log(progress);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Koda"), 3000);
        });
    }).then(function(progress) {
        console.log(progress);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Stackoverflow:a fel"), 1000);
        });
    }).then(function(progress) {
        console.log(progress);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Testa produkten"), 2000);
        });
    }).then(function(progress) {
        console.log(progress);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Fira lyckat projekt"), 1000);
        });
    }).then(function(progress) {
        console.log(progress);
    });

    console.log("doWebProject: ", doWebProject);
}