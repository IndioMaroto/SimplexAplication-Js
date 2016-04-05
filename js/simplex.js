
var loops = 1;
var MAX_LOOPS = 35;
var STOPBYLOOP = MAX_LOOPS + 1;


function simplex() {
  montamatrix();


  while(CondicaoParada() && MaxVoltas())  
  calculo();
  console.log(matrix)
}

function montamatrix()
{
  loops = 0;

  var z = document.getElementById('zFunction').value.split(';');

  var restriction = document.querySelectorAll('#subjects .form-group');

  matrix = [[]];
  matrix[0][0] = 'Linha';

  for(var i = 1; i <= z.length; i++)
    matrix[0].push('x' + i);


  for(var i = 1; i <= restriction.length; i++)
    matrix[0].push('f' + i);

  matrix[0][matrix[0].length] = 'b';
  var countCol = 1;

  for(var i = 1; i <= restriction.length; i++)
  {
    matrix.push(['f' + i]);
    countCol = 1;
    var basicVars = restriction[i-1].querySelectorAll('input')[0].value.split(';');
    for(var j = 0; j < z.length; j++){
      if(basicVars[j])
        matrix[i][countCol++] = Number(basicVars[j]);
      else
        matrix[i][countCol++] = 0;
    }

    for(var j = 0; j < restriction.length; j++){
      matrix[i][countCol] = Number((matrix[i][0] == matrix[0][countCol] ? 1 : 0));
      countCol++;
    }

    matrix[i][countCol] = Number(restriction[i-1].querySelectorAll('input')[1].value);
  }
  matrix.push(['Z']);

  countCol = 1;
  for(var i = 0; i < z.length; i++){
    if(z[i])
      matrix[matrix.length - 1][countCol++] = Number(-1 * z[i]);
    else
      matrix[matrix.length - 1][countCol++] = 0;
  }

  for(var j = 0; j < restriction.length; j++)
    matrix[matrix.length - 1][countCol++] = 0;
  matrix[matrix.length - 1][countCol] = 0;
}

function calculo()
{
  var zrow = matrix.length - 1;
  var columnAmount = matrix[zrow].length - 2;
  var rowAmount = matrix.length - 2;
  var entra = 0;
  var minEntraValor = Number.MAX_VALUE;

  for(var i = 1; i <= columnAmount; i++)
    if(matrix[zrow][i] < minEntraValor)
    {
      entra = i;
      minEntraValor = matrix[zrow][i];
    }

  var sai = 0;
  var iminSaiValor = Number.MAX_VALUE;

  for(var i = 1; i <= rowAmount; i++)
  {
    var bValue = matrix[i][matrix[0].length - 1];
    var colValue = matrix[i][entra];

    if(colValue <= 0)
      continue;

    var result = bValue / colValue;
    if(result < iminSaiValor)
    {
      sai = i;
      iminSaiValor = result;
    }
  }

  if(sai == 0)
  {
    loops = STOPBYLOOP;
    return;
  }

   console.log("Entra na base: " + matrix[0][entra]);
   console.log("Sai da base:" + matrix[sai][0]);

  matrix[sai][0] = matrix[0][entra];

  var pivo = matrix[sai][entra];

  for(var i = 1; i < matrix[0].length; i++)
    matrix[sai][i] = matrix[sai][i] / pivo;

  for(var row = 1; row < matrix.length; row++)
  {
    if(row == sai || matrix[row][entra] == 0)
      continue;

    var fator = -1 * matrix[row][entra];

    for(var column = 1; column < matrix[row].length; column++)
      matrix[row][column] = (matrix[sai][column] * fator) + matrix[row][column];
  }
}

function CondicaoParada()
{
  //pega a linha de z
  var zrow = matrix.length - 1;

  //colunas verificáveis
  var columnAmount = matrix[zrow].length - 1;
  
  //verifica se há valor negativo
  for(var i = 1; i < columnAmount; i++)
    if(matrix[zrow][i] < 0)
      return true; //ainda há valores negativos
  
    return false; //pára o simplex
}

function MaxVoltas()
{
  if(loops > MAX_LOOPS)
    return false;

  return true
}