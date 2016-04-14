'use strict'

$(document).ready(init);
var boxes = $('.smallboxes')
var tower = $('.tower')

function init(){
  // boxes.click(SelectBox)
  tower.click(moveIt)

}

// function SelectBox(event){
//   var text = $(event.target);
//   text.addClass("selected")
// }

function moveIt(event){
  var text = $(event.target)
  var targetBox = $('.smallboxes')[0]
  // $(text).prepend($('.selected'));
  // // $('div').removeClass('.selected');
  $(text).prepend($(targetBox));
 event.preventDefault()

}
