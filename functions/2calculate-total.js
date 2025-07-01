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
  let printingFee = 0;
  let hasPrintedLabel = false;
  let hasPrintedInner = false;
  let hasPrintedOuter = false;
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

//inners 
let innersCost = 0;

// If there is only 1 variant, always calculate labels
if (qtyInputs.length === 1) {
  const currentInnersType = innerSelects[i]?.value;
console.log(`Variant ${i + 1} Inners type:`, currentInnersType);
  if (currentInnersType === "None") {
    innersCost = 0.00;
  } else if (currentInnersType === "Black Gloss Disco 0 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Black Gloss Disco 2 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Black Matt Disco 0 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Black Matt Disco 2 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Gloss Disco 0 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Gloss Disco 2 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Matt Disco 0 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Matt Disco 2 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Kraft Disco 0 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Kraft Disco 2 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Black Paper") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Paper") {
    innersCost = 0.35;
  } else if (currentInnersType === "Black Poly") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Poly") {
    innersCost = 0.35;
  } else if (currentInnersType === "Rounded Anti-Static") {
    innersCost = 0.35;
  } else if (currentInnersType === "Supplied") {
    innersCost = 0.10;
  } else if (currentInnersType === "Printed") {
    hasPrintedInner = true;
    innersCost =
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
  const currentInnersType = innerSelects[i]?.value;

  if (currentInnersType === "None") {
    innersCost = 0.00;
  } else if (currentInnersType === "Black Gloss Disco 0 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Black Gloss Disco 2 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Black Matt Disco 0 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Black Matt Disco 2 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Gloss Disco 0 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Gloss Disco 2 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Matt Disco 0 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Matt Disco 2 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Kraft Disco 0 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Kraft Disco 2 Holes") {
    innersCost = 0.35;
  } else if (currentInnersType === "Black Paper") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Paper") {
    innersCost = 0.35;
  } else if (currentInnersType === "Black Poly") {
    innersCost = 0.35;
  } else if (currentInnersType === "White Poly") {
    innersCost = 0.35;
  } else if (currentInnersType === "Rounded Anti-Static") {
    innersCost = 0.35;
  } else if (currentInnersType === "Supplied") {
    innersCost = 0.10;
  } else if (currentInnersType === "Printed") {
    hasPrintedInner = true;
    innersCost =
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
  innersCost = 0;
}

let OutersCost = 0;

// If there is only 1 variant, always calculate labels
if (qtyInputs.length === 1) {
  const currentOutersType = outerSelects[i]?.value;
console.log(`Variant ${i + 1} Outers type:`, currentOutersType);
  if (currentOutersType === "None") {
    OutersCost = 0.00;
  } else if (currentOutersType === "Black Gloss 0") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Black Gloss 2") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Black Matt 0") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Black Matt 2") {
    OutersCost = 0.35;
  } else if (currentOutersType === "White Gloss 0") {
    OutersCost = 0.35;
  } else if (currentOutersType === "White Gloss 2") {
    OutersCost = 0.35;
  } else if (currentOutersType === "White Matt 0") {
    OutersCost = 0.35;
  } else if (currentOutersType === "White Matt 2") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Kraft 0") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Kraft 2") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Black Gloss 3mm 0") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Black Gloss 3mm 2") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Black Matt 3mm 0") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Black Matt 3mm 2") {
    OutersCost = 0.39;
  } else if (currentOutersType === "White Gloss 3mm 0") {
    OutersCost = 0.39;
  } else if (currentOutersType === "White Gloss 3mm 2") {
    OutersCost = 0.39;
  } else if (currentOutersType === "White Matt 3mm 0") {
    OutersCost = 0.39;
  } else if (currentOutersType === "White Matt 3mm 2") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Kraft 3mm 0") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Kraft 3mm 2") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Picture Disc") {
    OutersCost = 0.70;
  } else if (currentOutersType === "Supplied") {
    OutersCost = 0.10;
  
  } else if (currentOutersType === "Printed 3mm") {
    hasPrintedOuter = true;
    OutersCost =
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
  } else if (currentOutersType === "Printed 5mm") {
    hasPrintedOuter = true;
    OutersCost =
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
  } else if (currentOutersType === "Gatefold") {
    hasPrintedOuter = true;
    OutersCost =
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
  const currentOutersType = outerSelects[i]?.value;

  if (currentOutersType === "None") {
    OutersCost = 0.00;
  } else if (currentOutersType === "Black Gloss 0") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Black Gloss 2") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Black Matt 0") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Black Matt 2") {
    OutersCost = 0.35;
  } else if (currentOutersType === "White Gloss 0") {
    OutersCost = 0.35;
  } else if (currentOutersType === "White Gloss 2") {
    OutersCost = 0.35;
  } else if (currentOutersType === "White Matt 0") {
    OutersCost = 0.35;
  } else if (currentOutersType === "White Matt 2") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Kraft 0") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Kraft 2") {
    OutersCost = 0.35;
  } else if (currentOutersType === "Black Gloss 3mm 0") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Black Gloss 3mm 2") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Black Matt 3mm 0") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Black Matt 3mm 2") {
    OutersCost = 0.39;
  } else if (currentOutersType === "White Gloss 3mm 0") {
    OutersCost = 0.39;
  } else if (currentOutersType === "White Gloss 3mm 2") {
    OutersCost = 0.39;
  } else if (currentOutersType === "White Matt 3mm 0") {
    OutersCost = 0.39;
  } else if (currentOutersType === "White Matt 3mm 2") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Kraft 3mm 0") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Kraft 3mm 2") {
    OutersCost = 0.39;
  } else if (currentOutersType === "Picture Disc") {
    OutersCost = 0.70;
  } else if (currentOutersType === "Supplied") {
    OutersCost = 0.10;
  
  } else if (currentOutersType === "Printed 3mm") {
    hasPrintedOuter = true;
    OutersCost =
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
  } else if (currentOutersType === "Printed 5mm") {
    hasPrintedOuter = true;
    OutersCost =
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
  } else if (currentOutersType === "Gatefold") {
    hasPrintedOuter = true;
    OutersCost =
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
  OutersCost = 0;
}


//this is all working
//this only works for variant effect and qty no labels

      calculatedQty += qty;
    const cost = qty * vinylPrice;
    const labelTotal = qty * labelCost;
    const innersTotal = qty * innersCost;
    const outersTotal = qty * OutersCost;
    priceTotal += cost;
    priceTotal += labelTotal;
    priceTotal += innersTotal;
    priceTotal += outersTotal;

    totalPrintedPartsCost += labelTotal + innersTotal + outersTotal;
   

    summary += `<h4>Variant ${i + 1}</h4>`;
summary += `<p>Quantity: ${qty}</p>`;
summary += `<p>Vinyl Type: ${vinylType}</p>`;
summary += `<p>Vinyl Cost: £${cost.toFixed(2)}</p>`;
summary += `<p>Label Cost: £${labelTotal.toFixed(2)}</p>`;
summary += `<p>Inners Cost: £${innersTotal.toFixed(2)}</p>`;
summary += `<p>Outers Cost: £${outersTotal.toFixed(2)}</p>`;
    
    
    
    

          });

  if (calculatedQty !== totalQuantity) {
    summary = `<p style='color:red;'>⚠ Total of variant quantities (${calculatedQty}) does not match overall quantity (${totalQuantity}).</p>` + summary;
  }
  
  if (hasPrintedLabel) {
    printingFee += 100;
  }
  if (hasPrintedInner) {
    printingFee += 100;
  }
  if (hasPrintedOuter) {
    printingFee += 100;
  }

  let effectiveSetupFee = setupFee;
  const grandTotal = priceTotal + effectiveSetupFee;
  
  summary += `<p>Setup Fee: £${effectiveSetupFee.toFixed(2)}</p>`;
  summary += `<h4>Printed Parts: £${totalPrintedPartsCost.toFixed(2)}</h4>`;
  summary += `<p>Printing Fee: £${printingFee.toFixed(2)}</p>`;
  summary += `<h2>Total: £${grandTotal.toFixed(2)}</h2>`;


  document.getElementById("summaryContent").innerHTML = summary;
}