function printedParts() {
    console.log("printedParts function is running");
  
    const printedPartsContainer = document.getElementById("printedPartsContainer");
  
    // no duplicates
    if (printedPartsContainer.childElementCount > 0) return;
  
    // only 1 element
    printedPartsContainer.innerHTML = `
      <h2>Printed Parts</h2>

         <label>Center Label</label>
        <select class="variantLabel">
          <option value=\"White\">White (£0.06)</option>
          <option value="Printed">Printed (Dynamic)</option>
          <option value="Supplied">Supplied (£0.10)</option>
        </select>
<div class="ticks-container">
    <div class="ticks variantCheckboxes" data-variant="1">
  <input type="checkbox" id="variant1" name="variant1" value="variant1">
  <span class="checkmark"></span>
  <label for="variant1">Variant 1</label><br>
</div>

<div class="ticks variantCheckboxes" data-variant="2">
  <input type="checkbox" id="variant2" name="variant2" value="variant2">
  <span class="checkmark"></span>
  <label for="variant2">Variant 2</label><br>
</div>

<div class="ticks variantCheckboxes" data-variant="3">
  <input type="checkbox" id="variant3" name="variant3" value="variant3">
  <span class="checkmark"></span>
  <label for="variant3">Variant 3</label><br>
</div>

<div class="ticks variantCheckboxes" data-variant="4">
  <input type="checkbox" id="variant4" name="variant4" value="variant4">
  <span class="checkmark"></span>
  <label for="variant4">Variant 4</label><br>
</div>

<div class="ticks variantCheckboxes" data-variant="5">
  <input type="checkbox" id="variant5" name="variant5" value="variant5">
  <span class="checkmark"></span>
  <label for="variant5">Variant 5</label><br>
</div>
</div>

`;
function getCheckboxValues() {
  const checkboxes = document.querySelectorAll('.variantCheckboxes input[type="checkbox"]');
  const checkboxStates = {};

  checkboxes.forEach((checkbox) => {
    checkboxStates[checkbox.id] = checkbox.checked;
  });

  console.log(checkboxStates);
  return checkboxStates;
}
document.addEventListener('change', (e) => {
  if (e.target.matches('.variantCheckboxes input[type="checkbox"]')) {
    getCheckboxValues(); // or handle this data however you like
  }
});
}


