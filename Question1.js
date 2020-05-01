const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
const answer = ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]

const solution = (record) => {
    let answer = []
    let log = []
    let id = []
    
    record.forEach(el => {
        log.push(el.split(' '))
    })

    log.forEach(el => {
        id.push(el[1])
    })
    
    const uniqueId = [...new Set(id)]
    let temp = []
    log.forEach(el => {
        if (el[0] === 'Enter') temp.push([el[1], 'came in', el[2]])
        if (el[0] === 'Leave') temp.push([el[1], 'has left'])
        if (el[0] === 'Change') temp.push([el[1], 'change', el[2]])
    })
    
    let chatLog = []

    temp.forEach(el => {
        uniqueId.forEach(i => {
            if (el[0] === i && el[1] === 'came in') chatLog.push([el[2], 'came in', i])
            if (el[0] === i && el[1] === 'has left') {
                chatLog.forEach(x => {
                    if (x[2] === i) chatLog.push([x[0], 'has left', i])
                })
            }
        })
    })

    let change = []
    
    temp.forEach(el => {
        if (el[1] === 'change') change.push([el[2], el[0]])
    })
    
    chatLog.forEach((el, index) => {
        change.forEach((i, idx) => {
            if (el[2] === i[1]) {
                chatLog[index][0] = i[0]
            }
        })
    })
    
    for (let i = chatLog.length - 1; i > 0; i--) {
        if (chatLog[i][1] === 'came in') change.push([chatLog[i][0], chatLog[i][2]])
        break
    }

    chatLog.forEach((el, index) => {
        change.forEach((i, idx) => {
            if (el[2] === i[1]) chatLog[index][0] = i[0]
        })
    })
    
    chatLog.forEach(i => {
        answer.push(`${i[0]} ${i[1]}.`)
    })
    
    return answer
}


console.log(solution(record))