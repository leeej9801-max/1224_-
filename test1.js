$(() => {
 
    function dr () {
    var html = "";

    for (i=0;i<25;i++) {
        let css1 = "1"
        if (i%2 === 0 ) css1 = "2"
        if (i === 6 ) css1 = "3"
        html += `<div class="bg${css1}"></div>`;   
    }
    $("section").html(html);
    state = true;
    }

    var state = false;
    $("button").off().on("click",function(e) {
        const index = $("button").index(e.target);
        if(index === 0) {
            dr();

        } else if (index === 1) {
         $("section").empty();
         state = false;

        } else if (index === 2) {
         if(!state) dr();
         else {
            $("section").empty();
            state=false;
        }
        }
    });
});