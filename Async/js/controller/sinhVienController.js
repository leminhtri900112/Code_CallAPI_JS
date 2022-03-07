let sinhVienConTroller = {
  //controller render danh sách sinh viên
  renderTable: function (arr) {
    let tbody = document.getElementById("tbodySinhVien");
    let content = "";

    arr.map((item) => {
      content += `<tr>
                            <td>${item.id}</td>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td>${item.tinhDiemTrungBinh().toFixed(2)}</td>
                            <td>
                                <button class="btn btn-success" onclick="suaSinhVien(${
                                  item.id
                                })">Sửa</button>
                                <button class="btn btn-danger" onclick="xoaSinhVien(${
                                  item.id
                                })">Xóa</button>
                            </td>
                        </tr>`;
    });

    tbody.innerHTML = content;
  },

  //controller lấy thông tin sinh viên nhập vào
  layThongTinSinhVien: function () {
    let maSV = document.getElementById("txtMaSV").value;
    let tenSV = document.getElementById("txtTenSV").value;
    let emailSV = document.getElementById("txtEmail").value;
    let diemToan = document.getElementById("txtDiemToan").value;
    let diemLy = document.getElementById("txtDiemLy").value;
    let diemHoa = document.getElementById("txtDiemHoa").value;

    return {
      id: maSV,
      name: tenSV,
      email: emailSV,
      toan: diemToan,
      ly: diemLy,
      hoa: diemHoa,
    };
  },

  renderChiTietSinhVien: function (sv) {
    document.getElementById("txtMaSV").readOnly = true;
    // document.getElementById("themSV").style.display = "none";
    // document.getElementById("capNhatSV").style.display = "block";
    document.getElementById("txtMaSV").value = sv.id;
    document.getElementById("txtTenSV").value = sv.name;
    document.getElementById("txtEmail").value = sv.email;
    document.getElementById("txtDiemToan").value = sv.toan;
    document.getElementById("txtDiemLy").value = sv.ly;
    document.getElementById("txtDiemHoa").value = sv.hoa;
  },
};
