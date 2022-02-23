const arr = [{name:'Apple', price:10}, {name:'Orange', price:200}, {name:'Kivi', price:230}];

const tbody = document.getElementById('tbody');

const tr1 = document.createElement('tr');
const tr2 = document.createElement('tr');
const tr3 = document.createElement('tr');

const td = document.createElement('td');

tbody.append(tr1)
tbody.append(tr2)
tbody.append(tr3)


/* arr.forEach(() => {
  const node = tr;
  node.textContent = ;

  tbody.append(node);
}); */