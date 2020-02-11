export default function(query) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType("application/json");

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var result = xmlhttp.responseText;
            
            console.log(result);
        }
    }
    var data = "/admin/getdata.php";
    xmlhttp.open("GET", data, true);
    

    xmlhttp.send();

}
