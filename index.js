//Current line
var CurrentId = undefined;

var inputValues = [];
const inputPrompts = [
  `You\'ve come to a lake. There is an island in the middle of the lake.
  Type "wait" to wait for a boat. Type "swim" to swim across.`,
  `You arrive at the island unharmed. There is a house with 3 doors.
  One red, one yellow and one blue. Which colour do you choose?`,
];
let isFirstClick = true;

//Click Run
$(document).ready(function () {
  $("#run-button").click(function () {
    inputValues = [];
    $("#Content").empty();
    NewLine(
      `
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     '"=.|                  |
|___________________|__"=._o'"-._        '"=.______________|___________________
          |                '"=._o'"=._      _'"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; '"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .' ' '' ,  '"-._"-._   ". '__|___________________
          |           |o'"=._' , "' '; .". ,  "-._"-._; ;              |
 _________|___________| ;'-.o'"=._; ." ' ''."\' . "-._ /_______________|_______
|                   | |o;    '"-.o'"=._''  '' " ,__.--o;   |
|___________________|_| ;     (#) '-.o '"=.'_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      '".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/_____ /
*******************************************************************************
Welcome to Treasure Island.
Your mission is to find the treasure.
`,
      false
    );
    NewLine(
      `You\'re at a cross road. Where do you want to go?
      Type "left" or "right"`,
      true
    );
  });
});

//Enter button
$(document).on("keydown", function (e) {
  var x = event.which || event.keyCode;
  if (x === 13 || x == 13) {
    var consoleLine = $("#" + CurrentId + " input").val();

    console.log(consoleLine);

    inputValues.push({ id: CurrentId, val: consoleLine });

    console.log(inputValues[0].val);

    if (inputValues[0].val.toLowerCase() == "left" && inputValues.length == 1) {
      NewLine(inputPrompts[0], true);
      return;
    }

    if (
      inputValues[0].val.toLowerCase() == "right" &&
      inputValues.length == 1
    ) {
      NewLine("You fell into a hole. Game Over.", false);
      return;
    }

    if (inputValues[1].val.toLowerCase() == "wait" && inputValues.length == 2) {
      NewLine(inputPrompts[1], true);
      return;
    }

    if (inputValues[1].val.toLowerCase() == "swim" && inputValues.length == 2) {
      NewLine("You get attacked by an angry trout. Game Over.", false);
      return;
    }

    if (inputValues[2].val.toLowerCase() == "red" && inputValues.length == 3) {
      NewLine("It's a room full of fire. Game Over.", false);

      return;
    }

    if (
      inputValues[2].val.toLowerCase() == "yellow" &&
      inputValues.length == 3
    ) {
      NewLine("You found the treasure! You Win!", false);

      return;
    }

    if (inputValues[2].val.toLowerCase() == "blue" && inputValues.length == 3) {
      NewLine("You enter a room of beasts. Game Over.", false);
      return;
    }

    // NewLine(inputPrompts[inputValues.length - 1], true);
    // setTimeout(NewLine, delay);
  }
});
$(document).on("keydown", function (e) {
  var x = event.which || event.keyCode;
  var line = $("#" + CurrentId + " input");
  var length = line.val().length;
  if (x != 8) {
    line.attr("size", 1 + length);
  } else {
    line.attr("size", length * 0.95);
  }
  if (length === 0) {
    $("#" + CurrentId + " input").attr("size", "1");
  }
});
$(document).on("click", function (e) {
  $("#" + CurrentId + " input").focus();
});

//New line
function NewLine(text, isPrompt) {
  $(".console-carrot").remove();
  if (CurrentId !== undefined) {
    $("#" + CurrentId + " input").prop("disabled", true);
  }
  CurrentId = "consoleInput-" + GenerateId();

  if (isPrompt) {
    $("#Content").append("<div>" + text + "</div>");
    $("#Content").append(
      '<div id="' +
        CurrentId +
        '">' +
        '<input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" class="terminal-input" /><div class="console-carrot"></div></div>'
    );
    $("#" + CurrentId + " input").focus();
    $("#" + CurrentId + " input").attr("size", "1");
  } else {
    $("#Content").append('<div id="' + CurrentId + '">' + text + "</div>");
  }
    document.getElementById(CurrentId).scrollIntoView();

}

function GenerateId() {
  return Math.random().toString(16).slice(2);
}

// 'print('''
// *******************************************************************************
//           |                   |                  |                     |
//  _________|________________.=""_;=.______________|_____________________|_______
// |                   |  ,-"_,=""     '"=.|                  |
// |___________________|__"=._o'"-._        '"=.______________|___________________
//           |                '"=._o'"=._      _'"=._                     |
//  _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
// |                   |    __.--" , ; '"=._o." ,-"""-._ ".   |
// |___________________|_._"  ,. .' ' '' ,  '"-._"-._   ". '__|___________________
//           |           |o'"=._' , "' '; .". ,  "-._"-._; ;              |
//  _________|___________| ;'-.o'"=._; ." ' ''."\' . "-._ /_______________|_______
// |                   | |o;    '"-.o'"=._''  '' " ,__.--o;   |
// |___________________|_| ;     (#) '-.o '"=.'_.--"_o.-; ;___|___________________
// ____/______/______/___|o;._    "      '".o|o_.--"    ;o;____/______/______/____
// /______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
// ____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
// /______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
// ____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
// /______/______/______/______/______/______/______/______/______/______/_____ /
// *******************************************************************************
// ''')
// print("Welcome to Treasure Island.")
// print("Your mission is to find the treasure.")

// #Write your code below this line 👇

// choice1 = input('You\'re at a cross road. Where do you want to go? Type "left" or "right" \n').toLowerCase()()
// if choice1 == "left":
//   choice2 = input('You\'ve come to a lake. There is an island in the middle of the lake. Type "wait" to wait for a boat. Type "swim" to swim across. \n').toLowerCase()()
//   if choice2 == "wait":
//     choice3 = input("You arrive at the island unharmed. There is a house with 3 doors. One red, one yellow and one blue. Which colour do you choose? \n").toLowerCase()()
//     if choice3 == "red":
//       print("It's a room full of fire. Game Over.")
//     elif choice3 == "yellow":
//       print("You found the treasure! You Win!")
//     elif choice3 == "blue":
//       print("You enter a room of beasts. Game Over.")
//     else:
//       print("You chose a door that doesn't exist. Game Over.")
//   else:
//     print("You get attacked by an angry trout. Game Over.")
// else:
//   print("You fell into a hole. Game Over.")';
