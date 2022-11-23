var test=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Style.css">
    <title>booktest</title>
</head>
<body style="display:flex; align-items: center; justify-content:center; justify-items: center;">
    <div id="mainbox">Book Your Test
        <div id="name" class="bookt"><input type="text" placeholder="Name"></div>
        <div id="phone" class="bookt"><input type="text" placeholder="Phone Number"></div>
        <div id="email" class="bookt"><input type="text" placeholder="Email"></div>
        <div id="testname" class="bookt"><input type="text" placeholder="Test Name"></div>
        <div id="date" class="bookt"><input type="text" placeholder="Slot Booking Date"></div>
        <div id="state" class="bookt"><input type="text" placeholder="State"></div>
        <div id="city" class="bookt"><input type="text" placeholder="City"></div>
        <div id="submit"><button style="background-color:blue; border-radius: 5px;">Submit</button></div>
    </div>
    
</body>
</html>`
var home=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>home</title>
</head>
<body>
    <div id="mainimage"><img src="homepage.jpg" alt="" height="vh"410 width="550"><img src="homepage2.jpg" alt="" height="410vh" width="auto"></div>

    
</body>
</html>`
var book=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>consult</title>
</head>
<body>
    <div style="display: flex; flex-direction: column;justify-content: space-between;height: 140vh;">
        <div>01. Select your City</div>
        <div style="font-size: 10px;">Private online consultants with verified doctors in all specialists</div>
        <div><img src="cities.jpg" alt="" style="height: 200px; width: auto;"></div>
        <div>02. Select Speciality</div>
        <div style="font-size: 10px;">Private online consultants with verified doctors in all specialists</div>
        <div><input type="text"></div>
        <div>03. Select the Hospital near you</div>
        <div style="font-size: 10px;">Select the near by hospitals you would like to book the Appointment</div>
        <div><select id="pet-select">
            <option value="">--Please choose Hospital--</option>
            <option value="appolo">Appolo</option>
            <option value="medivision">Medivision</option>
            <option value="rush">Russh</option>
            
        </select></option></div>
        <div><select id="pet-select">
            <option value="">--Please choose Clinics</option>
            <option value="appolo">Appolo</option>
            <option value="medivision">Medivision</option>
            <option value="rush">Russh</option>
            
        </select></option></div>
        
        <div ><button style="height:35px ; width: 70px; background-color: green; border-radius: 5px;" >Continue</button></div>


    </div>
    
</body>
</html>`
var medicine=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>medicine</title>
</head>
<body>
    <div style="height:58vh;"><img src="medicine.jpg" alt=""></div>
    
</body>
</html>`
var consult=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consult</title>
</head>
<body style="background-color:whitesmoke ;">
    <div><b>Online Doctor Consultation</b></div>
    <div><input type="text" placeholder="&#128269" style="width: 50vw;"></div>
    <div>Search above for Doctors and Specialities</div>
    <div style="padding-top: 20px;"><b>Popular Cities</b></div>
    <div style="display: flex; flex-direction: row;">
    <div ><button class="b" style="height: 20px; width: 80px; padding-right: 10px; color: rgb(0, 128, 115);">Hyderabad</button></div>
    <div><button class="b" style="height: 20px; width: 80px; padding-right: 10px; color: rgb(0, 128, 115);">New Delhi</button></div>
    <div><button class="b" style="height: 20px; width: 80px; padding-right: 10px;color: rgb(0, 128, 115); ">Chennai</button></div>
    <div><button class="b" style="height: 20px; width: 80px; padding-right: 10px;color: rgb(0, 128, 115);">Chandigarh</button></div></div>
    <div><img src="consult1.jpg" alt="" style="height: 50vh; width: auto; padding-top: 25px;"></div>

    


    
</body>
</html>`
var pages={
    'home': home,
    'book': book,
    'consult': consult,
    'medicine': medicine,
    'test': test,
};

function getPageContent(page){
    var contentToReturn;
    switch(page){
        case 'book':
            contentToReturn=pages.book;
            break;
        case 'consult':
            contentToReturn=pages.consult;
            break;
        case 'medicine':
            contentToReturn=pages.medicine;
            break;
        case 'test':
            contentToReturn=pages.test;
            break;
        default:
            contentToReturn=pages.home;
            break;
    }
    document.getElementById('content').innerHTML=contentToReturn;
}