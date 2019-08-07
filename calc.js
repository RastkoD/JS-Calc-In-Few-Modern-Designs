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

// Black
let prevValB = '';
let newValB = '';
let resultValB = '';
let mathOperatorB = '';
let decimalClickedB = false;
let valMemStoredB = '';

function numButPressB(num) {
  if (resultValB) {
    newValB = num;
    resultValB = '';
  } else {
    if (num === '.') {
      if (decimalClickedB != true) {
        newValB += num;
        decimalClickedB = true;
      }
    } else {
      newValB += num;
    }
  }
  document.getElementById('entryB').value = newValB;
}

function mathButPressB(operator) {
  if (!resultValB) {
    prevValB = newValB;
  } else {
    prevValB = resultValB;
  }
  newValB = '';
  decimalClickedB = false;
  mathOperatorB = operator;
  resultValB = '';
  document.getElementById('entryB').value = '';
}

function equalButPressB(num) {
  decimalClickedB = false;
  prevValB = parseFloat(prevValB);
  newValB = parseFloat(newValB);

  switch (mathOperatorB) {
    case '+':
      resultValB = prevValB + newValB;
      break;
    case '-':
      resultValB = prevValB - newValB;
      break;
    case '*':
      resultValB = prevValB * newValB;
      break;
    case '/':
      resultValB = prevValB / newValB;
      break;
    default:
      resultValB = newValB;
  }

  prevValB = resultValB;
  document.getElementById('entryB').value = resultValB;
}

function clearButPressB() {
  prevValB = '';
  newValB = '';
  resultValB = '';
  mathOperatorB = '';
  decimalClickedB = false;
  document.getElementById('entryB').value = '0';
}

function copyButPressB(num) {
  valMemStoredB = document.getElementById('entryB').value;
}

function pasteButPressB(num) {
  if (valMemStoredB) {
    document.getElementById('entryB').value = valMemStoredB;
    newValB = valMemStoredB;
  }
}

// Dark
let prevValBX = '';
let newValBX = '';
let resultValBX = '';
let mathOperatorBX = '';
let decimalClickedBX = false;
let valMemStoredBX = '';

function numButPressBX(num) {
  if (resultValBX) {
    newValBX = num;
    resultValBX = '';
  } else {
    if (num === '.') {
      if (decimalClickedBX != true) {
        newValBX += num;
        decimalClickedBX = true;
      }
    } else {
      newValBX += num;
    }
  }
  document.getElementById('entryBX').value = newValBX;
}

function mathButPressBX(operator) {
  if (!resultValBX) {
    prevValBX = newValBX;
  } else {
    prevValBX = resultValBX;
  }
  newValBX = '';
  decimalClickedBX = false;
  mathOperatorBX = operator;
  resultValBX = '';
  document.getElementById('entryBX').value = '';
}

function equalButPressBX(num) {
  decimalClickedBX = false;
  prevValBX = parseFloat(prevValBX);
  newValBX = parseFloat(newValBX);

  switch (mathOperatorBX) {
    case '+':
      resultValBX = prevValBX + newValBX;
      break;
    case '-':
      resultValBX = prevValBX - newValBX;
      break;
    case '*':
      resultValBX = prevValBX * newValBX;
      break;
    case '/':
      resultValBX = prevValBX / newValBX;
      break;
    default:
      resultValBX = newValBX;
  }

  prevValBX = resultValBX;
  document.getElementById('entryBX').value = resultValBX;
}

function clearButPressBX() {
  prevValBX = '';
  newValBX = '';
  resultValBX = '';
  mathOperatorBX = '';
  decimalClickedBX = false;
  document.getElementById('entryBX').value = '0';
}

function copyButPressBX(num) {
  valMemStoredBX = document.getElementById('entryBX').value;
}

function pasteButPressBX(num) {
  if (valMemStoredBX) {
    document.getElementById('entryBX').value = valMemStoredBX;
    newValBX = valMemStoredBX;
  }
}
