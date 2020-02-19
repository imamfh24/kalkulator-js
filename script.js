const tombol = document.querySelector('.container-tombol');
const layar = document.querySelector('#layar');

tombol.addEventListener('click', function (e) {
    const btnClick = e.target;
    const nilaiTombol = btnClick.innerText;

    if (nilaiTombol == 'C') {
        layar.value = '';
    } else if (nilaiTombol == '<') {
        layar.value = layar.value.slice(0, -1);
    } else if (nilaiTombol == '=') {
        layar.value = eval(layar.value);
    } else {
        //Menampilkan angka ke inputfield
        layar.value = layar.value + nilaiTombol;
    }



})