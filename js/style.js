var jq=jQuery.noConflict();
var subjectCount = 0;

function addSubjects()
{
  // Cria uma nova restrição
  var newSubject = document.createElement('div');

  // Cria a parte superior do input
  var subjectInput = "<div class='input-group'>";
  subjectInput += "<div><strong>F" + (subjectCount + 1) + "<strong></div>";
  subjectInput += "<input type='text' class='form-control id='subject" + subjectCount + "'/>";
  subjectInput += "</div>";

  // Cria a parte inferior do input
  var subjectSecondInput = "<div class='input-group'>";
  subjectSecondInput += "<div class='input-group-addon'><strong>&le;<strong></div>";
  subjectSecondInput += '<input type="text" class="form-control" id="subjectTyped' + subjectCount + '" value="0"/>';
  subjectSecondInput += "</div>";

  // Junta os campos
  newSubject.innerHTML = "<div class='form-group col s4'>" + subjectInput + subjectSecondInput + "</div>";

  // Adiciona a restrição ao corpo da página
  document.getElementById("subjects").appendChild(newSubject);

  // Incrementa a quantidade de subjects
  subjectCount++;
}

(function($) {
  $(document).ready(function(){
    $('.parallax').parallax();
  });
})(jQuery);
