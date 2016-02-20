Frases = new Mongo.Collection('frases');



if (Meteor.isClient) {

  // This code only runs on the client
  angular.module('JuegoFrases',['angular-meteor']);

  angular.module('JuegoFrases').controller('eliminarFrase', ['$scope', '$meteor',
      function ($scope, $meteor) {

        $scope.eliminarFrase = function ($scope) {
          $scope.Frases.remove({frase:"frase"});
                  };

  }]);


  angular.module('JuegoFrases').controller('listaFrases', ['$scope', '$meteor',
      function ($scope, $meteor) {

        $scope.frases = $meteor.collection( function() {
              return Frases.find({}, { sort: { frase: 1 } })
            });
}]);

  angular.module('JuegoFrases').controller('agregarFrase', ['$scope', '$meteor',
    function ($scope, $meteor) {

      $scope.agregarFrase = function ($scope) {
        $scope.Frases.push( {
          frase: frase,
          createdAt: new Date() }
        );
      };

    }]);
}
