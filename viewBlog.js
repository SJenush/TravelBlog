$(document).ready(function () {
    $("#btn_cmt").click(function (e) { 
        var txt=$("#addComment").val();
        if(txt==""){
            alert("Please enter comment");
        }else{
            var content='<div class="comment mt-3"><strong>Guest</strong><p>'+txt+'</p><button class="btn btn-outline-light btn-sm"><i class="fas fa-thumbs-up like"></i></button></div>';
            $("#div_cmt").append(content);
            $("#addComment").val("");
        }
    });

    $("#div_cmt").on("click", ".like", function (e) { 
        if (this.style.color == "blue") {
            this.style.color = "gray";
        } else {
            this.style.color = "blue";
        }
    });
});