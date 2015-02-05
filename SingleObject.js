//单例模式
var single = (function () {
	var service = {};

	//Background
	var _Background = [];
	service.getBackground = function () {
		return _Background;
	};
	service.setBackground = function (background) {
		_Background.push(background);
	};

	//PlaneHero
	var _PlaneHero = null;
	service.getPlaneHero = function () {
		return _PlaneHero;
	};
	service.setPlaneHero = function (planeHero) {
		_PlaneHero = planeHero;
	};

	//GameLoadingFly
	var _GameLoadingFly = null;
	service.getGameLoadingFly = function () {
		return _GameLoadingFly;
	};
	service.setGameLoadingFly = function (gameLoadingFly) {
		_GameLoadingFly = gameLoadingFly;
	};

	//GameLoadingCopyRight
	var _GameLoadingCopyRight = null;
	service.getGameLoadingCopyRight = function () {
		return _GameLoadingCopyRight;
	};
	service.setGameLoadingCopyRight = function (gameLoadingCopyRight) {
		_GameLoadingCopyRight = gameLoadingCopyRight;
	};

	//GameLoadingStart
	var _GameLoadingStart = null;
	service.getGameLoadingStart = function () {
		return _GameLoadingStart;
	};
	service.setGameLoadingStart = function (gameLoadingStart) {
		_GameLoadingStart = gameLoadingStart;
	};

	//bullet Hero BulletHero
	var _BulletHero = [];
	service.getBulletHero = function () {
		return _BulletHero;
	};
	service.setBulletHero = function (bulletHero) {
		_BulletHero.push(bulletHero);
	};

    //timer 
	var _timer = null
	service.setTimer = function () {
	    _timer = setInterval(function () {
	        single.Draw();
	    }, 1000);
	};
	service.stopTimer = function () {
	    clearInterval(_timer);
	};

	service.Draw = function () {
		for (var i = 0; i < _Background.length; i++) {
			_Background[i].Draw();
		}
		if (_PlaneHero) {
			_PlaneHero.Draw();
		}
		if (_GameLoadingFly) {
			_GameLoadingFly.Draw();
		}

		for (var i = 0; i < _BulletHero.length; i++) {
			_BulletHero[i].Draw();
		}
	};


	// todo :碰撞检测
	service.CrashDetection = function () {

	};

	return service;
})();