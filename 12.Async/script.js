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