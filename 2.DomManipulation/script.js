 $(document).ready(function() {
        //change text of an element
        
            $("p").text("The text has been changed!");
        
        //change attribute of an element
        $("#changeImage").click(function() {
            $("img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmeMJAmB46OpLujTUmBLGRkpZSvIV2k4A-iw&s");
        });
        
        //add class to an element
        $("h2").addClass("highlight");

    });