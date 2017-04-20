$(".ui-imgbox-newpic").hide();
$(document).ready(function(){
   $(".ui-imgbox-newpic").hide();
   $("img").click(function(){
    $(".ui-imgbox-newpic")[0].src=$(this).attr("src");
    $(".ui-imgbox-newpic").show();
   });
   $(".ui-imgbox-newpic").click(function(){
    $(".ui-imgbox-newpic").hide();
   });
});

$(function(){
   $("#box2-bottom div:not(:first)").hide();
   $("#box2-Head-title li").each(function(index){
       $(this).click(function(){
          $("#box2-Head-title li.box2-Head-title-current").removeClass("box2-Head-title-current");
          $(this).addClass("box2-Head-title-current");
          $("#box2-bottom > div:visible").hide();
          $("#box2-bottom div:eq(" + index + ")").show();
        });
   });
});

  $("#box3-add").click(function(){
        var newlist='<div class="box3-list"><div class="box3-list-num">4</div><div class="box3-list-delete">Delete</div></div>';
        $(".box3-list").eq(-1).after(newlist);
     });
    $(document).on("click",".box3-list-delete",function(){ //动态绑定事件
        var n=$(".box3-list-delete").index(this);
         //alert(n);
         $(".box3-list").eq(n).remove();
    });

