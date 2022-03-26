function check()
{
	var ht=f.HoTen.value;
	var dc=f.DiaChi.value;
	var em=f.Email.value;
	var dt=f.DienThoai.value;
	
	var emReg=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	var dtReg=/(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^0[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)/
	if(ht=='')
	{
		alert('Họ tên không được bỏ trống');
		return false;
	}
	if(dc=='')
	{
		alert('Địa chỉ không được bỏ trống');
		return false;
	}
	if(em=='')
	{
		alert('Email không được bỏ trống');
		return false;
	}
	if(dt=='')
	{
		alert('Số điện thoại không được bỏ trống');
		return false;
	}
	if(emReg.test(em)==false)
	{
		alert('Email không hợp lệ');
		return false;
	}
	if(dtReg.test(dt)==false)
	{
		alert('Điện thoại không hợp lệ');
		return false;
	}
	
	return true;
}
