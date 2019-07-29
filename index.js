const name1 = prompt("Enter name 1");
const name2 = prompt("Enter name 2");
const name3 = prompt("Enter name 3");
const response1 = 'has the most letters in their name';
const response2 = 'have the same amount of letters in their names.';
const response3 = 'have the most and same amount of letters in their names.';



if(name1.length === name2.length && name1.length < name3.length) {
  alert(`${name3} ${response1}, and ${name1}/${name2} both ${response2}`);
}
else if(name1.length === name3.length && name1.length < name2.length) {
  alert(`${name2} ${response1}, and ${name1}/${name3} both ${response2}`);
}
else if(name2.length === name3.length && name2.length < name1.length) {
  alert(`${name1} ${response1}, and ${name2}/${name3} both ${response2}`);
}
else if(name1.length > name2.length && name1.length > name3.length) {
  alert(`${name1} ${response1}`);
}
else if(name2.length > name1.length && name2.length > name3.length) {
  alert(`${name2} ${response1}`);
}
else if(name3.length > name1.length && name3.length > name2.length) {
  alert(`${name3} ${response1}`);
}
else if(name1.length === name2.length && name1.length === name3.length) {
  alert(`${name1}, ${name2}, and ${name3}, all ${response2}`);
}
else if(name1.length === name2.length && name1.length > name3.length) {
  alert(`Both ${name1} and ${name2} ${response3}`);
}
else if(name2.length === name3.length && name2.length > name1.length) {
  alert(`Both ${name2} and ${name3} ${response3}`);
}
else if(name1.length === name3.length && name1.length > name2.length) {
  alert(`Both ${name1} and ${name3} ${response3}`);
}
else {
}
