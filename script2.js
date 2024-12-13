$(document).ready(function() {
    $("#hide").click(function(){

    })
    $(".show").click(function(){
        $("p").show();

    })
    $("#hide").click(function(){
        
    })
    $("#show").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn(" slow");
        $("#div3").fadeIn(3000);
    })
    $("fade").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut(" slow");
        $("#div3").fadeOut(3000);
    })
    $("#bbn").selectable();
    $("#cars").sortable();
    $(".accordion").accordion();
    $(".accordion").resizable();
    $(".accordion").draggable();
    $("#pop").dialog();
})