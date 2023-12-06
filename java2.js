function gerarRelatorioDespesas() {
  // 
  const title = 'Relatório de Despesas';

  //
  const data = document.querySelector("table")
  const formattedData = data.map(({ data, valor, categoria, descricao }) => {
    return {
      data: moment(data).format('DD/MM/YYYY'),
      valor: valor.toLocaleString('pt-BR'),
      categoria: categoria,
      descricao: descricao,
    };
  });

  //
  const report = `
    **${title}**

    | Descrição | Valor | Data | Categoria |
    |---|---|---|---|
    ${formattedData.map(({ descricao, valor, data, categoria }) => `| ${descricao} | ${valor} | ${data} | ${categoria} |`).join('\n')}
  `;

  // 
  console.log(report);
}
