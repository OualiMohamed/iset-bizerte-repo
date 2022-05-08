let res = document.getElementById('eq');

function add(val) {
    if (res.innerText == "Error")
        res.innerHTML = "";
        
    res.innerHTML += val;
}

function clearResult() {
    console.log(res.innerHTML);
    res.innerHTML = "";
}

function verif_input(input) {
    let verif = true;
    if (res.innerText.length == 0) {
        return true;
    }
    let rule = /^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$/;
    if (!rule.test(input)) {
      verif = false;
    }
  
    return verif;
}

function verifExpression(entree) {
    let car ="1234567890[]()+-.*,/%";
    for (let i = 0; i < entree.length; i++)
        if (car.indexOf(entree.charAt(i))<0 ) return false;
    return true;
}

function evaluer() {
    console.log(verif_input(res.innerText));
    
    if (verif_input(res.innerText)) {
        res.innerHTML = eval(res.innerText);
    } else {
        res.innerHTML = "Error";
    }

    // if (verifExpression(res.innerText)) {
    //     res.innerHTML = eval(res.innerText);
    // }
}