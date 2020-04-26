import * as dayCalc from './dayCalc.js';

export const makeDay = (date) => {
    // 오늘(Default)
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1;

    document.getElementById('strMonth').innerHTML = String(date).substr(4, 3);
    document.getElementById('yearCount').innerHTML = year;

    // 초기화
    if(document.querySelector('.week-set').innerHTML !== '') {
        document.querySelector('.week-set').innerHTML = '';
    }

    // 주 생성
    for (let i = 0; i < 6; i++) {
        // create
        const weeks = document.createElement('div');

        // class값 넣기
        weeks.setAttribute('class', 'weeks');

        document.getElementsByClassName('week-set')[0].append(weeks);
    }

    let firstDay = dayCalc.dayOfWeekDate(year, month, 1); // 이번달 첫날의 요일
    if(firstDay !== 0) {
        let lastDay = dayCalc.lastDate(year, month - 2) - firstDay + 2; // 달력에 보여질 저번 달의 날짜 중 제일 낮은 날짜
        for (let i = 0; i < firstDay - 1; i++) {
            // create
            const beforeElement = document.createElement('p');
            beforeElement.appendChild(document.createTextNode(lastDay++));

            // class값 넣기
            beforeElement.setAttribute('class', 'before day');

            // 첫번째 weeks에 넣기(document.getElementsByClassName('weeks')[0])
            document.getElementsByClassName('weeks')[0].append(beforeElement);
        }
    }

    // 이번달
    let order = 0; // 주 순서
    for (let i = 1; i < dayCalc.lastDate(year, month); i++) {
        // create
        const nowElement = document.createElement('p');
        nowElement.appendChild(document.createTextNode(i));
        
        // class값 넣기
        nowElement.setAttribute('class', 'now day')

        // 순차적으로 넣기(document.getElementsByClassName('weeks')[order])
        let weeks = document.getElementsByClassName('weeks')[order];
        weeks.append(nowElement);

        if(weeks.childElementCount >= 7) {
            order++;
        } 
    }

    // 다음달
    /**
     * 현재 달의 마지막날의 요일이 토요일이라면 6번째줄에만 보여지게
     * 그게 아니라면 5번째줄부터
     */
    let lastDayWeek = dayCalc.dayOfWeekDate(dayCalc.lastDate(year, month));    
    for (let i = 1; i <= 13 - lastDayWeek; i++) {
        // create
        const afterElement = document.createElement('p');
        afterElement.appendChild(document.createTextNode(i));
        
        // class값 넣기
        afterElement.setAttribute('class', 'after day');

        let weeks = document.getElementsByClassName('weeks')[order];
        weeks.append(afterElement);

        if(weeks.childElementCount >= 7) {
            order++;
        } 
    }
}

export default { makeDay };