  //Fire store part 


  function myFunction() {
    document.getElementById("content").hide(); 
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").hide();
  document.getElementById("content").show();
}

  var config = {
    apiKey: "AIzaSyAMBINMcRp7uLSbDA-hT3P2A6MWLbKRYso",
    authDomain: "wedding-cbec7.firebaseapp.com",
    databaseURL: "https://wedding-cbec7.firebaseio.com",
    projectId: "wedding-cbec7",
    storageBucket: "wedding-cbec7.appspot.com",
    messagingSenderId: "226844456761"
  };
  firebase.initializeApp(config);
  var databaseref = firebase.database().ref('Wishes');
  var but = document.querySelector("#submit");
  var wish = document.querySelector("#wish");
  var personname = document.querySelector("#wished_person");

  databaseref.on('child_added', snap => {
    var namedisp = snap.child("name").val();
    var wishdisp = snap.child("wishcard").val();

    $("#tab").append("<tr><td class='card'>" + wishdisp + "</td></tr>");


  });
  but.addEventListener("click", function () {

    const wish_value = wish.value;
    const wishedperson_name = personname.value;
    var data = {
      wishcard: wish_value,
      name: wishedperson_name
    }
    databaseref.push(data);
    $("#wish").val("");
    $("#wished_person").val("");

  });


  // Heartin JS 
  var love = setInterval(function () {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

    $('.heart').each(function () {
      var top = $(this).css("top").replace(/[^-\d\.]/g, '');
      var width = $(this).css("width").replace(/[^-\d\.]/g, '');
      if (top <= -100 || width >= 150) {
        $(this).detach();
      }
    });
  }, 500);








