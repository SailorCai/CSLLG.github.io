function onlyYou(obj,name){
	for(var attr in obj){
		obj[attr]=false;
	};
	obj[name]=true;
};
var aud=new Audio();
aud.src="music/RADWIMPS - スパークル - Movie版.mp3";
//aud.play();
