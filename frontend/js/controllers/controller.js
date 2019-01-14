myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formData = {};
        $scope.name = "Arunkumar Mohite";
        // $scope.Employee = {
        //     name: "Arunkumar",
        //     skills: ["Dot net developement, Mobile app developement"],

        // };

        $scope.table = {
            search: ""
        };
        $scope.toDoList = [{
                Priority: "High",
                Status: "In-Progress",
                DueDate: "2019-01-14",
                Project: "To Do list Project",
                Remark: "Working"
            },
            {
                Priority: "Low",
                Status: "Hold",
                DueDate: "2019-01-14",
                Project: "New Project",
                Remark: "Ready to assign"
            },
            {
                Priority: "Medium",
                Status: "In-Progress",
                DueDate: "2019-01-14",
                Project: "Ios Project",
                Remark: "Ready to assign"
            },

        ];
        $scope.Priorities = [{
            id: "1",
            Priority: "High"
           
        },
        {   id: "2",
            Priority: "Low"
           
        },
        {   id: "3", 
            Priority: "Medium"
        },

    ];
        $scope.modify = function (toDoList, event) {
            $scope.id = event.target.id;
            $scope.modifyField = true;
            $scope.viewField = true;
        };
        $scope.showAlert = function (event) {
            alert(event.target.id);
            $scope.id = id;
        }

        $scope.update = function (toDoList, event) {

            $scope.id = event.target.id;
           // alert($scope.selected);
            $scope.modifyField = false;
            $scope.viewField = false;

        };
        $scope.selected = [];

        $scope.cancel = function () {
            $scope.formData = {};
            $scope.showForm = false;
        };

        $scope.removeRow = function (event) {
            var index = -1;
            $scope.id = event.target.id;
            index = $scope.id;


            // var comArr = eval($scope.toDoList);
            // for (var i = 0; i < comArr.length; i++) {
            //     if (comArr[i].name === name) {
            //         index = i;
            //         break;
            //     }
            // }
            if (index === -1) {
                alert("Something gone wrong");
            } else {
                confirm("Are you sure to delete this record?")
            }

            $scope.toDoList.splice(index - 1, 1);
        };

        $scope.addRow = function () {
            // console.log("$scope.Priority", $scope.formData)
            // if (toDoForm.formData.Priority.$valid) {
            //     alert("True");
            // }
            $scope.toDoList.push({
                Priority: $scope.formData.Priority,
                Status: $scope.formData.Status,
                DueDate: $scope.formData.DueDate,
                Project: $scope.formData.Project,
                Remark: $scope.formData.Remark
            });
            $scope.formData = {};
            $scope.showForm = false;
        };

        $scope.addFrm = function () {
            $scope.showForm = true;
        }
        $scope.editRow = function () {
            Employee.name = name;
        }
        $scope.changeName = function () {
            Employee.name = name;
        }
        $scope.getdetail = function (value) {
            $scope.indexval = value;
            Cricketers[Value].name;

        };









        //----------------------Old code------------------------------------------------------
        $scope.suppliers = [{
            name: "Casey Slusse",
            supplier: "Regular Fit Cotton Top",
            invoice: "#1024587 invoice is Pending",
            img: 'img/mike.png'
        }, {
            name: " Dee Schlatter",
            supplier: "Regular Fit Cotton Top",
            invoice: "#1024588 invoice is Pending",
            img: 'img/mike.png'
        }, {
            name: " Byron Mccully",
            supplier: "Regular Fit Cotton Top",
            invoice: "#1024589 invoice is Pending",
            img: 'img/mike.png'
        }, {
            name: " Prince Stucky",
            supplier: "Regular Fit Cotton Top",
            invoice: "#1024590 invoice is Pending",
            img: 'img/mike.png'
        }];





        $scope.submitForm = function (data) {
            console.log("This is it");
            return new Promise(function (callback) {
                $timeout(function () {
                    callback();
                }, 5000);
            });
        };


        $scope.rate = 7;
        $scope.max = 10;
        $scope.isReadonly = false;

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };

        $scope.ratingStates = [{
                stateOn: 'glyphicon-ok-sign',
                stateOff: 'glyphicon-ok-circle'
            },
            {
                stateOn: 'glyphicon-star',
                stateOff: 'glyphicon-star-empty'
            },
            {
                stateOn: 'glyphicon-heart',
                stateOff: 'glyphicon-ban-circle'
            },
            {
                stateOn: 'glyphicon-heart'
            },
            {
                stateOff: 'glyphicon-off'
            }
        ];

        //modal example
        $scope.modalOpen = function () {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/content/modal.html',
                size: 'sm',
                controller: function ($scope) {
                    $scope.name = 'bottom';
                }
            });
        };


    })

    .controller('LinksCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/links.html");
        TemplateService.title = "Links"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })
    //Controller for ToDoList

    .controller('ToDoList', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/todolist.html");
        TemplateService.title = "ToXDoList"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();



    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });