
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
     
