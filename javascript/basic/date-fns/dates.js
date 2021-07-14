function convertToIsoDate() {
    let date = new Date(2019, 10, 23, 15, 59, 47, 5250422)
       
    document.getElementById("txtDate").innerHTML = date;

    let dateISO = date.toISOString()

    document.getElementById("txtDateISO").innerHTML = dateISO;

    let fm = date.getMilliseconds()

    document.getElementById("txtFullMilliseconds").innerHTML = fm;

}