import dayjs from 'dayjs'

export function getMonth(month=dayjs().month()){
    const year = dayjs().year()
    // remember to tamper with - firstdayof
    const firstDayOfMonth = dayjs(new Date(year,month,0)).day()
    let currentMonthCount = 0 - firstDayOfMonth
    const daysMatrix = new Array(5).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount++
            return dayjs(new Date(year,month,currentMonthCount))
        })
    })
    return daysMatrix
}