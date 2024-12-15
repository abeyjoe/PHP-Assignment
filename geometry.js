document.getElementById("object").addEventListener("change", displayInputs);

function displayInputs() {
  const object = document.getElementById("object").value;
  const inputsDiv = document.getElementById("inputs");
  inputsDiv.innerHTML = ""; // Clear previous inputs

  switch (object) {
    case "circle":
      inputsDiv.innerHTML = `
        <div class="input-group">
          <label for="radius">Radius:</label>
          <input type="number" id="radius" name="radius" min="0" required>
        </div>`;
      break;

    case "rectangle":
      inputsDiv.innerHTML = `
        <div class="input-group">
          <label for="length">Length:</label>
          <input type="number" id="length" name="length" min="0" required>
        </div>
        <div class="input-group">
          <label for="width">Width:</label>
          <input type="number" id="width" name="width" min="0" required>
        </div>`;
      break;

    case "square":
      inputsDiv.innerHTML = `
        <div class="input-group">
          <label for="side">Side Length:</label>
          <input type="number" id="side" name="side" min="0" required>
        </div>`;
      break;

    case "triangle":
      inputsDiv.innerHTML = `
        <div class="input-group">
          <label for="base">Base:</label>
          <input type="number" id="base" name="base" min="0" required>
        </div>
        <div class="input-group">
          <label for="height">Height:</label>
          <input type="number" id="height" name="height" min="0" required>
        </div>`;
      break;

    case "trapezium":
      inputsDiv.innerHTML = `
        <div class="input-group">
          <label for="base1">Base 1:</label>
          <input type="number" id="base1" name="base1" min="0" required>
        </div>
        <div class="input-group">
          <label for="base2">Base 2:</label>
          <input type="number" id="base2" name="base2" min="0" required>
        </div>
        <div class="input-group">
          <label for="height">Height:</label>
          <input type="number" id="height" name="height" min="0" required>
        </div>`;
      break;

    default:
      break;
  }
}

function calculate() {
  const object = document.getElementById("object").value;
  const resultDiv = document.getElementById("result");
  let result = "";

  switch (object) {
    case "circle": {
      const radius = parseFloat(document.getElementById("radius").value);
      if (!isNaN(radius)) {
        const area = Math.PI * Math.pow(radius, 2);
        const circumference = 2 * Math.PI * radius;
        result = `Area: ${area.toFixed(
          2
        )}, Circumference: ${circumference.toFixed(2)}`;
      }
      break;
    }

    case "rectangle": {
      const length = parseFloat(document.getElementById("length").value);
      const width = parseFloat(document.getElementById("width").value);
      if (!isNaN(length) && !isNaN(width)) {
        const area = length * width;
        const perimeter = 2 * (length + width);
        result = `Area: ${area}, Perimeter: ${perimeter}`;
      }
      break;
    }

    case "square": {
      const side = parseFloat(document.getElementById("side").value);
      if (!isNaN(side)) {
        const area = side * side;
        const perimeter = 4 * side;
        result = `Area: ${area}, Perimeter: ${perimeter}`;
      }
      break;
    }

    case "triangle": {
      const base = parseFloat(document.getElementById("base").value);
      const height = parseFloat(document.getElementById("height").value);
      if (!isNaN(base) && !isNaN(height)) {
        const area = 0.5 * base * height;
        result = `Area: ${area}`;
      }
      break;
    }

    case "trapezium": {
      const base1 = parseFloat(document.getElementById("base1").value);
      const base2 = parseFloat(document.getElementById("base2").value);
      const height = parseFloat(document.getElementById("height").value);
      if (!isNaN(base1) && !isNaN(base2) && !isNaN(height)) {
        const area = 0.5 * (base1 + base2) * height;
        result = `Area: ${area}`;
      }
      break;
    }

    default:
      result = "Please select a valid object and provide required inputs.";
  }

  resultDiv.textContent = result || "Invalid input! Please check the values.";
}
