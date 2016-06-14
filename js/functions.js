const I_WEIGHT = 0;
const I_VALUE = 1;

var itens = [];

// Capacidade da mochila
var capacidade = 0;

// Define a capacidade da mochila
function setCapacity()
{
  var txtcapacidade = document.getElementById('txtCapacidade');
  capacidade = Number(txtcapacidade.value);
  // calcula a solução
  mochila();
}

// Adiciona um item na tabela
function addItem() {

  var txtPeso = document.getElementById('txtPeso');
  var txtValor  = document.getElementById('txtValor');

  var peso = Number(txtPeso.value);
  var valor  = Number(txtValor.value);

  if(peso <= 0)
  {
    alert('O peso deve ser um valor maior que zero!');
    return;
  }

  if(valor < 0)
  {
    alert('O valor deve ser positivo!')
    return;
  }

  var item = [peso, valor];

  var itensLength = itens.length;
  itens[itensLength] = item;

  itens.sort(function(x,y) {
    if(x[I_WEIGHT] == y[I_WEIGHT])
      return x[I_VALUE] > y[I_VALUE];
    else
      return x[I_WEIGHT] > y[I_WEIGHT];
  });

  txtPeso.value = 0;
  txtValor.value = 0;


  printTable();
}
  // Imprime a tabela
function printTable()
{

  var table = document.getElementById('tbItens');

  table.lastElementChild.innerHTML = '';

  for(var index = 0; index < itens.length; index++)
  {

    var row = table.lastElementChild.insertRow(index);

    var btnCell = row.insertCell(0);
    var weightCell = row.insertCell(1);
    var valueCell = row.insertCell(2);

    btnCell.innerHTML = '<button type="button" class=btn-floating waves-effect waves-light  teal accent-4 delete" onclick="delTableItem(' + index + ')"><i class="material-icons">delete</i></a></button>';
    weightCell.innerHTML = itens[index][I_WEIGHT];
    valueCell.innerHTML = itens[index][I_VALUE];
  }

  setCapacity();
}

// Apaga um item da tabela
function delTableItem(index)
{
  if((Number(index) > -1) && (Number(index) < itens.length))
    itens.splice(index, 1);
  else
    alert('Erro inesperado, index inválido: ' + index + '. A tabela foi atualizada, tente novamente!');
  printTable();
}
