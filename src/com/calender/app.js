import makeDay from './makeDay.js'

(function () {

    // 시작으로 현재날짜를 기준으로 그려진다.
    let date = new Date();

    const beforeYear  = document.getElementById('before-year');  
    const beforeMonth = document.getElementById('before-month');
    const afterMonth  = document.getElementById('after-month');
    const afterYear   = document.getElementById('after-year');

    let year  = date.getFullYear();
    let month = date.getMonth();

    beforeYear.addEventListener('click', function() {
        year--;
        date = date.setFullYear(year);
        date = new Date(date);       

        makeDay.makeDay(new Date(date));
    })

    beforeMonth.addEventListener('click', function() {
        month -= 1;
        if (month < 0) {
            year -= 1;
            month = 11;
        }
        date = new Date(year, month, 1); 

        makeDay.makeDay(new Date(date));
    })

    afterMonth.addEventListener('click', function() {
        month++;
        date = date.setMonth(month);
        date = new Date(date);

        makeDay.makeDay(new Date(date));
    })

    afterYear.addEventListener('click', function() {
        year++;
        date = date.setFullYear(year);
        date = new Date(date);
        
        makeDay.makeDay(new Date(date));
    })   

    makeDay.makeDay(date);
    
}());