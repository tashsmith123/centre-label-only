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


          <label>Inner Sleeve</label>
        <select class="variantInner">
          <option value="None">None</option>
          <option value="Black Gloss Disco 0 Holes">Black Gloss Disco 0 Holes (£0.35)</option>
          <option value="Black Gloss Disco 2 Holes">Black Gloss Disco 2 Holes (£0.35)</option>
          <option value="Black Matt Disco 0 Holes">Black Matt Disco 0 Holes (£0.35)</option>
          <option value="Black Matt Disco 2 Holes">Black Matt Disco 2 Holes (£0.35)</option>
          <option value="White Gloss Disco 0 Holes">White Gloss Disco 0 Holes (£0.35)</option>
          <option value="White Gloss Disco 2 Holes">White Gloss Disco 2 Holes (£0.35)</option>
          <option value="White Matt Disco 0 Holes">White Matt Disco 0 Holes (£0.35)</option>
          <option value="White Matt Disco 2 Holes">White Matt Disco 2 Holes (£0.35)</option>
          <option value="Kraft Disco 0 Holes">Kraft Disco 0 Holes (£0.35)</option>
          <option value="Kraft Disco 2 Holes">Kraft Disco 2 Holes (£0.35)</option>
          <option value="Black Paper">Black Paper (£0.22)</option>
          <option value="White Paper">White Paper (£0.21)</option>
          <option value="Black Poly">Black Poly (£0.25)</option>
          <option value="White Poly">White Poly (£0.23)</option>
          <option value="Rounded Anti-Static">Rounded Anti-Static (£0.20)</option>

          <option value="Printed">Printed (Dynamic)</option>

          <option value="Supplied">Supplied (£0.10)</option>
        </select>


        <label>Outer Sleeve</label>
        <select class="variantOuter" >
          <option value="">None</option>
          <option value="Black Gloss 0">Black Gloss 0 Holes (£0.35)</option>
          <option value="Black Gloss 2">Black Gloss 2 Holes (£0.35)</option>
          <option value="Black Matt 0">Black Matt 0 Holes (£0.35)</option>
          <option value="Black Matt 2">Black Matt 2 Holes (£0.35)</option>
          <option value="White Gloss 0">White Gloss 0 Holes (£0.35)</option>
          <option value="White Gloss 2">White Gloss 2 Holes (£0.35)</option>
          <option value="White Matt 0">White Matt 0 Holes (£0.35)</option>
          <option value="White Matt 2">White Matt 2 Holes (£0.35)</option>
          <option value="Kraft 0">Kraft 0 Holes (£0.35)</option>
          <option value="Kraft 2">Kraft 2 Holes (£0.35)</option>
          <option value="Black Gloss 3mm 0">Black Gloss 3mm 0 Holes (£0.39)</option>
          <option value="Black Gloss 3mm 2">Black Gloss 3mm 2 Holes (£0.39)</option>
          <option value="Black Matt 3mm 0">Black Matt 3mm 0 Holes (£0.39)</option>
          <option value="Black Matt 3mm 2">Black Matt 3mm 2 Holes (£0.39)</option>
          <option value="White Gloss 3mm 0">White Gloss 3mm 0 Holes (£0.39)</option>
          <option value="White Gloss 3mm 2">White Gloss 3mm 2 Holes (£0.39)</option>
          <option value="White Matt 3mm 0">White Matt 3mm 0 Holes (£0.39)</option>
          <option value="White Matt 3mm 2">White Matt 3mm 2 Holes (£0.39)</option>
          <option value="Kraft 3mm 0">Kraft 3mm 0 Holes (£0.39)</option>
          <option value="Kraft 3mm 2">Kraft 3mm 2 Holes (£0.39)</option>

          <option value="Printed 3mm">Printed 3mm Spine (Dynamic)</option>
          <option value="Printed 5mm">Printed 5mm Spine (Dynamic)</option>
          <option value="Gatefold">Printed Gatefold (Dynamic)</option>

          <option value="Picture Disc">Picture Disc Sleeve (£0.70)</option>
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