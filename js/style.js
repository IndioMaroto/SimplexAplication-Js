var jq=jQuery.noConflict();
var subjectCount = 0;

function addSubjects()
{
  var newSubject = document.createElement('div');
  var subjectInput = "<div class='input-group'>";
  subjectInput += "<div><strong>F" + (subjectCount + 1) + "<strong></div>";
  subjectInput += "<input type='text' class='tooltipped col s8 ' placeholder='Para digitar: 3x1 + 5x2, digite: 3;5' id='subject"+ subjectCount + "'/>";
  var subjectSecondInput = "<span class='col s1 sinal valign-wrapper'><strong>&le;<strong></span>";
  subjectSecondInput += '<input type="text" class="form-control col s3" id="subjectTyped' + subjectCount + '"/>';
  subjectSecondInput += "</div>";
  newSubject.innerHTML = "<div class='form-group col s12'>" + subjectInput + subjectSecondInput + "</div>";
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

function clear(){
  jQuery("#tables").empty();
  console.log("oioioi");
}
