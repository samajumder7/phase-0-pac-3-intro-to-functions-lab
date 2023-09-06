function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    return console.log(string.toUpperCase());
}
function logWhisper(string) {
    return console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    let greeting = "This is good music!";
 /*   switch (string) {
        case string.toLowerCase():
            greeting = "I can\'t hear you!";
            break;
        case string.toUpperCase():
            greeting = "YES INDEED!";
            break;
        case "Let's have dinner together!":
            greeting = "I would love to!"
            break;
    }*/
    if(string === string.toUpperCase()){
        return "YES INDEED!";
    } else if(string === string.toLowerCase()){
        return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
    return console.log(greeting);
}