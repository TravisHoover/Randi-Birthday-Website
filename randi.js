function expandButtons() {
    var x = document.getElementById('share-buttons');
    if (x.style.display == '' || x.style.display === 'none') {
        x.style.display = 'block';
    }
    else {
        x.style.display = 'none';
    }
}
