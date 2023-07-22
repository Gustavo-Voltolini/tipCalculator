function update() {
    let bill = Number(document.getElementById("yourBill").value);
    let percentTip = document.getElementById("tipInput").value;
    let split = Number(document.getElementById("splitInput").value);
  
    let tipValue = bill * (percentTip / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;
    document.getElementById("tipPercent").innerHTML = percentTip + "%"; 
    document.getElementById("tipValue").innerHTML = "R$ "+tipValue.toFixed(2);
    document.getElementById("totalWithTip").innerHTML = "R$"+billTotal.toFixed(2);
    document.getElementById("splitValue").innerHTML = split;
    document.getElementById("billEach").innerHTML = "R$ "+billEach.toFixed(2)
  }
  