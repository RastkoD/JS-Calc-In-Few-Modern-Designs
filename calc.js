let prevVal = '';
let newVal = '';
let resultVal = '';
let mathOperator = '';
let decimalClicked = false;
let valMemStored = '';

function numButPress(num) {
  if (resultVal) {
    newVal = num;
    resultVal = '';
  } else {
    if (num === '.') {
      if (decimalClicked != true) {
        newVal += num;
        decimalClicked = true;
      }
    } else {
      newVal += num;
    }
  }
  document.getElementById('entry').value = newVal;
}

function mathButPress(operator) {
  if (!resultVal) {
    prevVal = newVal;
  } else {
    prevVal = resultVal;
  }
  newVal = '';
  decimalClicked = false;
  mathOperator = operator;
  resultVal = '';
  document.getElementById('entry').value = '';
}

function equalButPress(num) {
  decimalClicked = false;
  prevVal = parseFloat(prevVal);
  newVal = parseFloat(newVal);

  switch (mathOperator) {
    case '+':
      resultVal = prevVal + newVal;
      break;
    case '-':
      resultVal = prevVal - newVal;
      break;
    case '*':
      resultVal = prevVal * newVal;
      break;
    case '/':
      resultVal = prevVal / newVal;
      break;
    default:
      resultVal = newVal;
  }

  prevVal = resultVal;
  document.getElementById('entry').value = resultVal;
}

function clearButPress() {
  prevVal = '';
  newVal = '';
  resultVal = '';
  mathOperator = '';
  decimalClicked = false;
  document.getElementById('entry').value = '0';
}

function copyButPress(num) {
  valMemStored = document.getElementById('entry').value;
}

function pasteButPress(num) {
  if (valMemStored) {
    document.getElementById('entry').value = valMemStored;
    newVal = valMemStored;
  }
}

// Modern
let prevValM = '';
let newValM = '';
let resultValM = '';
let mathOperatorM = '';
let decimalClickedM = false;
let valMemStoredM = '';

function numButPressM(num) {
  if (resultValM) {
    newValM = num;
    resultValM = '';
  } else {
    if (num === '.') {
      if (decimalClickedM != true) {
        newValM += num;
        decimalClickedM = true;
      }
    } else {
      newValM += num;
    }
  }
  document.getElementById('entryM').value = newValM;
}

function mathButPressM(operator) {
  if (!resultValM) {
    prevValM = newValM;
  } else {
    prevValM = resultValM;
  }
  newValM = '';
  decimalClickedM = false;
  mathOperatorM = operator;
  resultValM = '';
  document.getElementById('entryM').value = '';
}

function equalButPressM(num) {
  decimalClickedM = false;
  prevValM = parseFloat(prevValM);
  newValM = parseFloat(newValM);

  switch (mathOperatorM) {
    case '+':
      resultValM = prevValM + newValM;
      break;
    case '-':
      resultValM = prevValM - newValM;
      break;
    case '*':
      resultValM = prevValM * newValM;
      break;
    case '/':
      resultValM = prevValM / newValM;
      break;
    default:
      resultValM = newValM;
  }

  prevValM = resultValM;
  document.getElementById('entryM').value = resultValM;
}

function clearButPressM() {
  prevValM = '';
  newValM = '';
  resultValM = '';
  mathOperatorM = '';
  decimalClickedM = false;
  document.getElementById('entryM').value = '0';
}

function copyButPressM(num) {
  valMemStoredM = document.getElementById('entryM').value;
}

function pasteButPressM(num) {
  if (valMemStoredM) {
    document.getElementById('entryM').value = valMemStoredM;
    newValM = valMemStoredM;
  }
}

// ModernX
let prevValMX = '';
let newValMX = '';
let resultValMX = '';
let mathOperatorMX = '';
let decimalClickedMX = false;
let valMemStoredMX = '';

function numButPressMX(num) {
  if (resultValMX) {
    newValMX = num;
    resultValMX = '';
  } else {
    if (num === '.') {
      if (decimalClickedMX != true) {
        newValMX += num;
        decimalClickedMX = true;
      }
    } else {
      newValMX += num;
    }
  }
  document.getElementById('entryMX').value = newValMX;
}

function mathButPressMX(operator) {
  if (!resultValMX) {
    prevValMX = newValMX;
  } else {
    prevValMX = resultValMX;
  }
  newValMX = '';
  decimalClickedMX = false;
  mathOperatorMX = operator;
  resultValMX = '';
  document.getElementById('entryMX').value = '';
}

function equalButPressMX(num) {
  decimalClickedMX = false;
  prevValMX = parseFloat(prevValMX);
  newValMX = parseFloat(newValMX);

  switch (mathOperatorMX) {
    case '+':
      resultValMX = prevValMX + newValMX;
      break;
    case '-':
      resultValMX = prevValMX - newValMX;
      break;
    case '*':
      resultValMX = prevValMX * newValMX;
      break;
    case '/':
      resultValMX = prevValMX / newValMX;
      break;
    default:
      resultValMX = newValMX;
  }

  prevValMX = resultValMX;
  document.getElementById('entryMX').value = resultValMX;
}

function clearButPressMX() {
  prevValMX = '';
  newValMX = '';
  resultValMX = '';
  mathOperatorMX = '';
  decimalClickedMX = false;
  document.getElementById('entryMX').value = '0';
}

function copyButPressMX(num) {
  valMemStoredMX = document.getElementById('entryMX').value;
}

function pasteButPressMX(num) {
  if (valMemStoredMX) {
    document.getElementById('entryMX').value = valMemStoredMX;
    newValMX = valMemStoredMX;
  }
}
