fetch('http://api.weatherstack.com/current?access_key=4ac248f8201c9ed0c586eca35bdc6bc8&query=New%20York').then(a =>a.json()).then(response=>{
            document.getElementById("clima").innerHTML="<table style='width:100%'>"+
                                                            "<thead>"+
                                                                "<tr>"+
                                                                    "<th> Name </th>"+
                                                                    "<th> Country </th>"+
                                                                    "<th> Lat </th>"+
                                                                    "<th> LocalTime </th>"+
                                                                    "<th> Lon </th>"+
                                                                "</tr>"+
                                                            "</thead>"+
                                                            "<tbody>"+
                                                                "<tr>"+
                                                                    "<td>"+response.location.name+ "</td>"+ 
                                                                    "<td>"+response.location.country+ "</td>"+
                                                                    "<td>"+response.location.lat+ "</td>"+ 
                                                                    "<td>"+response.location.localtime+ "</td>"+
                                                                    "<td>"+response.location.lon+ "</td>"+
                                                                "</tr>"+
                                                            "</tbody>"+
                                                            "</table> "});


            
fetch('http://api.weatherstack.com/current?access_key=4ac248f8201c9ed0c586eca35bdc6bc8&query=New%20York').then((response) => response.json()).then((data) => {console.log(data)});