function calculateNumber(type, a, b) {
    if(type === 'SUM') {
      const firstNumber = Math.round(a);
      const secondNumber = Math.round(b);
      return firstNumber + secondNumber;
    }
    if(type === 'SUBTRACT') {
      const firstNumber = Math.round(a);
      const secondNumber = Math.round(b);
      return firstNumber - secondNumber;
    }
    if(type === 'DIVIDE') {
      const firstNumber = Math.round(a);
      const secondNumber = Math.round(b);
      if (secondNumber === 0) {
        return 'Error';
      }
      return firstNumber / secondNumber;
  
    }
    
  }
  module.exports = calculateNumber;
  