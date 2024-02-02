document.getElementById('Time').value = '12:00 PM'; // Set default value for Time input

// QR Code Details default values
var defaultQRData = {
    date: '2024-02-01',
    time: '12:00 PM',
    legacyPartId: '123',
    empID: 'rjk2019',
    minthk: '2mm',
    maxthk: '5mm',
    avgthk: '3.5mm',
};

Object.keys(defaultQRData).forEach(function (key) {
    document.getElementById(key).value = defaultQRData[key];
});

let defaultSystemData = {
    status: 'completed',
    changeLog: 'Done',
    batch: 'B141',
    description: 'best quality and modern construction of period.',
};

Object.keys(defaultSystemData).forEach(function (key) {
    document.getElementById(key).value = defaultSystemData[key];
});


function submitForm() {
    showLabel();
}

function showLabel() {
    var weight = document.getElementById('weight').value;
    var width = document.getElementById('width').value;
    var targetDensity = document.getElementById('targetDensity').value;
    var length = document.getElementById('length').value;

    var labelContent = `Weight: ${weight}Kg<br>Width: ${width}cm<br>Density:${targetDensity}<br>Length:${length}cm`;

    document.getElementById('label').innerHTML = '<p>' + labelContent + '</p>';
}