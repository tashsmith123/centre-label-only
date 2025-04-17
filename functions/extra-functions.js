function getSharedPrintedLabelCost(totalQty) {
    const setupFee = 100;
    if (totalQty <= 100) {
      return setupFee;
    } else {
      const extraUnits = totalQty - 100;
      const extraCost = extraUnits * 0.06;
      return setupFee + extraCost;
    }
  }