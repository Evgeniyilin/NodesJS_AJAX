let xhttp = new XMLHttpRequest();
let a = 0;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText)
    }
}

xhttp.open("GET"), "http://192.168.2.107", true);
xhttp.send();

function myFunction(data) {
    a = data;
    console.log(data);
}

let xhttp2 = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction2(this.responseText)
    }
}

xhttp2.open("POST"), "http://192.168.2.107", true);
xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoden");
xhttp.send();

function myFunction2(data) {
    console.log('POST');
    a = data;
    console.log(data);
}
