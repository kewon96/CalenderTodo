import * as dayCalc from './dayCalc.js';

export const makeDay = (date) => {
    // 오늘(Default)
    
    let year = date.getFullYear();
    let month = date.getMonth(); // 0~11
    let day = date.getDate();

    document.getElementById('strMonth').innerHTML = `${month + 1}월`;
    document.getElementById('yearCount').innerHTML = `${year}년`;

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

    let firstDay = dayCalc.dayOfWeekDate(new Date(year, month, 1)); // 이번달 첫날의 요일
    if(firstDay !== 0) { // 첫날이 일요일이라면 전 달 항목은 보여지지않는다.
        let lastDay = dayCalc.lastDate(year, month - 1) - firstDay + 1; // 달력에 보여질 저번 달의 날짜 중 제일 낮은 날짜
        for (let i = 0; i < firstDay; i++) {
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
    for (let i = 1; i <= dayCalc.lastDate(year, month); i++) {
        // create
        const nowElement = document.createElement('p');
        nowElement.appendChild(document.createTextNode(i));
        
        // class값 넣기
        nowElement.setAttribute('class', 'now day')

        // 순차적으로 넣기(document.getElementsByClassName('weeks')[order])
        let weeks = document.getElementsByClassName('weeks')[order];
        weeks.append(nowElement);

        if(weeks.childElementCount >= 7) {
            order += 1;
        } 
    }

    // 다음달
    /**
     * 현재 달의 마지막날의 요일이 토요일이라면 6번째줄에만 보여지게
     * 그게 아니라면 5번째줄부터
     */    
    let nextMonthFirstDay = dayCalc.dayOfWeekDate(new Date(year, month + 1, 1));
    let operator = 0;

    if (order === 4) {
        operator = 14 - nextMonthFirstDay;
    } else {
        operator = 7 - nextMonthFirstDay;
    }

    for (let i = 1; i <= operator; i++) {
        // create
        const afterElement = document.createElement('p');
        afterElement.appendChild(document.createTextNode(i));
        
        // class값 넣기
        afterElement.setAttribute('class', 'after day');

        let weeks = document.getElementsByClassName('weeks')[order];
        weeks.append(afterElement);

        if(weeks.childElementCount >= 7) {
            order += 1;
        } 
    }
    const nowDay      = document.querySelectorAll('.now.day');
    const choiceDay   = document.querySelector('.choice-day');

    // 클릭하면 오른쪽의 todo가 변환
    nowDay.forEach(item => {
        item.addEventListener('click', function() {

            let day = item.innerText; // 선택한 날짜
            let todoTitle = `${year}년 ${month + 1}월 ${day}일`;
            
            // document.querySelector('.todo-container').style.cssText += 'transition-duration: 1s; display: block;';
            // document.querySelector('.todo-container').style.display = 'block';
            document.querySelector('.todo-container').style.transition = '0.5s';
            document.querySelector('.todo-container').style.opacity = '1';

            document.querySelector('.content').focus();

            choiceDay.children.item(0).innerHTML = todoTitle;
            
        });
    });
}

export default { makeDay };