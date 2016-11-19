$(document).ready(function() {
  var wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  for (var i = 0, len = wins.length; i < len; i++) {
    console.log(wins[i]);
  }

  $('p').click(function() {
    $(this).replaceWith("X");
  });

  $('button').click(function() {
    var num = $(this).val();
    console.log(parseInt(num));
  });
});
