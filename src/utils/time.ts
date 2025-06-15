/**
 * 计算目标日期与当前日期之间的年月日时差值
 * @param targetDate 目标日期，支持字符串(格式: YYYY-MM-DD)或Date对象
 * @returns 包含年、月、日、时差的对象 {years: number, months: number, days: number, hours: number}
 */
export function calculateDateDistance(targetDate: string | Date): {
  years: number
  months: number
  days: number
  hours: number
  totalDays: number
} {
  // 获取当前日期时间
  const currentDate = new Date()

  // 转换输入为目标日期对象
  const target = typeof targetDate === 'string'
    ? new Date(targetDate)
    : new Date(targetDate.getTime())

  // 确保目标日期在当前日期之前（交换日期如果目标日期更晚）
  let startDate: Date
  let endDate: Date
  if (target > currentDate) {
    startDate = currentDate
    endDate = target
  }
  else {
    startDate = target
    endDate = currentDate
  }

  // 计算总毫秒差
  const diffMs = endDate.getTime() - startDate.getTime()

  // 计算小时差（总小时数）
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60))

  // 计算天数差（总天数）
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  // 计算年份差
  let years = endDate.getFullYear() - startDate.getFullYear()

  // 计算月份差
  let months = endDate.getMonth() - startDate.getMonth()

  // 计算天数差（日级）
  let days = endDate.getDate() - startDate.getDate()

  // 计算小时差（除去整天后的小时数）
  const hours = totalHours % 24

  // 处理负数情况（借位计算）
  if (days < 0) {
    months -= 1
    // 获取上个月的天数
    const prevMonth = new Date(
      endDate.getFullYear(),
      endDate.getMonth() - 1,
      1,
    )
    const daysInPrevMonth = new Date(
      prevMonth.getFullYear(),
      prevMonth.getMonth() + 1,
      0,
    ).getDate()
    days = daysInPrevMonth - startDate.getDate() + endDate.getDate()
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  return {
    years,
    months,
    days,
    hours,
    totalDays,
  }
}
