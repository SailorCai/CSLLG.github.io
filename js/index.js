var index=0;
var app=angular.module('myapp',[]);
app.controller('control',['$scope',function($scope){
	$scope.toggleV={
		Audio:{
			control:false,
			login:false,
			play:false
		},
	};
	$scope.user={
		name:null,
		pass:null
	}
	$scope.audioS=function(name){
		console.log(666);
		$scope.toggleV.Audio[name]=!$scope.toggleV.Audio[name];
	};
	setTimeout(function(){
		var isplay=window.confirm("兄弟，来点音乐？");
		if(isplay){
			aud.play();
		};
		index=0;
		if(!aud.paused){
			$scope.toggleV.Audio.play=true;
		};
	},2000);
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
			index=index-1;
			if(index<0){
				index=5;
			};
			aud.src=$scope.music[index].route;
			aud.play();
		};
		all=$(".music-item");
		all.removeClass('active');
		$(all[index]).addClass('active');
		$scope.toggleV.Audio.play=true;
	};
	$scope.login=function(){
		console.log(3333);
		var lindex=0;
		for(var i=0;i<userInfo.length;i++){
			lindex++;
			if($scope.user.name==userInfo[i].name){
				if($scope.user.pass==userInfo[i].pass){
					
				}else{
					tipNone('兄弟，你的通行证输错了','block');
				};
				break;
			};
		};
		if(lindex >= userInfo.length){
			tipNone('小伙子，你暂时没有权限登陆','block');
		};
	};
}]);
