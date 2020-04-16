function Main() {
    // 오늘(Default)
    const today = new Date();

    // 주 생성
    for (let i = 0; i < 6; i++) {
        // create
        const weeks = document.createElement('div');

        // class값 넣기
        weeks.setAttribute('class', 'weeks');

        document.getElementsByClassName('month')[0].append(weeks);
    }

    // 저번달
    const firstDay = dayOfWeek(firstDayWeek(today));

    if(firstDay !== 0) {
        let lastDay = beforeMonthLast(today) - firstDay + 1; // 달력에 보여질 저번 달의 날짜 중 제일 낮은 날짜
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
    for (let i = 1; i <= lastDay(today); i++) {
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
    for (let i = 1; i <= lastDay(today); i++) {
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

    // 

}

// default : 이번달

// 요일 return(0 ~ 6 => 일요일 ~ 토요일)
const dayOfWeek = (param) => {
    return param.getDay();
} 

// 이번 달의 첫날
const firstDayWeek = (day) => {
    return new Date(day.getFullYear(), day.getMonth(), 1);
}

// 이번 달의 마지막날
const lastDay = (day) => {
    return new Date(day.getFullYear(), day.getMonth() + 1, 0).getDate();
}

// 저번달의 마지막날
const beforeMonthLast = (day) => {
    return new Date(day.getFullYear(), 0, 0).getDate(); // 올해 1월일 경우 전년도 12월 31일로 나타남
}