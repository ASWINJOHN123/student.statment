var selectedRow = null;
function onformsubmit(e){
    event.preventDefault();
    var formData = readformData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{

    }
}
//the data details
function readformData(){
    var formData = {};
    formData["reg_no"] = document.getElementById("reg_no").Value;
    formData["name"] = document.getElementById("name").Value;
    formData["dob"] = document.getElementById("dob").Value;
    formData["class"] = document.getElementById("class").Value;
    formData["devision"] = document.getElementById("devision").Value;
    formData["gender"] = document.getElementById("gender").Value;
    return formData;
}

//------
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.lenght);
    var cell1 = newrow.insertCell(0)
        cell1.innerHTML = data.reg_no;
    var cell2 = newrow.insertCell(1)
        cell2.innerHTML = data.name;
    var cell3 = newrow.insertCell(2)
        cell3.innerHTML = data.dob;
    var cell4 = newrow.insertCell(3)
        cell4.innerHTML = data.class;
    var cell5 = newrow.insertCell(4)
        cell5.innerHTML = data.devision;
    var cell6 = newrow.insertCell(5)
        cell6.innerHTML = data.gender;
    var cell7 = newrow.insertCell(6)
        cell7.innerHTML = '<button>edit</button> <button>delete</button>'
            

}