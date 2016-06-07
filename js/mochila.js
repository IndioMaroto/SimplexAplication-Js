function mochila()
{
    // Tabela solução
    var tblSolution = document.getElementById('tblSolution');

    var thead = tblSolution.firstElementChild;
    var tbody = tblSolution.lastElementChild;
    // Limpa os valores atuais
    thead.innerHTML = '<tr></tr>';
    tbody.innerHTML = '';

    //head
    var thead_tr = thead.firstElementChild;
    var itemWCell = thead_tr.appendChild(document.createElement('th'));
    itemWCell.innerHTML = 'Valor';
    var itemVCell = thead_tr.appendChild(document.createElement('th'));
    itemVCell.innerHTML = 'Peso';
    for(var i=0; i<= capacidade; i++)
    {
      var capacityCell = thead_tr.appendChild(document.createElement('th'));
      capacityCell.innerHTML = i;
    }

   //Body
   var zRow = tbody.appendChild(document.createElement('tr'));
   var zwcell = zRow.appendChild(document.createElement('td'));
   zwcell.innerHTML = 0;
   var zvcell = zRow.appendChild(document.createElement('td'));
   zvcell.innerHTML = 0;
   for(var index=0; index <= capacidade; index++)
   {
     var capacityCell = zRow.appendChild(document.createElement('td'));
     capacityCell.innerHTML = 0;
   }

  // Adiciona os itens
  for(var i=0; i < itens.length; i++)
  {
    var row = tbody.appendChild(document.createElement('tr'));
    var tblSolutionRows = tbody.querySelectorAll('tr');
    var backRow = tblSolutionRows[i].querySelectorAll('td');

    var wcell = row.appendChild(document.createElement('td'));
    wcell.innerHTML = itens[i][I_VALUE];
    var vcell = row.appendChild(document.createElement('td'));
    vcell.innerHTML = itens[i][I_WEIGHT];
    for(var j=0; j <= capacidade; j++)
    {
      var capacityCell = row.appendChild(document.createElement('td'));
      var upLineValue = Number(backRow[2 + j].innerHTML);

      if(itens[i][I_WEIGHT] > j)
        capacityCell.innerHTML = upLineValue;
      else
      {
        var leftWeight = (j - itens[i][I_WEIGHT]) + 2;
        var selectedValue = itens[i][I_VALUE] + Number(backRow[leftWeight].innerHTML)
        var unselectedValue = upLineValue;
        capacityCell.innerHTML = Math.max(selectedValue, unselectedValue);
      }
    }
  }

  //Solução Final
  var tblSolutionRows = tbody.querySelectorAll('tr');
  var peso = capacidade+2;
  var finalSolution = document.getElementById('finalSolution');
  finalSolution.innerHTML = '';
  for(var i = tblSolutionRows.length - 1; i > 0; i--)
  {
    var actualRow = tblSolutionRows[i].querySelectorAll('td');
    var upRow = tblSolutionRows[i-1].querySelectorAll('td');
    if(Number(actualRow[peso].innerHTML) == Number(upRow[peso].innerHTML))
      tblSolutionRows[i].className = 'danger';
    else
    {
      tblSolutionRows[i].className = 'success';
      peso = peso - Number(actualRow[1].innerHTML);
      var p = document.createElement('p');
      p.innerHTML ='Peso: '+ actualRow[1].innerHTML + ' / Valor: ' + actualRow[0].innerHTML;
      finalSolution.appendChild(p);
    }
  }
}
