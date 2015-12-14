function getSelectedText() {
  t = (document.all) ? document.selection.createRange().text : document.getSelection();

  return t;
}

var mouseX;
var mouseY;

// use the mouse coordinates to set button position
jQuery(document).mousemove(function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY - 10;
});

function add_cs_class(s_text) {
  var selection = s_text;
    var selection_text = selection.toString();
    
    // How do I add a span around the selected text?
    
    var span = document.createElement('SPAN');
    span.textContent = " + " + selection_text + " + ";
    span.classList.add("cs-editing");
  
    var range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
  
    var custom_hash_1 = Math.random().toString(36).slice(2);
    span.id = "cs-editing-" + custom_hash_1;
    
    return span.id;
}

jQuery(document).ready(function ($) {
//   $('p contenteditable').tooltipster({
//           multiple: true,
//           position: top
//   });
  
  $('div,p').mouseup(function (e) {
    if (getSelectedText() != "") {
      curr_span_id = add_cs_class(getSelectedText());
      var r_color = '#' + Math.random().toString(16).slice(2, 8);
      $("#" + curr_span_id).css('color', r_color);
      $("#" + curr_span_id).tooltipster({
          content: 'a quick test of the tooltip on ' + curr_span_id,
          multiple: true,
          position: top
      });

    }
  });
});