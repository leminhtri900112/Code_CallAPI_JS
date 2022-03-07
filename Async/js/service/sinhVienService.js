const BASE_URL = "https://620e4f75585fbc3359ddb276.mockapi.io";

const sinhVienSerVice = {
  layDanhSachSinhVien: function () {
    return axios({
      url: `${BASE_URL}/sinhvien`,
      method: "GET",
    });
  },

  themSinhVien: function (_data) {
    return axios({
      url: `${BASE_URL}/sinhvien`,
      method: "POST",
      data: _data,
    });
  },

  xoaSinhVien: function (id) {
    return axios({
      url: `${BASE_URL}/sinhvien/${id}`,
      method: "DELETE",
    });
  },

  layChiTiet: function (id) {
    return axios({
      url: `${BASE_URL}/sinhvien/${id}`,
      method: "GET",
    });
  },

  capNhatSinhVien: function (id, _data) {
    return axios({
      url: `${BASE_URL}/sinhvien/${id}`,
      method: "PUT",
      data: _data,
    });
  },
};
