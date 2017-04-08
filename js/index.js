var isplay=window.confirm("兄弟，来点音乐？");
if(isplay){
	aud.play();
};
var index=0;
var app=angular.module('myapp',[]);
app.controller('control',['$scope',function($scope){
	$scope.toggleV={
		Audio:{
			control:false,
			play:false
		}
	};
	$scope.audioS=function(){
		console.log(666);
		$scope.toggleV.Audio.control=!$scope.toggleV.Audio.control;
	};
	if(!aud.paused){
		$scope.toggleV.Audio.play=true;
	};
	$scope.music=[
		{name:'RADWIMPS - スパークル - Movie版.mp3',route:'music/RADWIMPS - スパークル - Movie版.mp3'},
		{name:'RADWIMPS - 前前前世.mp3',route:'music/RADWIMPS - 前前前世.mp3'},
		{name:'RADWIMPS - 夢灯籠.mp3',route:'music/RADWIMPS - 夢灯籠.mp3'},
		{name:'贰佰 - 嘿,抬头!.mp3',route:'music/贰佰 - 嘿,抬头!.mp3'},
		{name:'海龟先生 - 男孩别哭.mp3',route:'music/海龟先生 - 男孩别哭.mp3'},
		{name:'海龟先生 - 微笑.mp3',route:'music/海龟先生 - 微笑.mp3'}
	];
	$scope.play=function(e,route,idx){
		aud.src=route;
		aud.play();
		$(e.target).addClass('active');
		$(e.target).siblings().removeClass('active');
		$scope.toggleV.Audio.play=true;
		index=idx;
	};
	$scope.control=function(){
		$scope.toggleV.Audio.play=!$scope.toggleV.Audio.play;
		if($scope.toggleV.Audio.play){
			aud.play();
		}else{
			aud.pause();
		};
	};
	$scope.choice=function(name){
		if(name=='next'){
			index=index+1;
			if(index>=$scope.music.length){
				index=0;
			};
			aud.src=$scope.music[index].route;
			aud.play();
		}else{
			if(index<0){
				index=5;
			};
			index=index-1;
			aud.src=$scope.music[index].route;
			aud.play();
		};
		all=$(".music-item");
		all.removeClass('active');
		$(all[index]).addClass('active');
		$scope.toggleV.Audio.play=true;
	};
}]);
