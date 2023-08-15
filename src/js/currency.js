// 外部APIから為替レートを取得する関数
async function fetchExchangeRate(from,to){
  //外部APIを呼び出す際のURL
  const url = `https://api.exchangeratesapi.io/latest?base=${from}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.rates[to];
}

// 通貨を変換する関数

async function convertCurrency(){
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const amount = document.getElementById("amount").value;

  const rate = await fetchExchangeRate(from, to);

  const result = amount * rate;

  document.getElementById("result").innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}
