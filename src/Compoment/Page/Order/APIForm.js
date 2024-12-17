import React, { useState } from "react";
import useAxios from "../../../Context/API/UseAxios";
const Tinh = () => {
  const [selectTinh, setSelectTinh] = useState(null);
  const [selectQuan, setSelectQuan] = useState(null);
  const getTinh = useAxios("https://esgoo.net/api-tinhthanh/1/01.htm");
  const getQuan = useAxios(
    `https://esgoo.net/api-tinhthanh/2/${selectTinh && selectTinh}.htm`
  );
  const getPhuong = useAxios(
    `https://esgoo.net/api-tinhthanh/3/${selectQuan && selectQuan}.htm`
  );

  const handleSelecTinh = (e) => {
    const selectOption = e.target.options[e.target.selectedIndex];
    const getId = selectOption.getAttribute("data-id-tinh");
    setSelectTinh(getId);
    setSelectQuan(null);
  };
  const handleSelecQuan = (e) => {
    const selectOption = e.target.options[e.target.selectedIndex];
    const getId = selectOption.getAttribute("data-id-quan");
    setSelectQuan(getId);
  };
  return (
    <div className="form">
      <div class="form-group">
        <select onChange={handleSelecTinh} required>
          <option>Chọn tỉnh thành</option>
          {getTinh.data &&
            getTinh.data.map((item) => (
              <option key={item.id} value={item.name} data-id-tinh={item.id}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
      <div class="form-group">
        <select onChange={handleSelecQuan} required>
          <option>Chọn Quận/Huyện</option>
          {getQuan.data &&
            getQuan.data.map((item) => (
              <option key={item.id} value={item.name} data-id-quan={item.id}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
      <div class="form-group">
        <select required>
          <option>Chọn Phường/Xã</option>
          {getPhuong.data &&
            getPhuong.data.map((item) => (
              <option key={item.id} value={item.name} data-id-tinh={item.id}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Tinh;
