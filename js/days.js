var months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
}
function DaysCalc() {
    startDate = new Date(document.getElementById("startDate").value);
    endDate = new Date (document.getElementById("endDate").value);

    dt = endDate.getTime() - startDate.getTime();
    dd = dt/(1000 * 3600 * 24)
    if (isNaN(dd)) {
        document.getElementById("result").innerHTML = "Please check the entered dates and make sure they are valid."
    }else if (dd < 0) {
        document.getElementById("result").innerHTML = "Starting date is later than ending date"
    }else{
        document.getElementById("result").innerHTML = "<strong>" + dd + " days </strong> have elapsed between: " + startDate.getDate() + " " + months[startDate.getMonth()] + " " + startDate.getFullYear() + " and " + endDate.getDate() + " " + months[endDate.getMonth()] + " " + endDate.getFullYear()
    }

    return dd

}