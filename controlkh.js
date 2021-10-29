$(document).ready(function(){
    //viết php khách hàng-----------------------------------------------------------------------------------------------------------------
$(".insertkh").on("click", function () {
    var dataclient={
        event : "insertKhachHang",
        makh_kh :$(".makh_kh").val(),
        tenkh_kh :$(".tenkh_kh").val(),
        sdt_kh : $(".sdt_kh").val(),
        email_kh : $(".email_kh").val(),
        diachi_kh : $(".diachi_kh").val(),
         
    } 
    console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
            console.log(res);
              showdataKH();
              if(res.sucess==1){
                  alert("Thêm thành công");          
              } 
              else
              {
                  alert("Thêm thất bại");
              }
        });
});
$(".editkh").on("click", function () {
    var dataclient={
        event : "updateKhachHang",
        makh_kh :$(".makh_kh").val(),
        tenkh_kh :$(".tenkh_kh").val(),
        sdt_kh : $(".sdt_kh").val(),
        email_kh : $(".email_kh").val(),
        diachi_kh : $(".diachi_kh").val(),
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        console.log(res); 
        showdataKH();
          
          if(res.sucess==1){
              alert("Sửa thành công");
          } 
          else
          {
              alert("Sửa thất bại");
          }
    });
    

})
$(".deletekh").on("click", function () {
    var dataclient={
        event:"deleteKH",
        makh_kh:$(".makh_kh").val()  
    } 
    //console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataKH();
          console.log(res); 
          if(res.sucess==1){
              alert("Xóa thành công");
          } 
          else
          {
              alert("Xóa thất bại");
          }
    });
    
})

//xem lại kh
$(".loaddataKH").on('click','.click_view_Kh', function(){
    var makh_kh=  $(this).parent().attr("data-makh_kh");
    var tenkh_kh=  $(this).parent().attr("data-tenkh_kh");
    var sdt_kh=  $(this).parent().attr("data-sdt_kh");
    var email_kh=  $(this).parent().attr("data-email_kh");
    var diachi_kh=  $(this).parent().attr("data-diachi_kh");

    $(".makh_kh").val(makh_kh);
    $(".tenkh_kh").val(tenkh_kh);
    $(".sdt_kh").val(sdt_kh);
    $(".email_kh").val(email_kh);
    $(".diachi_kh").val(diachi_kh);
   
})
$('.resetkh').on('click', function(){
    $(".makh_kh").val("");
    $(".tenkh_kh").val("");
    $(".sdt_kh").val("");
    $(".email_kh").val("");
    $(".diachi_kh").val("");
   
})
})
//show data KH--------------------------------------------------------------------------
function showdataKH(){
    var dataclient={
        event:"getdataKH",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       var stt=1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-makh_kh='+list.makh_kh+' data-tenkh_kh="'+list.tenkh_kh+'" data-sdt_kh="'+list.sdt_kh+'" data-email_kh="'+list.email_kh+'" data-diachi_kh="'+list.diachi_kh+'" >'+
        '<td>'+stt+'</td>'+
        "<td>"+list.makh_kh+"</td>"+
                "<td >"+list.tenkh_kh+"</td>"+
                "<td >"+list.sdt_kh+"</td>"+
                "<td >"+list.email_kh+"</td>"+
                "<td >"+list.diachi_kh+"</td>"+
                '<td class="click_view_Kh"><span class="btn btn-success">Xem</span></td>'+
                '</tr>';

                stt++;
       }
       console.log(htmls);
       $(".loaddataKH").html(htmls);

   });
}