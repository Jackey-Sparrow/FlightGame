//
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
    var _BulletHeroCount = 0;
    var _BulletHero = [];
    service.getBulletHero = function () {
        return _BulletHero;
    };
    service.setBulletHero = function (bulletHero) {
        _BulletHero.push(bulletHero);
        _BulletHeroCount++;
    };
    service.getBulletHeroCount = function () {
        return _BulletHeroCount;
    };
    service.removeBullerHero = function (bullet) {
        var index = _BulletHero.indexOf(bullet);
        if (index != -1) {
            _BulletHero.splice(index, 1);
        }
    };

    //plane bullet
    var _PlaneEnemy = [];
    var _PlaneEnemyCount = 0;
    service.getPlaneEnemy = function () {
        return _PlaneEnemy;
    };
    service.setPlaneEnemy = function (planeEnemy) {
        _PlaneEnemy.push(planeEnemy);
        _PlaneEnemyCount++;
    };
    service.removePlaneEnemy = function (planeEnemy) {
        var index = _PlaneEnemy.indexOf(planeEnemy);
        if (index != -1) {
            _PlaneEnemy.splice(index, 1);
        }
    };
    service.getPlaneEnemyCount = function () {
        return _PlaneEnemyCount;
    };

    //timer 
    var _timer = null;
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
            _PlaneHero.Fire();
        }
        if (_GameLoadingFly) {
            _GameLoadingFly.Draw();
        }

        for (var i = 0; i < _BulletHero.length; i++) {
            _BulletHero[i].Draw();
        }
        for (var i = 0; i < _PlaneEnemy.length ; i++) {
            _PlaneEnemy[i].Draw();
        }
        //add enemy plane
        if (_PlaneHero) {
            var enemyPlaneCount = this.getPlaneEnemyCount();
            if (_PlaneEnemy.length <= 2) {
                for (var i = 0; i <= 4; i++) {
                    this.setPlaneEnemy(new PlaneEnemy(Math.random() * global.Width, -Math.random() * 200, parseInt(Math.random() * 2)));
                }
            }
            if (Math.random() * 100 > 99) {
                this.setPlaneEnemy(new PlaneEnemy(Math.random() * global.Width, -Math.random() * 200, 2));
            }
        }
    };


    // todo :碰撞检测
    service.CrashDetection = function () {

    };

    return service;
})();