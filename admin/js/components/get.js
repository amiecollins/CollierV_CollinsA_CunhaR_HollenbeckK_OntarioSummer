import get from '../../getdata.php'

export function getTable(query) {
    if (query.length == 0) {
        return null;
    } else {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var result = JSON.parse(get.get_file(query));
                return result;
            }
        };
        xmlhttp.open("GET", query, true);
        xmlhttp.send();
    }
}