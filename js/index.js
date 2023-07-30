var siteNameInput=document.getElementById("siteName");
var siteUrlInput=document.getElementById("siteUrl");
var dataContainer=[];

if(localStorage.getItem('data')!=null){
    dataContainer=JSON.parse(localStorage.getItem('data'));
    displayData(dataContainer);
}

function addData(){
if(validation()){
    var data={
        name:siteNameInput.value,
        url:siteUrlInput.value,
   }
   dataContainer.push(data);
   localStorage.setItem('data',JSON.stringify(dataContainer))
   console.log(dataContainer);
   displayData(dataContainer);
   
}
   clear();
  
}

function clear(){
    siteNameInput.value="";
    siteUrlInput.value="";
}

function displayData(arr){
    var box=``;
    for(var i=0; i<arr.length; i++ ){
        box+=`<tr>
        <td>${i+1}</td>
     <td>${arr[i].name}</td>
     <td><a href="#" target="_blank"><button class="btn btn-warning" onclick="visitSite(${i})";><i class="fa-solid fa-eye"></i>Visit</button></a></td>
     <td><a href="#"><button class="btn btn-success" onclick="deleteData(${i})";> <i class="fa-solid fa-trash"></i> Delete</button></a></td>
    </tr>`

    }
   
    document.getElementById("tableBody").innerHTML=box;
}

function deleteData(dataindex){
    dataContainer.splice(dataindex,1);
    localStorage.setItem("data",JSON.stringify(dataContainer))
    displayData(dataContainer);
    console.log(dataContainer);
}

function validation(){
    var regex=/^((http|https):\/\/)?\w+\.\w[A-Za-z0-9]{2,9}.[a-z]{1,}$/
    var letters = /^[A-Za-z]{2,}$/;
var bookmarkName=siteNameInput.value;
var bookmarkUrl=siteUrlInput.value;
    if(letters.test(bookmarkName) && regex.test(bookmarkUrl)){
        siteNameInput.classList.add("is-valid");
        siteUrlInput.classList.add("is-valid");
        return true;
     }

    else{
        alert("Site name must contain at least 3 characters");
        alert("Site URL must be a valid one");
        siteNameInput.classList.replace("is-valid","is-invalid");
        siteUrlInput.classList.replace("is-valid","is-invalid");
        return false;

}
}

function visitSite(i){
    window.open(dataContainer[i].url)
}
   



   
       
     
  
     

