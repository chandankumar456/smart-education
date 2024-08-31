document.getElementById('justify-content').addEventListener('change', function() {
    document.querySelector('.pond').style.justifyContent = this.value;
});

document.getElementById('align-items').addEventListener('change', function() {
    document.querySelector('.pond').style.alignItems = this.value;
});
