function modify(data) {
    let boxList = document.getElementsByClassName("box"),
    indBox = document.getElementById(data);
    console.log(indBox.id, data);
    for(let i=0; i<boxList.length; i++) {
        console.log(boxList[i])
        if(boxList[i].id==data) {
           
            boxList[i].style.height = "200px"
        }else {
            boxList[i].style.height = "55px"
        }
    }
}