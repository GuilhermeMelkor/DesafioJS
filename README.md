# DesafioJS

<h1>João e Maria</h1>
<h3>Introdução</h3>
João e Maria são alunos da 3a. série primária.<br>
Eles são os melhores alunos e sempre estão disputando a liderança da turma e, para receber elogios e notas usam de todos os recursos.<br>
Além das notas, costumam presentear a professora com frutas.<br>
A professora, notando a artimanha dos alunos, decidiu acirrar a competição.<br>
<br>
"A partir de hoje, vou levar pra casa apenas 3 frutas."<br>
<br>
João sempre leva maçãs e Maria peras. Levam conforme suas maes compram, ou seja, há dias que um deles não leva nada, outros que ambos levam varias frutas. Chegavam a levar até um maximo de 5 frutas!<br>
<br>
"Vou levar as frutas de ambos, mas a preferência vai ser para o aluno que tiver a melhor nota nos testes.", disse a professora.<br>
<br>
Todos os dias, a professora fazia uma avaliação da matéria da véspera. No dia seguinte ela verificava o melhor e aceitava os presentes conforme a regra estabelecida e tomava nota dos resultados nesta planilha.<br>
<br>
<hr><br>
<br>
<table cellspacing=0 cellpadding=3 border=1 width="500">
	<tr>
		<th>Dia</td>
		<th>Peras</td>
		<th>Maçãs</td>
		<th>Melhor Aluno</td>
		<th>Fruta 1</td>
		<th>Fruta 2</td>
		<th>Fruta 3</td>
	</tr>
	<tr>
		<td>1</td>
		<td>3</td>
		<td>1</td>
		<td>Maria</td>
		<td>Pera</td>
		<td>Pera</td>
		<td>Pera</td>
	</tr>
	<tr>
		<td>2</td>
		<td>2</td>
		<td>1</td>
		<td>João</td>
		<td>Maçã</td>
		<td>Pera</td>
		<td>Pera</td>
	</tr>
	<tr>
		<td>3</td>
		<td>1</td>
		<td>4</td>
		<td>Maria</td>
		<td>Pera</td>
		<td>Maçã</td>
		<td>Maçã</td>
	</tr>
	<tr>
		<td>...</td>
		<td>...</td>
		<td>...</td>
		<td>...</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>30</td>
		<td>1</td>
		<td>1</td>
		<td>João</td>
		<td>Maçã</td>
		<td>Pera</td>
		<td>--</td>
	</tr>
</table>
<br>
Este mês a professora levou____  maçãs e ____ peras.<br>
<br>
<hr><br>
<br>
<h3>Exercício:</h3>
Faça um programa que leia os dados dessa planilha, preencha as lacunas com as frutas que foram levadas e mostre o total de cada.<br>
<br>
- No algoritmo fazer o preenchimento de dados aleatórios.<br>
- Exibir a planilha preenchida.<br>
- Usar Javascript.<br>


<h3>Regra:</h3> 
A regra é: levar no máximo 3 frutas começando a pegar do aluno que tiver melhor nota.<br>
<br>
Exemplos:<br>
<br>
1) Se João levou 3 maçãs e naquele dia ele teve a melhor nota, a professora vai levar 3 maçãs embora, nao importando a quantidade de peras da Maria.<br>
<br>
2) Se João levou 2 maçãs e a Maria levou 2 peras, a professora tem que levar 3 frutas do mesmo jeito. Sendo João o melhor aluno, ela irá levar 2 maçãs e 1 pera.<br>
<br>
3) Se João levar 0 maçãs, e Maria levar 1 pera, mesmo João sendo o melhor aluno, a professora levará 1 pera e 0 maçãs.<br>
<br>
4) se João levar 5 maçãs, e Maria levar 1 pera, caso a Maria seja a melhor aluna, a professora levará 1 pera e 2 maçãs. Observação, a ordem neste dia ficaria: pera - maçã - maçã.<br>
<br>
