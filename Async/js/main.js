// render danh sách sinh viên

let renderTableDSSV = () => {
  sinhVienSerVice
    .layDanhSachSinhVien()
    .then((res) => {
      let dsSinhVien = res.data.map((sv) => {
        return new SinnhVien(sv.id, sv.name, sv.email, sv.toan, sv.ly, sv.hoa);
      });
      sinhVienConTroller.renderTable(dsSinhVien);
    })
    .catch((err) => {
      console.log("err", err);
    });
};
renderTableDSSV();

//thêm sinh viên
document.getElementById("themSV").addEventListener("click", () => {
  let thongTinSV = sinhVienConTroller.layThongTinSinhVien();
  //   console.log(thongTinSV);
  sinhVienSerVice
    .themSinhVien(thongTinSV)
    .then((res) => {
      //   console.log(res);
      renderTableDSSV();
    })
    .catch((err) => {
      console.log(err);
    });
});

//xóa sinh viên
xoaSinhVien = (id) => {
  //   console.log(id);
  sinhVienSerVice
    .xoaSinhVien(id)
    .then((res) => {
      //   console.log(res);
      renderTableDSSV();
    })
    .catch((err) => {
      console.log(err);
    });
};

//lấy sinh viên chi tiết
document.getElementById("txtMaSV").readOnly = false;
// document.getElementById("capNhatSV").style.display = "none";
// document.getElementById("themSV").style.display = "block";
suaSinhVien = (id) => {
  sinhVienSerVice
    .layChiTiet(id)
    .then((res) => {
      //   console.log(res);
      sinhVienConTroller.renderChiTietSinhVien(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

document.getElementById("capNhatSV").addEventListener("click", () => {
  let thongTinSV = sinhVienConTroller.layThongTinSinhVien();
  //   console.log(thongTinSV);
  sinhVienSerVice
    .capNhatSinhVien(thongTinSV.id, thongTinSV)
    .then((res) => {
      //   console.log(res);
      renderTableDSSV();
    })
    .catch((err) => {
      console.log(err);
    });
});
