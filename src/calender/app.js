import makeDay from './makeDay.js'

(function () {

    // 시작으로 현재날짜를 기준으로 그려진다.
    let date = new Date();

    const beforeYear = document.getElementById('before-year');  
    const beforeMonth = document.getElementById('before-month');
    const afterMonth = document.getElementById('after-month');
    const afterYear = document.getElementById('after-year');

    let year = date.getFullYear();
    let month = date.getMonth();

    beforeYear.addEventListener('click', function() {
        date = date.setFullYear(year - 1);
        date = new Date(date);
        
        makeDay.makeDay(new Date(date));
    })

    beforeMonth.addEventListener('click', function() {
        date = date.setMonth(month - 1);
        date = new Date(date);

        makeDay.makeDay(new Date(date));
    })

    afterMonth.addEventListener('click', function() {
        date = date.setMonth(month + 1);
        date = new Date(date);

        makeDay.makeDay(new Date(date));
    })

    afterYear.addEventListener('click', function() {
        date = date.setFullYear(year + 1);
        date = new Date(date);
        
        makeDay.makeDay(new Date(date));
    })

    makeDay.makeDay(date);
    

}());