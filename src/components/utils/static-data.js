let hourList = []
for (let i = 7; i <= 20; i++) {
    let hourItem = {
        key: `${i}-時`,
        value: i.toString(),
        text: `${i} 時`,
    }
    hourList.push(hourItem)
}

let minuteList = []
for (let i = 0; i <= 50; i = i + 10) {
    let minuteItem = {
        key: `${i}-分`,
        value: i.toString(),
        text: `${i === 0 ? '00' : i} 分`,
    }
    minuteList.push(minuteItem)
}

let memberList = []
for (let i = 2; i <= 10; i++) {
    let item = {
        key: `${i}-人`,
        value: i.toString(),
        text: `${i} 人`,
    }
    memberList.push(item)
}

export const hoursList = hourList;
export const minutesList = minuteList;
export const membersList = memberList;

