const n = 5
const users = [2,1,2,6,2,4,3,3]

const solution = (n, users) => {
    let answer = []
    let rate = []
    let counter = 0
    let sorted = users.sort((a,b) => a-b)
    for (let i = 1; i < n+1; i++) {
        for (let j = 0; j < sorted.length; j++) {
            if (i === sorted[j]) {
                counter ++
            } else {
                rate.push([counter / sorted.length, i])
                for (let a = counter; a > 0; a--) {
                    sorted.shift()
                }
                counter = 0
                break
            }
        }
    }
    const sortRate = rate.sort((a,b) => b[0]-a[0])
    sortRate.forEach(i => {
        answer.push(i[1])
    })
    
    return answer
}

console.log(solution(n, users))