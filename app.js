
 $('#submitButton').click(function() {
    let displayVal = $('#displayName').val();
    let commentVal = $('#commentBox').val();
    $('#commentSection').prepend(`<div class = comment><h3>${displayVal}</h3> <h1>${commentVal}</h1><button onclick='remove()'>Delete</button></div>`)
  })

  function remove()
  {
  var element = $("#commentSection").children()[0];
  element.remove();
  }




const paragraph = $(".comment").children()[4];
const edit_button = document.getElementById("edit-button");
const end_button = document.getElementById("end-editing");

edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "#dddbdb";
  
} );

end_button.addEventListener("click", function() {
  paragraph.contentEditable = false;
  paragraph.style.backgroundColor = "#fcfcff";
} )

const paragraphOne = $('#commentSection').children()[1];
const editSection = $(paragraphOne).children()[4];
const edit_buttonOne = document.getElementById("edit-buttonOne");
const end_buttonOne = document.getElementById("end-editingOne");

edit_buttonOne.addEventListener("click", function() {
  editSection.contentEditable = true;
  editSection.style.backgroundColor = "#dddbdb";
  })
  end_buttonOne.addEventListener("click", function() {
    paragraphOne.contentEditable = false;
    paragraphOne.style.backgroundColor = "#fcfcff";

} );

const paragraphTwo = $('#commentSection').children()[2];
const editSectionTwo = $(paragraphTwo).children()[3];
const edit_buttonTwo = document.getElementById("edit-buttonTwo");
const end_buttonTwo = document.getElementById("end-editingTwo");

edit_buttonTwo.addEventListener("click", function() {
  editSectionTwo.contentEditable = true;
  editSectionTwo.style.backgroundColor = "#dddbdb";
 
 
} );

     
