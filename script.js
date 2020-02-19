const tombol = document.querySelector('.container-tombol');
const layar = document.querySelector('#layar');
let resetLayar = false;
let bolehHitung = false;
let tmpVal = ''
let operator = ''

tombol.addEventListener('click', function (e) {
    const btnClick = e.target;
    const nilaiTombol = btnClick.innerText;

    if (nilaiTombol == 'C') {
        layar.value = '';
    } else if (nilaiTombol == '<') {
        layar.value = layar.value.slice(0, -1);
    } else if (nilaiTombol == '=') {
        if (bolehHitung == true) {
            layar.value = eval(tmpVal + operator + layar.value)
            bolehHitung = false;
        }
    } else if (btnClick.classList.contains('operator')) {
        if (bolehHitung == true) {
            layar.value = eval(tmpVal + operator + layar.value)
            bolehHitung = false;
        }
        tmpVal = layar.value;
        operator = nilaiTombol;
        resetLayar = true;
    } else {
        if (resetLayar == true) {
            layar.value = nilaiTombol;
            resetLayar = false;
            bolehHitung = true;
        } else {
            //Menampilkan angka ke inputfield
            layar.value = layar.value + nilaiTombol;
        }
    }
})