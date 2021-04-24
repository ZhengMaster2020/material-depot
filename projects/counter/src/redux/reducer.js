const initCountValue = 0
const counterReducer = (preState, action) => {
  const { type, data } = action
  if (!data) return initCountValue
  const { firstNum = initCountValue, secondNum = initCountValue } = data

  switch (type) {
    case 'add':
      return firstNum + secondNum
    case 'sub':
      return firstNum - secondNum
    case 'mul':
      return firstNum * secondNum
    case 'divi':
      return (firstNum / secondNum).toFixed(2)
    default:
      return initCountValue
  }
}

export default counterReducer
