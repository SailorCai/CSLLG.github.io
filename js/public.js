function onlyYou(obj,name){
	for(var attr in obj){
		obj[attr]=false;
	};
	obj[name]=true;
};
var aud=new Audio();
aud.src="music/RADWIMPS - スパークル - Movie版.mp3";
//aud.play();
var userInfo=[
	{name:'王萍',pass:'wangping'},
	{name:'赖春燕',pass:'laichunyan'},
	{name:'张新梅',pass:'zhangxinmei'},
	{name:'邱丹丹',pass:'qiudandan'},
];
var timer=null;
function tipNone(title,state){
	clearTimeout(timer);
	$('.erro-tip').html(title).css('display',state);
	timer=setTimeout(function(){
		$('.erro-tip').fadeOut(1000);
	},2000);
};
$('body').css('height',window.innerHeight+'px');
