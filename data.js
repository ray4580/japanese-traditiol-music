// 入力するテキストの変数
var inputText = $(".inputText");

// 出てくるテキストの変数
var outputText = $(".outputText");

// 検索ボタンをクリックした時のファンクション
function clickSearchButton() {
  // 入力された文字を変数に入れる
  var PrefecturesName = inputText.val();

  // シートを取得する
  $.ajax({
    url: "https://docs.google.com/spreadsheets/d/1-DqRonnxDIQteVZunYBkaKymMhfgxlOPTtOKmr36Hro/edit#gid=0",
    type: "GET",
    dataType: "json",

    // シートの取得に成功した時のファンクション
    success: function (sheet) {
      // 全てのデータを変数に入れる
      var allData = sheet.allData;

      // データの項目の数だけ検索をくりかえす
      for (var i = 0; i < 100; i++) {
        // もしデータの中に入力した都道府県の名前があれば
        if (prefecturesName == allData[i][0]) {
          // 名前の隣のデータ（曲名）を変数に入れる
          var musicName = allData[i][1];
        }
      }
      // 変数に「曲名」のテキストを表示する
      outputText.text(musicName);
    }
  });
}
