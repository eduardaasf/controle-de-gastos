function gerarPlanilha() {
  
	// 
  const descricao = document.querySelector("input[name='descricao']").value;
  const valor = parseFloat(document.querySelector("input[name='valor']").value);
  const data = new Date(document.querySelector("input[name='data']").value);
  const categoria = document.querySelector("select[name='categoria']").value;

  // 
  const linha = document.createElement("tr");
  linha.innerHTML = `<td>${descricao}</td>`;
  linha.innerHTML += `<td>${valor}</td>`;
  linha.innerHTML += `<td>${data}</td>`;
  linha.innerHTML += `<td>${categoria}</td>`;

  
  const total = 100;

  // 
  document.querySelector("table").appendChild(linha);

  //
  const ultimaLinha = document.querySelector("table td:last-child");
  //ultimaLinha.innerHTML += `<td>${total}</td>`;
}

//document.querySelector("button[type='submit']").addEventListener("click", gerarPlanilha);
