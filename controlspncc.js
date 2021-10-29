$(document).ready(function(){
    //viết php sản phẩm nhà cc---------------------------------------------------------------------------------------------------------
$(".insertsp_ncc").on("click", function () {
    var dataclient={
        event : "insertSPNCC",
        mancc_spncc :$(".mancc_spncc").val(),   
        masp_spncc :$(".masp_spncc").val(),      
    } 
    console.log(dataclient);
        queryDataGet("content.php",dataclient,function(res){
              console.log(res); 
              showdataSPNCC();
              if(res.sucess==1){
                  alert("Thêm thành công");          
              } 
              else
              {
                  alert("Thêm thất bại");
              }
        });
});
$(".editsp_ncc").on("click", function () {
    var dataclient={
        event : "editSPNCC",
        mancc_spncc :$(".mancc_spncc").val(),   
        masp_spncc :$(".masp_spncc").val(),
    } 
    console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataSPNCC();
          console.log(res); 
          if(res.sucess==1){
              alert("Sửa thành công");
          } 
          else
          {
              alert("Sửa thất bại");
          }
    });
    

})
$(".deletesp_ncc").on("click", function () {
    var dataclient={
        event : "deleteSPNCC",
        mancc_spncc :$(".mancc_spncc").val(), } 
    //console.log(dataclient);
    queryDataGet("content.php",dataclient,function(res){
        showdataSPNCC();
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

//xem tt SPNCC
$(".loaddataSPNCC").on('click','.click_view_SPNCC', function(){
    var masp_spncc=  $(this).parent().attr("data-masp_spncc");
    var mancc_spncc=  $(this).parent().attr("data-mancc_spncc");

    $(".masp_spncc").val(masp_spncc);
    $(".mancc_spncc").val(mancc_spncc);
})
//reset SP-NCC
$('.resetsp_ncc').on('click', function(){
    $(".masp_spncc").val("");
    $(".mancc_spncc").val("");
})
})
//show data sản phẩm nhà cung cấp
function showdataSPNCC(){
    var dataclient={
        event:"getdataSPNCC",
    } 
    queryDataGet("content.php",dataclient,function(res){
       console.log(res);
       var data=res.items; 
       var htmls='';
       let stt =1;
       for(var x in data){    
        var list=data[x];
        htmls=htmls+'<tr data-masp_spncc="'+list.masp_spncc+'" data-mancc_spncc="'+list.mancc_spncc+'">'+
        '<td>'+stt+'</td>'+
        "<td>"+list.masp_spncc+"</td>"+
        "<td >"+list.mancc_spncc+"</td>"+
        '<td class="click_view_SPNCC"><span class="btn btn-success">Xem</span></td>'+
        '</tr>';
                
        stt++;
                
       }
       console.log(htmls);
       $(".loaddataSPNCC").html(htmls);

   });
}
