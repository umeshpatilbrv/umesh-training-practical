var UsersUtils;
(function (UsersUtils) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getName = function () {
            return "Brainvire";
        };
        return Users;
    }());
})(UsersUtils || (UsersUtils = {}));
var l1 = new UsersUtils.Users();
console.log(l1.getName());
