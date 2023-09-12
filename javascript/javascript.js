
var arr = []
var arr_oldtask = []
var arr_tasktask = []
var arr_comptask = []

var obj;
var index = 0;
var index1 = 0;
var index2 = 0;
var row, cell1, cell2, cell3, cell4
var Taskname = document.getElementById("Taskname");
var date = document.getElementById("date")
function input() {
    var x = document.getElementById("input");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function search() {
    var x = document.getElementById("search");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
document.querySelector("#erase").addEventListener("click", function () {
    Taskname.value = "";
    date.value = "";
})
document.querySelector("#tick").addEventListener("click", function () {
    if (Taskname.value.trim() == "" || date.value == "") {
        document.querySelector("#alert").style.display = "block"
        document.querySelector("#alert").style.color = "red"
    }
    else {
        document.querySelector("#alert").style.display = "none"
    }
    arr.push(Taskname.value)
})
document.getElementById("tick").addEventListener("click", function () {

    var table = document.querySelector("#taskTable1");

    if (Taskname.value.trim() != "" && date.value != "") {
        row = table.insertRow();
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);

        cell1.innerHTML = Taskname.value;
        cell2.innerHTML = date.value;
        cell3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  class="bi bi-pen-fill" viewBox="0 0 16 16">
                             <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                            </svg>`
        cell4.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onclick="deleteRow(this)" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>`
    }
    // obj = {
    //     name: cell1.innerHTML

    // }
    arr_tasktask[index1] = cell1.innerHTML;
    index1++;
    row.addEventListener("click", function () {
        var comp_table = document.querySelector("#comp_table");
        var row = comp_table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);


        cell1.innerHTML = this.cells[0].innerHTML;
        cell2.innerHTML = this.cells[1].innerHTML;

        arr_comptask[index2] = cell1.innerHTML;
        index2++;

        var svg = document.querySelector("#svg").textContent
        var span = document.querySelector("#span").textContent

        if (arr_comptask.length == 2) {

            span = "50 %"
            svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-battery-half" viewBox="0 0 16 16">
            <path d="M2 6h5v4H2V6z"/>
            <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
          </svg>`
        }

        else if (arr_comptask.length <= 1) {
            span = "25%";
            svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-battery-half" viewBox="0 0 16 16">
    <path d="M2 6h5v4H2V6z"/>
    <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
  </svg>`
        }
        else if (arr_comptask.length >= 3) {
            span = "75%";
            svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-battery-half" viewBox="0 0 16 16">
<path d="M2 6h5v4H2V6z"/>
<path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
</svg>` }
        else if (arr_comptask.length == arr_tasktask.length) {
            span = "100%"
            svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-battery-full" viewBox="0 0 16 16">
    <path d="M2 6h10v4H2V6z"/>
    <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
  </svg>`
        }
        else {
            span = "0%";
            svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-battery" viewBox="0 0 16 16">
<path d="M0 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2zm14 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
</svg>`
        }

    })

    var date1 = new Date();
    var date2 = new Date(date.value);

    if (date1 > date2) {
        var table = document.querySelector("#old_table");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = Taskname.value;
        cell2.innerHTML = date.value;


        arr_oldtask[index] = cell1.innerHTML;
        index++;


    }



});






document.querySelector("#search1").addEventListener("change", function () {
    var searchText = document.getElementById("search1");
    var table = document.querySelector("tbody").children;
    var taskTable2 = document.querySelector("#taskTable2");

    document.querySelector("#taskTable1").style.display = "none"
    document.querySelector("#taskTable2").style.display = "block"

    for (let x in arr) {
        if (searchText.value == arr[x]) {

            var row = taskTable2.insertRow();
            var c = table[x].innerHTML;
            row.innerHTML = c
        }
    }

})
function display() {
    document.querySelector("#taskTable1").style.display = "block"
    document.querySelector("#taskTable2").style.display = "none"

}



function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;


    if (document.getElementById("taskTable1").rows[i].cells[1].innerHTML == document.getElementById("old_table").rows[i].cells[1].innerHTML) {

        document.getElementById("taskTable1").deleteRow(i);
        document.getElementById("old_table").deleteRow(i);
    }





}


document.querySelector("#id").addEventListener("click", function () {
    console.log(arr_tasktask)
    console.log(arr_comptask)
})
