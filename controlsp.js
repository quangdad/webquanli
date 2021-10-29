$(document).ready(function(){
        //viết php sản phẩm----------------------------------------------------------------------------------------------------------------
$(".insertsp").on("click", function () {
    var dataclient={
        event : "insertSanPham",
         matl_sp :$(".matl_sp").val(),
         tentl_sp :$(".tentl_sp").val(),
         hsp_sp : $(".hsp_sp").val(),
         dg_sp : $(".dg_sp").val(),
         
    } 
    console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
            console.log(res);
            showdataSP();
               
              if(res.sucess==1){
                  alert("Thêm thành công");
                  
              } 
              else
              {
                  alert("Thêm thất bại");
              }
        });
});
$(".editsp").on("click", function () {
    var dataclient={
        event : "updateSanPham",
         matl_sp :$(".matl_sp").val(),
         tentl_sp :$(".tentl_sp").val(),
         hsp_sp : $(".hsp_sp").val(),
         dg_sp : $(".dg_sp").val(),
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataSP();
          console.log(res.sucess); 
          if(res.sucess==1){
              alert("Sửa thành công");
          } 
          else
          {
              alert("Sửa thất bại");
          }
    });
})
$(".deletesp").on("click", function () {
    var dataclient={
        event:"deleteSP",
        matl_sp:$(".matl_sp").val()  
    } 
    //console.log(dataclient);
    showdataSP();
    queryDataGet("content.php",dataclient,function(res){
        showdataSP();
          console.log(res.sucess); 
          if(res.sucess==1){
              alert("Xóa thành công");
          } 
          else
          {
              alert("Xóa thất bại");
          }
    });
    
})

//xem lại SP
$(".loaddataSP").on('click','.click_view_SP', function(){
    var matl_sp=  $(this).parent().attr("data-matl_sp");
    var tentl_sp=  $(this).parent().attr("data-tentl_sp");
    var hsp_sp=  $(this).parent().attr("data-hsp_sp");
    var dg_sp=  $(this).parent().attr("data-dg_sp");

    $(".matl_sp").val(matl_sp);
    $(".tentl_sp").val(tentl_sp);
    $(".hsp_sp").val(hsp_sp);
    $(".dg_sp").val(dg_sp);
   
})

//reset SP
$('.resetsp').on('click', function(){
    $('.matl_sp').val("");
    $('.tentl_sp').val("");
    $('.hsp_sp').val("");
    $('.dg_sp').val("");
    console.log('reset');
})
})
//show data SP
function showdataSP(){
    var dataclient={
        event:"getdataSP",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       var stt =1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-matl_sp='+list.matl_sp+' data-tentl_sp="'+list.tentl_sp+'" data-hsp_sp="'+list.hsp_sp+'" data-dg_sp="'+list.dg_sp+'" >'+
                '<td>'+stt+'</td>'+
                "<td>"+list.matl_sp+"</td>"+
                "<td >"+list.tentl_sp+"</td>"+
                "<td >"+list.hsp_sp+"</td>"+
                "<td >"+list.soluong_sp+"</td>"+
                "<td >"+list.dg_sp+"</td>"+
                '<td class="click_view_SP"><span class="btn btn-success">Xem</span></td>'+
                '</tr>';

                stt++;
       }
       console.log(htmls);
       $(".loaddataSP").html(htmls);

   });
}