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
  //priceは値段
  //funcは実行する関数名
  //税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
  const taxPrice = Math.round(price * 1.10);
}

//トマトの税込み価格をコンソールに表示させる処理
function tomato(taxPrice){
  taxPrice();
  console.log( "トマトの値段は" + price + "円です。");
}
addTax(80, tomato);

//玉ねぎの税込み価格をコンソールに表示させる処理
function onion(taxPrice){
  taxPrice();
  console.log( "玉ねぎの値段は" + price + "円です。");
}
addTax(120, onion);
