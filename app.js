const titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(title){
  console.log(title);
});

Array.from(titles).forEach(function(item){
    console.log("item: "+item.innerText);
});

console.log("testing")