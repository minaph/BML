javascript:
var google = "'https://www.google.co.jp/search?q='";
var bmt = "'" + prompt("ブックマークのテーマを入力") + "'";
var kw = "";
var kw_t = "";
var win = ", '_blank', 'width=500,height=1000');";
var tab = ", '_blank');";
do {
    kw_t = kw;
    kw += "+' " + prompt("デフォルトキーワードを入力") + "'";
} while (kw != kw_t + "+' '");
var ans = "javascript:window.open(" + google + "+ prompt(" + bmt + ") " + kw;
if(confirm("検索結果を新規ウィンドウで開きますか？")){ans+=win;}else{ans+=tab;}
alert(ans);
