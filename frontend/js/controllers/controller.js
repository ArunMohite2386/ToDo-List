myApp
  .controller("HomeCtrl", function (
    $scope,
    TemplateService,
    NavigationService,
    $timeout,
    toastr,
    $http,
    $uibModal,
    TodoList
  ) {
    $scope.template = TemplateService.getHTML("content/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.formData = {};
    $scope.table = {
      search: "",
      add: false
    };



    $scope.itemList = [];
    $scope.blisterPackTemplates = [{
      id: 1,
      name: "a"
    }, {
      id: 2,
      name: "b"
    }, {
      id: 3,
      name: "c"
    }];

    $scope.changedValue = function (item) {
      //alert(item.priority);
      //code for update to be written after mongo db connection
    }

    $scope.toDoLists = TodoList.getAll();
    $scope.allpriorities = TodoList.getddlPriority();
    $scope.enableEdit = function (todoObject) {
      TodoList.enableEdit(todoObject);
    };
    $scope.edit = function (todoObject) {
      TodoList.edit(todoObject);
    };
    $scope.delete = function (todoObject) {
      TodoList.delete(todoObject);
    };
    $scope.addToDoList = function () {
      TodoList.add($scope.formData);
      $scope.formData = {};
      $scope.table.add = false;
    };
    $scope.showAdd = function () {
      $scope.table.add = !$scope.table.add;
    };


  })

  .controller("LinksCtrl", function (
    $scope,
    TemplateService,
    NavigationService,
    $timeout,
    toastr,
    $http
  ) {
    $scope.template = TemplateService.getHTML("content/links.html");
    TemplateService.title = "todoList"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
  })
  //Controller for ToDoList

  .controller("ToDoList", function (
    $scope,
    TemplateService,
    NavigationService,
    $timeout,
    toastr,
    $http
  ) {
    $scope.template = TemplateService.getHTML("content/todolist.html");
    TemplateService.title = "ToDoList"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
  })

  // Example API Controller
  .controller("DemoAPICtrl", function (
    $scope,
    TemplateService,
    apiService,
    NavigationService,
    $timeout
  ) {
    apiService.getDemo($scope.formData, function (data) {
      console.log(data);
    });
  });