var arrUser = [];
var _id = 0;
var updateID = 0;
//--------------Save/Update----------------------------------------------------
$("#btnSave").click(function() {
  if (updateID > 0) {
    for (let i = 0; i < arrUser.length; i++) {
      if (arrUser[i].id == updateID) {
        arrUser[i].name = $("#nameID").val();
        arrUser[i].city = $("#cityID").val();
        arrUser[i].phone = $("#phoneID").val();
      }
      $("#btnSave").val("Save");
    }
    genrateFun();
    updateID = 0;
  } else {
    var emp1 = $.trim($("#nameID").val()).length;
    var emp2 = $.trim($("#cityID").val()).length;
    var emp3 = $.trim($("#phoneID").val()).length;
    console.log("." + emp1 + "." + emp2 + "." + emp3);
    if ((emp1 && emp2 && emp3) <= 0) {
      alert("All field required to fill");
    } else {
      var name = $("#nameID").val();
      var city = $("#cityID").val();
      var phone = $("#phoneID").val();
      arrUser.push({ id: ++_id, name: name, city: city, phone: phone });
      $("#btnSave").val("Save");
      genrateFun();
    }
  }
  clear();
});

//------------Edit--------------------------------------------------------------
$(document).on("click", "table#tableID>tr>td>a.edit", function() {
  $("#nameID").val(
    $(this)
      .parent()
      .parent()
      .find("td:eq(0)")
      .text()
  );
  $("#cityID").val(
    $(this)
      .parent()
      .parent()
      .find("td:eq(1)")
      .text()
  );
  $("#phoneID").val(
    $(this)
      .parent()
      .parent()
      .find("td:eq(2)")
      .text()
  );
  updateID = $(this)
    .parent()
    .parent()
    .attr("id");
  $("#btnSave").val("Update");
});
//------------Delete-------------------------------------------------
$(document).on("click", "table#tableID>tr>td>a.delete", function() {
  if (confirm("Are you sure to delete ?")) {
    var trID = $(this)
      .parent()
      .parent()
      .attr("id");
    $(this)
      .parent()
      .parent()
      .remove();

    for (let i = 0; i < arrUser.length; i++) {
      if (arrUser[i].id == trID) {
        arrUser.splice(i, 1);
      }
    }
    clear();
  }
});
//--------------------------Cancel-------------
$("#btnCancel").click(function() {
  clear();
  $("#btnSave").val("Save");
  updateID = 0;
});
//-----------------------Clear-----------------
function clear() {
  $("#nameID").val("");
  $("#cityID").val("");
  $("#phoneID").val("");
}
function genrateFun() {
  $("#tableID").html("");
  $("#tableID").append(
    "<tr><th>Name</th><th>City</th><th>Phone No</th><th>Action</th></tr>"
  );
  for (let i = 0; i < arrUser.length; i++) {
    $("#tableID").append(
      "<tr id='" +
        arrUser[i].id +
        "'><td>" +
        arrUser[i].name +
        "</td><td>" +
        arrUser[i].city +
        "</td><td>" +
        arrUser[i].phone +
        "</td><td >" +
        "<a class='edit'>Edit</a>|<a class='delete'>Delete</a></td></tr>"
    );
  }
}
