import makeDay from './makeDay.js';

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
        year -= 1;

        makeDay.makeDay(new Date(year, month, 1));
    });

    beforeMonth.addEventListener('click', function() {
        month -= 1;
        if (month < 0) {
            year -= 1;
            month = 11;
        }

        makeDay.makeDay(new Date(year, month, 1));
    });

    afterMonth.addEventListener('click', function() {
        month += 1;
        if (month > 11) {
            year += 1;
            month = 0;
        }

        makeDay.makeDay(new Date(year, month, 1));
    });

    afterYear.addEventListener('click', function() {
        year += 1;
        
        makeDay.makeDay(new Date(year, month, 1));
    });

    makeDay.makeDay(new Date(year, month, 1));

    const nowDay      = document.querySelectorAll('.now.day');
    const choiceDay   = document.querySelector('.choice-day');

    // 클릭하면 오른쪽의 todo가 변환
    nowDay.forEach(item => {
        item.addEventListener('click', event => {
            let day = item.innerText;
            choiceDay.children.item(0).innerHTML = `${year} / ${month + 1} / ${day}`;
            
        });
    });

}());