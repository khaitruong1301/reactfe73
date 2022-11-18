
//Đối với state là reference value (object, array) thì khi thay đổi state phải return về state mới bằng cách clone state ra vùng nhớ mới
const stateDefault = [
    {taiKhoan:'khaido',matKhau:'123'},
    {taiKhoan:'sangng',matKhau:'321'}
]

export const arrNguoiDungReducer =  (state = stateDefault, action) => {

    switch(action.type) {
        case 'THEM_NGUOI_DUNG': {
            state.push(action.payload);
            return [...state]; //immutable: tính bất biến của redux
        }
        // case :

        default: return state;
    }
}

