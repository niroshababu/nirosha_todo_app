// function ajax(){
//     //Creating an XHR object
    
//     var xhttp = new XMLHttpRequest();
    
//     //event listener 
    
//     xhttp.onreadystatechange = function(){
//         //condition
//         if(this.readyState==4 && this.status==200){
//             var response = JSON.parse(this.responseText);
//             var output ="";
//             var status ="";
//             for(var i=0;i<response.length;i++){
//                 output += "<input type='checkbox' id='"+response[i].id+"'>"+response[i].title+"<br>";
//                  status += +response[i].completed+ "<br>";
//             }
//             document.getElementById("demo").innerHTML = output;
            
//             console.log(status.value);
//             if(status.value=="true"){
//                 document.getElementById("checkbox").innerHTML = status;
//             }
//         }
//     }
//     xhttp.open("GET","https://jsonplaceholder.typicode.com/todos", true);
//     xhttp.send();
//     }


// function ajax(){
//     //Creating an XHR object
    
//     var xhttp = new XMLHttpRequest();
    
//     //event listener 
    
//     xhttp.onreadystatechange = function(){
//         //condition
//         if(this.readyState==4 && this.status==200){
//             var response = JSON.parse(this.responseText);
            
//             var output ="<table border='1px'><tr><th>Title</th><th>Completed</th></tr>";
//             for(var i=0;i<response.length;i++){
//             if(response[i].completed)
            
//             				output += "<tr><td>"+response[i].title+"</td><td><input type='checkbox' disabled  class='todolist' checked id='"  +response[i].id+"'></td></tr>";
//             else
//           				output += "<tr><td>"+response[i].title+"</td><td><input type='checkbox' class='todolist' id='" +response[i].id+"'></td></tr>";
//             }
//             output += "</table>"
//             document.getElementById("demo").innerHTML += output;
//         }  
        
//     };
//     xhttp.open("GET","https://jsonplaceholder.typicode.com/todos", true);
//     xhttp.send();
//     }



function ajax(){
    //Creating an XHR object
    
    var xhttp = new XMLHttpRequest();
    
    //event listener 
    
    xhttp.onreadystatechange = function(){
        //condition
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var output ="<div class='row justify-content-center'><table class='table  table-striped table-sm col-md-4' ><tr><th>Task</th><th>Status</th></tr>";
            for(var i=0;i<response.length;i++){
            if(response[i].completed)
            				output += "<tr><td>"+response[i].title+"</td><td><input type='checkbox' class='todolist' checked disabled id='"+response[i].id+"'></td></tr>";
            else
          				    output += "<tr><td>"+response[i].title+"</td><td><input type='checkbox' class='todolist' id='"+response[i].id+"'></td></tr>";
            }
            output += "</table></div>"
            document.getElementById("demo").innerHTML += output;
            
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
    }




