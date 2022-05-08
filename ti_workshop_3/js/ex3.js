function calcul_prix (produit) {
    let prix = 0;
    switch (produit) {
        case "pull"     : prix = 10; break;
        case "pantalon" : prix = 20; break;
        case "chemise"  : prix = 30; break; 
    }

    return prix;
}

function calcul_remise (rem) {
    let remise = 0;
    switch (rem) {
        case "cinq" : remise =  5; break;
        case "deux" : remise =  2; break;
        case "dix"  : remise = 10; break; 
    }

    return remise;
}

function calculer() {
    // Choix du produit (radio)
    // const produits = document.getElementsByName('produit');
    const products = document.querySelectorAll('[name="produit"]')

    let selectedProduct = "";
    for (var i=0; i<products.length; i++) {
        if (products[i].checked)
            selectedProduct = products[i].value; 
    }

    // Nombre des pièces achetées
    const quantity = document.getElementById("nbp").value;

    // Calcul de la Remise
    let discounts = document.querySelectorAll('[name="remise"]');
    let selectedDiscount = "";
    for (var i=0; i<discounts.length; i++) {
        if (discounts[i].checked)
            selectedDiscount = discounts[i].value; 
    }

    //Calcul prix du produit
    let productPrice = calcul_prix(selectedProduct) * quantity;
    let amountDiscount = productPrice * (calcul_remise(selectedDiscount) / 100);
    let totalPrice = productPrice - amountDiscount;

    document.getElementById('total').value = totalPrice;
}