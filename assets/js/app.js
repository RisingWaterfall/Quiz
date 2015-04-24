$(document).ready(function () { //Begin document ready function

  var location = [   // Question/answer pool object
      {quest:"Andahuaylas", answ:"SPHY"},
      {quest:"Ayacucho", answ:"SPHO"},
      {quest:"Chimbote", answ:"SPEO"},
      {quest:"Arequipa", answ:"SPQU"},
      {quest:"Cajamarca", answ:"SPJR"},
      {quest:"Callao", answ:"SPIM"},
      {quest:"Cusco", answ:"SPZO"},
      {quest:"Huanuco", answ:"SPNC"},
      {quest:"Tingo Maria", answ:"SPGM"},
      {quest:"Pisco", answ:"SPSO"},
      {quest:"Jauja", answ:"SPJJ"},
      {quest:"Trujillo", answ:"SPRU"},
      {quest:"Chiclayo", answ:"SPHI"},
      {quest:"Yurimaguas", answ:"SPMS"},
      {quest:"Andoas", answ:"SPAS"},
      {quest:"Iquitos", answ:"SPQT"},
      {quest:"Puerto Maldonado", answ:"SPTU"},
      {quest:"Moquegua", answ:"SPEQ"},
      {quest:"Ilo", answ:"SPLO"},
      {quest:"Piura", answ:"SPUR"},
      {quest:"Talara", answ:"SPYL"},
      {quest:"Juliaca", answ:"SPJL"},
      {quest:"Tarapoto", answ:"SPST"},
      {quest:"Tacna", answ:"SPTN"},
      {quest:"Tumbes", answ:"SPME"},
      {quest:"Pucallpa", answ:"SPCL"}
  ];

  var test = function (){ //Begin random question/answer selection

  var math = Math.floor(Math.random() * location.length);

 question = location[math].quest;

 answer = location[math].answ;
  $("#quiz").text("Cual es el codigo de " + question + "?");

}// End random question/answer selection

  var trigger = function (){ // Begin correct /incorrect function

      var capture = $("#textArea").val().toUpperCase();

         if (capture == answer ){

            //alert("bravo");
            $("#textArea").val("");
            $("#correct").fadeIn("slow");
            $("#correct").delay("600");
            $("#correct").fadeOut("slow");
            test();
       } else {

            //alert("fail");
            $("#incorrect").fadeIn("slow");
            $("#incorrect").delay("600");
            $("#incorrect").fadeOut("slow");
           }
}; // End correct /incorrect function
$("#textArea").watermark("SPIM"); //Add watermark to code input
$("#textArea").keypress(function(e){
  if(e.which == 13) {
        trigger();
    }
});
$("#textButton").click(trigger); // Button on click trigger function


test(); //Begin page with random question/answer
}); //End document ready function
