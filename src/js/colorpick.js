// カラーコードから色を更新する関数
function updateColor() {
    let colorCode = document.getElementById('colorInput').value;
    let preview = document.getElementById('colorPreview');
    preview.style.backgroundColor = colorCode;
}

// RGB値から色を更新する関数
function updateRGB() {
    let r = document.getElementById('rRange').value;
    let g = document.getElementById('gRange').value;
    let b = document.getElementById('bRange').value;
    
    let preview = document.getElementById('colorPreview');
    // RGB値を元にbackgroundColorを更新
    preview.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
