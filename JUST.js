  //Fire store part 
  var config = {
    apiKey: "AIzaSyAMBINMcRp7uLSbDA-hT3P2A6MWLbKRYso",
    authDomain: "wedding-cbec7.firebaseapp.com",
    databaseURL: "https://wedding-cbec7.firebaseio.com",
    projectId: "wedding-cbec7",
    storageBucket: "wedding-cbec7.appspot.com",
    messagingSenderId: "226844456761"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();
  doc = firestore.doc("Wishcards/wish");
  //Normal Function 
  var but = document.querySelector("#submit");
  var wish = document.querySelector("#wish");

  but.addEventListener("click", function () {

    const wish_value = wish.value;
    doc.add({
      wish: wish_value

    }).catch(function (error) {
      console.error("Error adding document: ", error);
    });
    var setWithMerge = doc.set({
      capital: true
  }, { merge: true });

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



































  body{
    width: 100%;
    height: 100%;

}
#bottom_line{
    width: 100%;
    height: 70px;
   
    bottom: 0;
   /* background: linear-gradient(95deg, #f900da, #ffeff3);*/
    background-size: 400% 400%;
    
    -webkit-animation: AnimationName 38s ease infinite;
    -moz-animation: AnimationName 38s ease infinite;
    animation: AnimationName 38s ease infinite;
    
    @-webkit-keyframes AnimationName {
        0%{background-position:0% 32%}
        50%{background-position:100% 69%}
        100%{background-position:0% 32%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 32%}
        50%{background-position:100% 69%}
        100%{background-position:0% 32%}
    }
    @keyframes AnimationName { 
        0%{background-position:0% 32%}
        50%{background-position:100% 69%}
        100%{background-position:0% 32%}
    }
    position: fixed;
}

#story_section{
    margin-bottom: 70px;
    padding-top: 15px;
    padding-bottom: 15px;
}
#photos_section{
    margin-bottom: 70px;
    padding-top: 15px;
    padding-bottom: 15px;
}
#bottom_line_contents{
    
    text-align: center;
    vertical-align: middle;
    
    font-size: 20px;
    color: #fff;
}
.navbar{
   
    width: 100%;
    margin-left: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

   
    
   

}
.card{
    width: 200px;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: pink;
    margin-left: 5px;
    color: #000;
    font-family: 'Clicker Script', cursive;
    font-style: bold;
    font-size: 24px;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
#hero_div{
    background-image: url("1.jpg");
     background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 565px;
    
}
.wish_content{
    margin-bottom: 70px;
    padding-top: 15px;
    padding-bottom: 15px;
}
#text{
    margin-top: 65px;
    text-align: center;
    vertical-align: middle;
    
    font-size: 70px;
    font-family: 'Clicker Script', cursive;
    color: #fff;
}
#story_text{
    font-family: 'Clicker Script', cursive;
    
    text-align: center;
}

/* Heartin css */


.bg_heart{position:relative;top:0;left:0;width:100%;height:100%;overflow:hidden}

.heart{position:absolute;top:-50%;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-m-transform:rotate(-45deg);transform:rotate(-45deg)}
.heart:before{position:absolute;top:-50%;left:0;display:block;content:"";width:100%;height:100%;background:inherit;border-radius:100%;}
.heart:after{position:absolute;top:0;right:-50%;display:block;content:"";width:100%;height:100%;background:inherit;border-radius:100%;}

@-webkit-keyframes love {
  0%{top:110%}
}
@-moz-keyframes love {
  0%{top:110%}
}
@-ms-keyframes love {
  0%{top:110%}
}
@keyframes love {
  0%{top:110%}
}
