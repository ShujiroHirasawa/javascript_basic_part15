//1
//プロパティとメソッドの違い
//プロパティはオブジェクト内にkeyと値となっているvalueが書かれているもので、メソッドはオブジェクト内にkeyとvalueの部分が関数が書かれているもの。

const fruits = {
  name:"スイカ",
  season:"summer",
  place:function() {
    console.log("熊本県でよく採れます。");
  }
}
fruits.place()

const singer = {
  name:"二郎",
  genre:"ロック",
  profile:function() {
    console.log("ロック歌手日本一です");
  }
}
singer.profile()

const mickey = {
  animal:"mouse",
  friend:"donald",
  birthday:function() {
    console.log("11月18日");
  }
}
mickey.birthday()

//2
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  console.log(result);
  return result;
}
fruit("リンゴ", 100);

//3
function addTax(price, func) {
  const taxPrice = Math.round(price * 1.10);
  func(taxPrice, price);
}

function x(name){
  console.log(name + "の値段は" + price + "円です。");
}

//トマトの税込み価格をコンソールに表示させる処理
function y(tomato, taxPrice){
  const name ="トマト";
}
addTax(80,x);

//玉ねぎの税込み価格をコンソールに表示させる処理
function z(onion, taxPrice){
  const name ="玉ねぎ";
}
addTax(150,x);