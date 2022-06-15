function menu(link){
    if(link ===1){
        home();
    }else if(link ===2){
        about();
    }else if(link ===3){
        blog();
    }else if(link ===4){
        portfolio();
    }else if(link ===5){
        team();
    }else if(link ===6){
        contact();
    }
}

function home(){
    document.location.href = "index.html";
}
function about(){
    fetch('templates/about.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector("#main").innerHTML = data;
    });
}
function blog(){
    fetch('templates/blog.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector("#main").innerHTML = data;
    });
}
function portfolio(){
    fetch('templates/portfolio.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector("#main").innerHTML = data;
    });
}
function team(){
    fetch('templates/team.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector("#main").innerHTML = data;
    });
    //$( "#team2" ).load( "templates/team.html");
}
function contact(){
    fetch('templates/contact.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector("#main").innerHTML = data;
    });
}