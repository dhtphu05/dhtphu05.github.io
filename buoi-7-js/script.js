
const inputRoomID = document.querySelector("#input-room-id");
const getPrintIDRoom=document.querySelector("#print-id-room");
const getJoinButton=document.querySelector("#join-button");

console.log(inputRoomID);
console.log(getPrintIDRoom);
console.log(getJoinButton);
console.log(getPrintIDRoom.innerHTML);
inputRoomID.addEventListener(
    "input",
    ()=>{
        
        getPrintIDRoom.innerHTML="ID Room: "+inputRoomID.value.toUpperCase();
    }
)
getJoinButton.addEventListener(
    "click",
    function () {
        if(inputRoomID.value.toUpperCase() == "ABCXYZ"){
            alert("dung id room");
        }
        else{
            alert("nhap sai");
        }
    }
)

