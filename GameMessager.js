
//Game Messager
var GameMessager = (function () {
    var Messages = {}, listen, one, remove, trigger, self = this;
    listen = function (key, eventFn) {
        if (!Messages[key]) {
            Messages[key] = [];
        }
        Messages[key].push(eventFn);
    };
    one = function (key, eventFn) {
        remove(key);
        listen(key, eventFn);
    };
    remove = function (key) {
        if (Messages[key]) {
            Messages[key].length = 0;
        }
    };
    trigger = function () {
        var key = Array.prototype.shift.call(arguments);
        if (Messages[key]) {
            for (var i = 0; i < Messages[key].length; i++) {
                var eventFn = Messages[key][i];
                if (eventFn.apply(self, arguments) == false) {
                    return false;//if false stop it
                }
            }
        }
    };
    return {
        listen: listen,
        one: one,
        remove: remove,
        trigger: trigger
    }
})();

GameMessager.listen('FirstStart', function () {
    single.getGameLoadingCopyRight().removeObject();
    single.setGameLoadingCopyRight(null);
    single.getGameLoadingFly().removeObject();
    single.setGameLoadingFly(null);

    setTimeout(function () {
        single.setPlaneHero(new PlaneHero(200, 500, 30, 8));
    }, 3000);
});

//test
//GameMessager.listen('Start', function (data) {
//    console.log(data);
//});
//GameMessager.listen('Start', function (data) {
//    console.log(data + '2');
//});

//GameMessager.trigger('Start', 'Jackey Rock');