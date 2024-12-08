const triangleAreaCalculate = (input1, input2, result) => {
  const finalResult = calculateResult(input1, input2, result);
  console.log(finalResult);
  const triangleArea =
    0.5 * parseFloat(finalResult[0]) * parseFloat(finalResult[1]);
  finalResult[2].innerHTML = `<p> Result: Triange Area = ${triangleArea} cm<sup>2</sup>`;
  const boardHtml = showNotice(triangleArea, "Traingle");
  finalResult[3].innerHTML = boardHtml;
  // Clear input fields after calculation
  clearInputValue(input1, input2);
};

const rectangleAreaCalculate = (input1, input2, result) => {
  const finalResult = calculateResult(input1, input2, result);
  const rectanglArea = parseFloat(finalResult[0]) * parseFloat(finalResult[1]);
  finalResult[2].innerHTML = `<p> Result: Rectangle Area = ${rectanglArea} cm<sup>2</sup>`;
  const boardHtml = showNotice(rectanglArea, "Rectangle");
  finalResult[3].innerHTML = boardHtml;

  // Clear input fields after calculation
  clearInputValue(input1, input2);
};

// primary data
const calculateResult = (input1, input2, result) => {
  const input1Value = document.getElementById(input1).value;
  const input2Value = document.getElementById(input2).value;
  const setResultText = document.getElementById(result);
  const noticeBoard = document.getElementById("area-calculation");
  return [input1Value, input2Value, setResultText, noticeBoard];
};

const showNotice = (calValue, calValueName) => {
  const noticeBoard = `
  <div
    style="
        background-color: white;
        width: 300px;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
    "
  >
    <h2 style="margin: 0; font-size: 24px; color: #6a11cb;">
      Calculation Result </hr>
    </h2>
    <p style="margin-top: 10px; font-size: 18px; color: #333;">
      The area of the ${calValueName} is:
    </p>
    <p
      style="
            font-size: 24px;
            font-weight: bold;
            color: #2575fc;
            margin: 15px 0;
        "
    >
      ${calValue} cm<sup>2</sup>
    </p>
  </div>`;

  return noticeBoard;
};

// Clear input fields after calculation
const clearInputValue = (input1, input2) => {
  document.getElementById(input1).value = "";
  document.getElementById(input2).value = "";
};
