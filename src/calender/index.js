function Main() {
    const day = document.getElementsByClassName('day');
    // const createDay = document.createElement('p');
    const before = document.getElementsByClassName('before');
    
    // 저번달
    if(firstDayWeek() !== 0) {
        const lastDay = beforeMonthLast();
        for (let i = 0; i < firstDayWeek(); i++) {
            const element = before[i];
            
            element.innerHTML = i;
        }
    }
    
    let temp = 1;
    // 이번달
    for (let i = firstDayWeek(); i < lastDay() + firstDayWeek(); i++) {
        const element = day[i];

        element.innerHTML = temp;
        temp++;
    }

    // 다음달


}

// 오늘 요일 return(0 ~ 6 => 일요일 ~ 토요일)
function dayOfWeek() {
    const weeks = new Date().getDay();

    return weeks;
}

// 이번 달의 마지막날 return
function lastDay() {
    const now = new Date(); // 월 count가 0부터 시작
    const last = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    
    return last;
}

// 이번달의 첫날 요일 추출
function firstDayWeek() {
    const now = new Date();

    const firstDate = new Date(now.getFullYear(), now.getMonth(), 1);
    
    return firstDate.getDay();
}

// 저번달의 마지막날
function beforeMonthLast() {
    return new Date(new Date().getFullYear(), 0, 0).getDate(); // 올해 1월일 경우 전년도 12월 31일로 나타남
}