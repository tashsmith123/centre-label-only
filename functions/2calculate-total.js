function calculateTotal() {
  const totalQuantity = parseInt(document.getElementById("totalQuantity").value);
  const setupFee = parseFloat(document.getElementById("setup").value);
        const qtyInputs = document.querySelectorAll(".variantQty");
  const vinylSelects = document.querySelectorAll(".variantVinyl");
        const innerSelects = document.querySelectorAll(".variantInner");
  const outerSelects = document.querySelectorAll(".variantOuter");
        const labelSelects = document.querySelectorAll(".variantLabel");
console.log("const is working");
  let calculatedQty = 0;
  let priceTotal = 0;
  let summary = "";
  let totalPrintedPartsCost = 0;
  let hasPrintedLabel = false;
  const checkboxStates = getCheckboxValues();
  console.log("Checkbox states:", checkboxStates);

  qtyInputs.forEach((qtyInput, i) => {
    const qty = parseInt(qtyInput.value);
    const vinylType = vinylSelects[i].value;
    const vinylTiers = vinylPrices[vinylType];
    
    // Calculate vinyl price correctly
    const vinylPrice = Object.keys(vinylTiers)
      .map(Number)
      .sort((a, b) => a - b)
      .reduce((acc, tier) => qty >= tier ? vinylTiers[tier] : acc, 0);
  
      const variantId = `variant${i + 1}`;
      const currentLabelType = document.querySelector(`.variantLabel[data-variant="${i + 1}"]`)?.value || "White";
      const isChecked = checkboxStates[variantId];
  
    console.log(`Variant ${i + 1}: checkbox=${isChecked}, label=${currentLabelType}`);
  
    // Continue with your label cost logic here...
//attempting centre labels costing


let labelCost = 0;

// If there is only 1 variant, always calculate labels
if (qtyInputs.length === 1) {
  const currentLabelType = labelSelects[i]?.value;
console.log(`Variant ${i + 1} Label type:`, currentLabelType);
  if (currentLabelType === "White") {
    labelCost = 0.06;
  } else if (currentLabelType === "Supplied") {
    labelCost = 0.10;
  } else if (currentLabelType === "Printed") {
    hasPrintedLabel = true;
    labelCost =
      qty >= 10000 ? 0.06 :
      qty >= 9000  ? 0.06 :
      qty >= 8000  ? 0.06 :
      qty >= 7000  ? 0.07 :
      qty >= 6000  ? 0.06 :
      qty >= 5000  ? 0.06 :
      qty >= 4000  ? 0.06 :
      qty >= 3000  ? 0.06 :
      qty >= 2500  ? 0.05 :
      qty >= 2000  ? 0.05 :
      qty >= 1500  ? 0.05 :
      qty >= 1000  ? 0.04 :
      qty >= 750   ? 0.03 :
      qty >= 500   ? 0.09 :
      qty >= 400   ? 0.07 :
      qty >= 300   ? 0.03 :
      qty >= 250   ? 0.03 :
      qty >= 200   ? 0.04 :
      qty >= 100   ? 0.04 :
      0.000;
  }

} else if (checkboxStates[variantId]) {
  // Multiple variants, checkbox is checked for this one
  const currentLabelType = labelSelects[i]?.value || "White";

  if (currentLabelType === "White") {
    labelCost = 0.06;
  } else if (currentLabelType === "Supplied") {
    labelCost = 0.10;
  } else if (currentLabelType === "Printed") {
    hasPrintedLabel = true;
    labelCost =
      qty >= 10000 ? 0.06 :
      qty >= 9000  ? 0.06 :
      qty >= 8000  ? 0.06 :
      qty >= 7000  ? 0.07 :
      qty >= 6000  ? 0.06 :
      qty >= 5000  ? 0.06 :
      qty >= 4000  ? 0.06 :
      qty >= 3000  ? 0.06 :
      qty >= 2500  ? 0.05 :
      qty >= 2000  ? 0.05 :
      qty >= 1500  ? 0.05 :
      qty >= 1000  ? 0.04 :
      qty >= 750   ? 0.03 :
      qty >= 500   ? 0.09 :
      qty >= 400   ? 0.07 :
      qty >= 300   ? 0.03 :
      qty >= 250   ? 0.03 :
      qty >= 200   ? 0.04 :
      qty >= 100   ? 0.04 :
      0.000;
  }
} else {
  // Multiple variants, checkbox not checked for this one: no label cost
  labelCost = 0;
}



//this is all working
//this only works for variant effect and qty no labels

      calculatedQty += qty;
    const cost = qty * vinylPrice;
    const labelTotal = qty * labelCost;
    priceTotal += cost;
    priceTotal += labelTotal;
    totalPrintedPartsCost += labelTotal;
   

    summary += `<h4>Variant ${i + 1}</h4>`;
summary += `<p>Quantity: ${qty}</p>`;
summary += `<p>Vinyl Type: ${vinylType}</p>`;
summary += `<p>Vinyl Cost: £${cost.toFixed(2)}</p>`;
summary += `<h4>Printed Parts: £${labelTotal.toFixed(2)}</h4>`;
    
    
    
    

          });

  if (calculatedQty !== totalQuantity) {
    summary = `<p style='color:red;'>⚠ Total of variant quantities (${calculatedQty}) does not match overall quantity (${totalQuantity}).</p>` + summary;
  }
  
  if (hasPrintedLabel) {
    totalPrintedPartsCost += 100;
  }

  let effectiveSetupFee = setupFee;
  const grandTotal = priceTotal + effectiveSetupFee;
  summary += `<p>Setup Fee: £${effectiveSetupFee.toFixed(2)}</p>`;
  summary += `<h4>Printed Parts: £${totalPrintedPartsCost.toFixed(2)}</h4>`;
  summary += `<h2>Total: £${grandTotal.toFixed(2)}</h2>`;


  document.getElementById("summaryContent").innerHTML = summary;
}