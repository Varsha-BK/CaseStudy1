function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            var output = "";
            var n=0;
            for(var i=0;i<response.length;i++){
                if(response[i].completed==true){
                    output +=`<tr>
                <th scope="row">${response[i].id}</th>
                <td>${response[i].title}</td>
                <td><input type=checkbox checked disabled></td>
              </tr>`;
                }
                else{
                    output +=`<tr>
                    <th scope="row">${response[i].id}</th>
                    <td>${response[i].title}</td>
                    <td><input type=checkbox></td>
                  </tr>`;
                  n++;
                }
            }
            document.getElementById("demo").innerHTML=output;
        }
    }

    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function redirect(){
    window.location.href = "/index.html";
}