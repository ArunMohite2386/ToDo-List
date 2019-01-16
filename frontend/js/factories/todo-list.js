myApp.factory("TodoList", function() {
  var toDoList = [
    {
      _id: 1,
      priority: "High",
      status: "In-Progress",
      dueDate: Date(),
      project: "To Do list Project",
      remark: "Working",
      edit: false
    },
    {
      _id: 2,
      priority: "Low",
      status: "Hold",
      dueDate: Date(),
      project: "New Project",
      remark: "Ready to assign",
      edit: false
    },
    {
      _id: 3,
      priority: "Medium",
      status: "In-Progress",
      dueDate: Date(),
      project: "Ios Project",
      remark: "Ready to assign",
      edit: false
    }
  ];
  var prioritiesDetails = [
    {
      _id: "1",
      priority: "High"
    },
    {
      _id: "2",
      priority: "Low"
    },
    {
      _id: "3",
      priority: "Medium"
    }
  ];
  return {
    getAll: function() {
      return toDoList;
    },    
    getddlPriority: function()
    {
      return prioritiesDetails;
    },
    add: function(todoObject) {
      toDoList.push(todoObject);
    },
    edit: function(todoObject) {
      todoObject.edit = false;
    },
    enableEdit: function(todoObject) {
      todoObject.edit = true;
    },
    delete: function(todoObject) {
      // Remove the Object from the Array
      _.remove(toDoList, function(n) {
        return n._id == todoObject._id;
      });
    }
  };
});
