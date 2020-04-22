import makeDay from './makeDay.js'

(function () {

    // 시작으로 현재날짜를 기준으로 그려진다.
    let date = new Date();

    const beforeYear = document.getElementById('before-year');  
    const beforeMonth = document.getElementById('before-month');
    const afterMonth = document.getElementById('after-month');
    const afterYear = document.getElementById('after-year');

    beforeYear.addEventListener('click', function() {

    })

    beforeMonth.addEventListener('click', function() {

    })

    afterMonth.addEventListener('click', function() {

    })

    afterYear.addEventListener('click', function() {

    })

    makeDay.makeDay(date);
    

}());