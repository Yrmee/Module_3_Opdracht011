// 3. The Grade Assigner

function assignGrade(score) {
  if (score > 90) {
      return 'A';
  } else if (score > 80) {
      return 'B';
  } else if (score > 70) {
      return 'C';
  } else if (score > 65) {
      return 'D';
  } else {
      return 'E';
  }
}

for (var i = 60; i <= 65; i++) {
  console.log("Voor " + i + "punten, krijg je een " + assignGrade(i) + ".");
}
for (var i = 66; i <= 70; i++) {
  console.log("Voor " + i + "punten, krijg je een " + assignGrade(i) + ".");
}
for (var i = 71; i <= 80; i++) {
  console.log("Voor " + i + "punten, krijg je een " + assignGrade(i) + ".");
}
for (var i = 81; i <= 90; i++) {
  console.log("Voor " + i + "punten, krijg je een " + assignGrade(i) + ".");
}
for (var i = 91; i <= 100; i++) {
  console.log("Voor " + i + "punten, krijg je een " + assignGrade(i) + ".");
}

