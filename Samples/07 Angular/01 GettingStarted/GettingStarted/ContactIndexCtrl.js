(function () {

    function ContactIndexCtrl($scope) {
        $scope.contacts = [
            { id: 1, name: "Ori", email: "ori@gmail.com" },
            { id: 2, name: "Roni", email: "roni@gmail.com" },
        ];

        $scope.add = function () {
            if (!$scope.newName) {
                return;
            }

            var contact = {
                id: -1,
                name: $scope.newName,
                email: $scope.newName + "@gmail.com",
            };

            $scope.contacts.push(contact);
        }

        $scope.remove = function (index) {
            $scope.contacts.splice(index, 1);
        }
    }


    angular.module("MyApp").controller("ContactIndexCtrl", ContactIndexCtrl);

})();
