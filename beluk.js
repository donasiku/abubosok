var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);
var x=Math.floor((Math.random()*15)+ 1);
var xxx=null;
if(x=="1"){xxx="2018/07/what-is-bitcoin-mining-pool.html"}
if(x=="2"){xxx="2018/07/newsbitcoincom-is-hiring-editorial.html"}
if(x=="3"){xxx="2018/07/boomstarternetwork-to-democratize.html"}
if(x=="4"){xxx="2018/07/vertex-launches-ico-aftermarket.html"}
if(x=="5"){xxx="2018/07/decentralized-crowdfunding-platform.html"}
if(x=="6"){xxx="2018/07/switzerland-considers-granting-crypto.html"}
if(x=="7"){xxx="2018/07/thailand-officially-announces-rules-for.html"}
if(x=="8"){xxx="2018/07/quoines-ico-platform-adds-bch-as.html"}
if(x=="9"){xxx="2018/07/global-data-report-cryptocurrencies-are.html"}
if(x=="10"){xxx="2018/07/the-daily-bittrex-invades-europe-and.html"}
if(x=="11"){xxx="2018/07/quebec-mining-drama-bitmain-money.html"}
if(x=="12"){xxx="2018/07/heavy-rainfall-in-china-thousands-of.html"}
if(x=="13"){xxx="2018/07/japanese-man-exploits-free-company.html"}
if(x=="14"){xxx="2018/07/what-is-bitcoin.html"}
if(x=="15"){xxx="2018/07/predicting-bitcoin-to-go-to-zero-will.html"}
if(x=="16"){xxx="2018/07/aplikasi-full-versi.html"}
if(x=="17"){xxx="2018/07/download-filem-terbaru.html"}
if(x=="18"){xxx="2018/07/download-aplikasi.html"}
if(x=="19"){xxx="2018/07/aplikasi-pulsa.html"}
if(x=="20"){xxx="2018/07/bisnis-pulsa-dan-ppob.html"}
if(x=="21"){xxx="2018/07/server-pulsa-free.html"}
if(x=="22"){xxx="2018/07/facebook-akan-tutup.html"}
if(x=="23"){xxx="2018/07/youtube-akan-tutup.html"}
if(x=="24"){xxx="2018/07/filem-terbaru.html"}
if(x=="25"){xxx="2018/07/era-uang-digital.html"}
if(x=="26"){xxx="2018/07/uang-digita.html"}
if(x=="27"){xxx="2018/07/kopi-terbaik-dunia.html"}
if(x=="28"){xxx="2018/07/os-paling-baik.html"}
if(x=="29"){xxx="2018/07/bank-teraman-didunia.html"}
if(x=="30"){xxx="2018/07/browser-terbaik.html"}
if(x=="31"){xxx="2018/07/download-idm-terbaru.html"}
if(x=="32"){xxx="2018/07/hp-terbaik-sepanjang-masa.html"}
if(x=="33"){xxx="2018/07/virus-mematikan.html"}
if(x=="34"){xxx="2018/07/script-hacker.html"}
if(x=="35"){xxx="2018/07/cek-antivirus.html"}
if(x=="36"){xxx="2018/07/one-minute-solutions-to-your-improving.html"}
if(x=="37"){xxx="2018/07/insurance-across-world.html"}
if(x=="38"){xxx="2018/07/make-money-in-forex-for-beginners.html"}
if(x=="39"){xxx="2018/07/web-hosting-service.html"}
if(x=="40"){xxx="2018/07/best-forex-strategies.html"}
if(x=="41"){xxx="2018/07/best-new-cars-for-2020.html"}
if(x=="42"){xxx="2018/07/best-smartphones-and-mobile-phones.html"}
if(x=="43"){xxx="2018/07/best-antivirus-for-android.html"}
if(x=="44"){xxx="2018/07/bank-dengan-aset-terbesar.html"}
if(x=="45"){xxx="2018/07/binary-options-explained-simplified.html"}
if(x=="46"){xxx="2018/07/windows-release-date-price-news.html"}
if(x=="47"){xxx="2018/07/best-motorcycle-insurance-quotes-rates.html"}
if(x=="48"){xxx="2018/07/perusahaan-asuransi-terbaik.html"}
if(x=="49"){xxx="2018/07/how-to-make-money.html"}
if(x=="50"){xxx="2018/07/study-abroad-scholarship-in-japan.html"}
if(x=="51"){xxx="2018/07/ways-to-get-cheapest-health-insuranc.html"}
if(x=="52"){xxx="2018/07/auto-insurance-quotes.html"}
if(x=="53"){xxx="2018/07/how-to-read-forex-chart-properly.html"}
if(x=="54"){xxx="2018/07/google-drive-cloud.html"}
if(x=="55"){xxx="2018/07/stress-eating-helps.html"}
if(x=="56"){xxx="2018/07/best-auto-insurance-in-indonesia.html"}a_to_ve[i].href="https://abubosok.blogspot.com/"+xxx+"?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}
