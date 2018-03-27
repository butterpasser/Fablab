var name1,class1,phone1,email1,time1,time3,date1,req;
function book(id){
req=id;

swal({
  title:'Book Your Slot',
  html:'<label for="Name">Name</label><input type="text" name="Name" id="Name2" ><br>'+
  '<label for="Class">Class</label><input type="text" name="class" id="class2"><br>'+
  '<label for="Phone">Phone</label><input type="text" name="Email" id="Email2" /><br>'+
  '<label for="Email">Email</label><input type="text" name="phone" id="phone2" /><br>'+
  '<label for="Time">Start Time</label><input type="time" name="time" id="time2"><br>'+
  '<label for="Time">End Time(approx)</label><input type="time" name="endtime" id="time4"><br>'+
  '<label for="date">Date</label><input type="date" name="date" id="date2" size="12"/><br>',
  footer: '<a href="load.html"><font color="blue"><center>Click here to verify availability before submiting</center></font></a>',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Submit'
}).then((result) => {
  getfile()
  if (result.value) 
  {
  swal({
  type: 'success',
  title: 'Submitted Successfully',
  html:'<font size="2">You can use the FABLAB after recieving the confirmation mail</font>',
  showConfirmButton: false,
  timer: 5000
})
  }
})

};

function getfile()
{
name1=document.getElementById('Name2').value;
class1=document.getElementById('class2').value;
phone1=document.getElementById('Email2').value;
email1=document.getElementById('phone2').value;
time1=document.getElementById('time2').value;
time3=document.getElementById('time4').value;
date1=document.getElementById('date2').value;
date1=convertDate(date1); 
document.getElementById("Name").value = name1; 
document.getElementById("class").value = class1; 
document.getElementById("Email").value = email1; 
document.getElementById("phone").value = phone1; 
document.getElementById("req").value = req; 
document.getElementById("time").value = time1; 
document.getElementById("endtime").value = time3;
document.getElementById("date").value = date1;      
name1=document.getElementById('Name').value;
document.getElementById("myForm").submit();
postContactToGoogle();
};

 function convertDate(dateString){
var p = dateString.split(/\D/g)
return [p[2],p[1],p[0] ].join("-")
};


     

function contact()
{

swal({
   html:'<p><font size=2>Incharge : Pradeep<br>Phone: +91 919447875463<br>Webmaster : Nikhil M Jeby<br>Phone: +91 8156915169<br>email: fablabmec@gmail.com</font></p>',
  footer: '<a href="load.html"><font color="blue"><center>Click here to verify your booking status.</center></font></a>',
   showConfirmButton: false
})
}

