function swapMain(main){
	$(".formsanpham").addClass("is-hidden");
	$(".formkhachhang").addClass("is-hidden");
    $(".formnhanvien").addClass("is-hidden");
    $(".formnhacungcap").addClass("is-hidden");
    $(".formsp-ncc").addClass("is-hidden");
    $(".formhoadon").addClass("is-hidden");
    $(".formdondathang").addClass("is-hidden");
    $(".formcthoadon").addClass("is-hidden");
    $(".formctdondathang").addClass("is-hidden");
    $(".formgiamgia").addClass("is-hidden");

	$("."+main).removeClass("is-hidden");
}
$(document).ready(function(){
    swapMain("formsanpham");//mặc địch khi load trang chủ lên
    $(".menusanpham").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Sản phẩm</li>');
        swapMain("formsanpham");
        
    });
    $(".menukhachhang").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Khách hàng</li>');
        swapMain("formkhachhang");
       
    });
    $(".menunhanvien").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Nhân viên</li>');
        swapMain("formnhanvien");
    });
    $(".menunhacungcap").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Nhân viên</li>');
        swapMain("formnhacungcap");
    });
    $(".menusp-ncc").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Nhân viên</li>');
        swapMain("formsp-ncc");
    });
    $(".menuhoadon").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Nhân viên</li>');
        swapMain("formhoadon");
    });
    $(".menudondathang").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Nhân viên</li>');
        swapMain("formdondathang");
    });
    $(".menucthoadon").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Nhân viên</li>');
        swapMain("formcthoadon");
    });
    $(".menuctdondathang").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Nhân viên</li>');
        swapMain("formctdondathang");
    });
    $(".menugiamgia").on("click", function(){
        $(".titlestatus").html('<li class="breadcrumb-item"><a href="#">Danh mục</a></li><li class="breadcrumb-item active titlestatus">Nhân viên</li>');
        swapMain("formgiamgia");
    });
    showdataSP();
    showdataKH();
    showdataNV();
    showdataNCC();
    showdataSPNCC();
    showdataHD();
    showdataDDH();
    showdataCTHD();
    showdataCTDDH();
    showdataGG();
})