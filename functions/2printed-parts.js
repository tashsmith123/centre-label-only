function printedParts() {
  console.log("printedParts function is running");

  const printedPartsContainer = document.getElementById("printedPartsContainer");

  // no duplicates
  if (printedPartsContainer.childElementCount > 0) return;

  printedPartsContainer.innerHTML = `
    <h2>Printed Parts</h2>
    <div class="ticks-container">
      ${[1,2,3,4,5].map(i => `
        <div class="ticks variantCheckboxes" data-variant="${i}">
          <input type="checkbox" id="variant${i}" name="variant${i}" value="variant${i}">
          <span class="checkmark"></span>
          <label for="variant${i}">Variant ${i}</label><br>
          <select class="variantLabel" data-variant="${i}">
            <option value="White">White (£0.06)</option>
            <option value="Printed">Printed (Dynamic)</option>
            <option value="Supplied">Supplied (£0.10)</option>
          </select>
        </div>
      `).join("")}
    </div>
  `;
}
function getCheckboxValues() {
  const checkboxes = document.querySelectorAll('.variantCheckboxes input[type="checkbox"]');
  const checkboxStates = {};

  checkboxes.forEach((checkbox) => {
    checkboxStates[checkbox.id] = checkbox.checked;
  });

  return checkboxStates;
}