const convertBtn = document.getElementById('convertBtn');
convertBtn.addEventListener('click', convertUnits);

function convertUnits() {
  const unit1 = document.getElementById('unit1').value;
  const unit2 = document.getElementById('unit2').value;
  const value1 = parseFloat(document.getElementById('value1').value);

  let value2;

  if (unit1 === 'bit') {
    if (unit2 === 'bit') {
      value2 = value1;
    } else if (unit2 === 'byte') {
      value2 = value1 / 8;
    } else if (unit2 === 'kilobyte') {
      value2 = value1 / 8000;
    } else if (unit2 === 'megabyte') {
      value2 = value1 / 8e+6;
    } else if (unit2 === 'gigabyte') {
      value2 = value1 / 8e+9;
    }
  } else if (unit1 === 'byte') {
    if (unit2 === 'bit') {
      value2 = value1 * 8;
    } else if (unit2 === 'byte') {
      value2 = value1;
    } else if (unit2 === 'kilobyte') {
      value2 = value1 / 1000;
    } else if (unit2 === 'megabyte') {
      value2 = value1 / 1e+6;
    } else if (unit2 === 'gigabyte') {
      value2 = value1 / 1e+9;
    }
  } else if (unit1 === 'kilobyte') {
    if (unit2 === 'bit') {
      value2 = value1 * 8000;
    } else if (unit2 === 'byte') {
      value2 = value1 * 1000;
    } else if (unit2 === 'kilobyte') {
      value2 = value1;
    } else if (unit2 === 'megabyte') {
      value2 = value1 / 1000;
    } else if (unit2 === 'gigabyte') {
      value2 = value1 / 1e+6;
    }
  } else if (unit1 === 'megabyte') {
    if (unit2 === 'bit') {
      value2 = value1 * 8e+6;
    } else if (unit2 === 'byte') {
      value2 = value1 * 1e+6;
    } else if (unit2 === 'kilobyte') {
      value2 = value1 * 1000;
    } else if (unit2 === 'megabyte') {
      value2 = value1;
    } else if (unit2 === 'gigabyte') {
      value2 = value1 / 1000;
    }
  } else if (unit1 === 'gigabyte') {
    if (unit2 === 'bit') {
      value2 = value1 * 8e+9;
    } else if (unit2 === 'byte') {
      value2 = value1 * 1e+9;
    } else if (unit2 === 'kilobyte') {
      value2 = value1 * 1e+6;
    } else if (unit2 === 'megabyte') {
      value2 = value1 * 1000;
    } else if (unit2 === 'gigabyte') {
      value2 = value1;
    }
  }

  document.getElementById('result').innerHTML = `${value1} ${unit1} = ${value2} ${unit2}`;
}