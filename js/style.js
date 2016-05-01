var jq=jQuery.noConflict();
var subjectCount = 0;
var objetivoCount = 0;



function addFuncObjetivo()
{
  var newObjetivo = document.createElement('div');
  var objetivoInput = "<div class='input-group'>";
  objetivoInput += "<div><strong>X" + (objetivoCount + 1) + "<strong></div>";
  objetivoInput += "<input type='text' class='tooltipped' placeholder='Para digitar: 3x, digite : 3' id='objetivo"+objetivoCount + "'/>";
  objetivoInput += "</div>";
  newObjetivo.innerHTML = "<div class='form-group col s4'>" + objetivoInput + "</div>";
  document.getElementById("object").appendChild(newObjetivo);
  objetivoCount++;
}



function addSubjects()
{
  var newSubject = document.createElement('div');
  var subjectInput = "<div class='input-group'>";
  subjectInput += "<div><strong>F" + (subjectCount + 1) + "<strong></div>";
  subjectInput += "<input type='text' class='tooltipped' placeholder='Para digitar: 3x1 + 5x2, digite: 3;5' id='subject"+ subjectCount + "'/>";
  subjectInput += "</div>";
  var subjectSecondInput = "<div class='input-group'>";
  subjectSecondInput += "<div class='input-group-addon'><strong>&le;<strong></div>";
  subjectSecondInput += '<input type="text" class="form-control" id="subjectTyped' + subjectCount + '" value="0"/>';
  subjectSecondInput += "</div>";
  newSubject.innerHTML = "<div class='form-group col s4'>" + subjectInput + subjectSecondInput + "</div>";
  document.getElementById("subjects").appendChild(newSubject);
  subjectCount++;
}

(function($) {
  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });
})(jQuery);
