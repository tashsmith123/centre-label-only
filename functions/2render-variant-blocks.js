function renderVariantBlocks() { 
    const count = parseInt(variantCountSelector.value);
    variantContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const block = document.createElement("div");
      block.className = "variant-block";
      block.innerHTML = `
        <h3>Variant ${i + 1}</h3>
        <label>Quantity</label>
        <input type="number" class="variantQty" data-vid="${i}" value="100" min="0" />
        <label>Vinyl Type</label>
        <select class="variantVinyl" data-vid="${i}">
          ${Object.entries(vinylPrices).map(([type, tiers]) => {
            const tierKeys = Object.keys(tiers).map(Number).sort((a, b) => a - b);
            const defaultPrice = tiers[tierKeys[0]];
            return `<option value="${type}">${type} (£${defaultPrice.toFixed(2)})</option>`;
          }).join('')}
        </select>
      `;
      variantContainer.appendChild(block);
    }
    attachQtyChangeHandlers();
  }