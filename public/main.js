{// APIからJSONを取得して描画
  fetch('./api/foo')
    .then((response) => response.json())
    .then((response) => {
      const renderJson = document.getElementById('render-json');
      renderJson.innerText = JSON.stringify(response);
    })
}