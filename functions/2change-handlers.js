function attachQtyChangeHandlers() {
    const qtyInputs = document.querySelectorAll(".variantQty");
    const vinylSelects = document.querySelectorAll(".variantVinyl");
    const labelSelects = document.querySelectorAll(".variantLabel");

  
    qtyInputs.forEach((input, i) => {
      input.addEventListener("input", () => {
        const qty = parseInt(input.value);
  
        // Vinyl
        const vinylSelect = vinylSelects[i];
        Array.from(vinylSelect.options).forEach(option => {
          const vinylType = option.value;
          const tiers = vinylPrices[vinylType];
          const price = Object.keys(tiers).map(Number).sort((a, b) => a - b).reduce((acc, tier) => qty >= tier ? tiers[tier] : acc, 0);
          option.textContent = `${vinylType} (£${price.toFixed(2)})`;
        });
  
        // Label
        const labelSelect = labelSelects[i];
        Array.from(labelSelect.options).forEach(option => {
          let price = 0.10;
          if (option.value === "Printed") {
            price = (qty >= 10000) ? 0.070 : (qty >= 9000) ? 0.070 : (qty >= 8000) ? 0.070 : (qty >= 7000) ? 0.080 : (qty >= 6000) ? 0.080 : (qty >= 5000) ? 0.080 : (qty >= 4000) ? 0.090 : (qty >= 3000) ? 0.090 : (qty >= 2500) ? 0.090 : (qty >= 2000) ? 0.100 : (qty >= 1500) ? 0.120 : (qty >= 1000) ? 0.140 : (qty >= 750) ? 0.160 : (qty >= 500) ? 0.290 : (qty >= 400) ? 0.320 : (qty >= 300) ? 0.360 : (qty >= 250) ? 0.430 : (qty >= 200) ? 0.540 : (qty >= 150) ? 0.660 : 1.000;
          } else if (option.value === "White") {
            price = (qty >= 10000) ? 0.070 : (qty >= 9000) ? 0.070 : (qty >= 8000) ? 0.070 : (qty >= 7000) ? 0.080 : (qty >= 6000) ? 0.080 : (qty >= 5000) ? 0.080 : (qty >= 4000) ? 0.090 : (qty >= 3000) ? 0.090 : (qty >= 2500) ? 0.090 : (qty >= 2000) ? 0.100 : (qty >= 1500) ? 0.120 : (qty >= 1000) ? 0.140 : (qty >= 750) ? 0.160 : (qty >= 500) ? 0.290 : (qty >= 400) ? 0.320 : (qty >= 300) ? 0.360 : (qty >= 250) ? 0.430 : (qty >= 200) ? 0.540 : (qty >= 150) ? 0.660 : 0.060;
          }
          option.textContent = `${option.value} (£${price.toFixed(2)})`;
        });
    });
});
}
