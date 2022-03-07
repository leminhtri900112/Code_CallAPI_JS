class SinnhVien {
  constructor(id, name, email, toan, ly, hoa) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
  }

  tinhDiemTrungBinh = () => {
    return (this.toan + this.ly + this.hoa) / 3;
  };
}
