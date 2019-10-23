document.addEventListener("DOMContentLoaded", function () {
  class Count {
    constructor(numberOne, numberTwo, numberThree) {
      this.numberOne = numberOne;
      this.numberTwo = numberTwo;
      this.numberThree = numberThree;
    }
    p() {
      let n1 = this.numberOne;
      let n2 = this.numberTwo;
      let n3 = this.numberThree;
      return ((n1 + n2 + n3) / 3).toFixed(1);
    }
  }
  class PerCent {
    constructor(resultP, resultP30) {
      this.resultP = resultP;
      this.resultP30 = resultP30;
    }
    CountPerCent() {
      return ((this.resultP30 / this.resultP) * 100).toFixed(1);
    }
  }
  class BadResult {
    constructor(result) {
      this.result = result;
    }
    res() {
      if (this.textContent < 50) {
        this.style.setProperty("color", "red");
        this.style.setProperty("font-size", 20 + "px");
      } else if (this.textContent >= 50) {
        this.style.setProperty("color", "black");
      }
    }
  }
  //sample one
  const sampleOneInputOne = document.querySelector("div.one .p0-1");
  const sampleOneInputTwo = document.querySelector("div.one .p0-2");
  const sampleOneInputThree = document.querySelector("div.one .p0-3");
  const sampleTwoInputOne = document.querySelector("div.one .p30-1");
  const sampleTwoInputTwo = document.querySelector("div.one .p30-2");
  const sampleTwoInputThree = document.querySelector("div.one .p30-3");
  const showResultSampleOne = document.querySelector("div.one .perCent");

  const ResultSampleOne = () => {
    let p1 = parseFloat(sampleOneInputOne.value);
    let p2 = parseFloat(sampleOneInputTwo.value);
    let p3 = parseFloat(sampleOneInputThree.value);
    let p30_1 = parseFloat(sampleTwoInputOne.value);
    let p30_2 = parseFloat(sampleTwoInputTwo.value);
    let p30_3 = parseFloat(sampleTwoInputThree.value);
    const resultP0 = document.querySelector("div.one .result-P0");
    const resultP30 = document.querySelector("div.one .result-P30");
    const result_sample_1 = document.querySelector(
      "div.one .perCent .result-sample-1"
    );
    const obliczP = new Count(p1, p2, p3);
    const obliczP30 = new Count(p30_1, p30_2, p30_3);
    resultP0.textContent = obliczP.p();
    resultP30.textContent = obliczP30.p();
    const result = new PerCent(
      parseFloat(resultP0.textContent),
      parseFloat(resultP30.textContent)
    );
    result_sample_1.textContent = result.CountPerCent() + " %";
    if (result.CountPerCent() <= 49) {
      result_sample_1.style.setProperty("color", "red");
    } else {
      result_sample_1.style.setProperty("color", "black");
    }
  };
  showResultSampleOne.addEventListener("click", ResultSampleOne);
  //sample two
  const samTwoP0_1 = document.querySelector("div.two .p0-1");
  const sampleTwoP0_2 = document.querySelector("div.two .p0-2");
  const sampleTwoP0_3 = document.querySelector("div.two .p0-3");
  const sampleTwoP30_1 = document.querySelector("div.two .p30-1");
  const sampleTwoP30_2 = document.querySelector("div.two .p30-2");
  const sampleTwoP30_3 = document.querySelector("div.two .p30-3");
  const showResultSampleTwo = document.querySelector("div.two .perCent");
  const ResultSampleTwo = () => {
    let p0_1 = parseFloat(samTwoP0_1.value);
    let p0_2 = parseFloat(sampleTwoP0_2.value);
    let p0_3 = parseFloat(sampleTwoP0_3.value);
    let p30_1 = parseFloat(sampleTwoP30_1.value);
    let p30_2 = parseFloat(sampleTwoP30_2.value);
    let p30_3 = parseFloat(sampleTwoP30_3.value);
    const resultP0 = document.querySelector("div.two .result-P0");
    const resultP30 = document.querySelector("div.two .result-P30");
    const result_sample_2 = document.querySelector(
      "div.two .perCent .result-sample-2"
    );
    const countSmaple2p0 = new Count(p0_1, p0_2, p0_3);
    const countSmaple2p30 = new Count(p30_1, p30_2, p30_3);
    resultP0.textContent = countSmaple2p0.p();
    resultP30.textContent = countSmaple2p30.p();
    const result = new PerCent(
      parseFloat(resultP0.textContent),
      parseFloat(resultP30.textContent)
    );
    result_sample_2.textContent = result.CountPerCent() + " %";
    if (result.CountPerCent() <= 49) {
      result_sample_2.style.setProperty("color", "red");
    } else {
      result_sample_2.style.setProperty("color", "black");
    }
  };
  showResultSampleTwo.addEventListener("click", ResultSampleTwo);

  //sample three
  const sam3P0_1 = document.querySelector("div.three .p0-1");
  const sample3P0_2 = document.querySelector("div.three .p0-2");
  const sample3P0_3 = document.querySelector("div.three .p0-3");
  const sample3P30_1 = document.querySelector("div.three .p30-1");
  const sample3P30_2 = document.querySelector("div.three .p30-2");
  const sample3P30_3 = document.querySelector("div.three .p30-3");
  const showResultSampleThree = document.querySelector("div.three .perCent");
  const ResultSampleThree = () => {
    let p0_1 = parseFloat(sam3P0_1.value);
    let p0_2 = parseFloat(sample3P0_2.value);
    let p0_3 = parseFloat(sample3P0_3.value);
    let p30_1 = parseFloat(sample3P30_1.value);
    let p30_2 = parseFloat(sample3P30_2.value);
    let p30_3 = parseFloat(sample3P30_3.value);
    const resultP0 = document.querySelector("div.three .result-P0");
    const resultP30 = document.querySelector("div.three .result-P30");
    const result_sample_3 = document.querySelector(
      "div.three .perCent .result-sample-3"
    );
    const countSmaple3p0 = new Count(p0_1, p0_2, p0_3);
    const countSmaple3p30 = new Count(p30_1, p30_2, p30_3);
    resultP0.textContent = countSmaple3p0.p();
    resultP30.textContent = countSmaple3p30.p();
    const result = new PerCent(
      parseFloat(resultP0.textContent),
      parseFloat(resultP30.textContent)
    );
    result_sample_3.textContent = result.CountPerCent() + " %";
    if (result.CountPerCent() <= 49) {
      result_sample_3.style.setProperty("color", "red");
    } else {
      result_sample_3.style.setProperty("color", "black");
    }
  };
  showResultSampleThree.addEventListener("click", ResultSampleThree);

  //sample four
  const sam4P0_1 = document.querySelector("div.four .p0-1");
  const sample4P0_2 = document.querySelector("div.four .p0-2");
  const sample4P0_3 = document.querySelector("div.four .p0-3");
  const sample4P30_1 = document.querySelector("div.four .p30-1");
  const sample4P30_2 = document.querySelector("div.four .p30-2");
  const sample4P30_3 = document.querySelector("div.four .p30-3");
  const showResultSampleFour = document.querySelector("div.four .perCent");
  const ResultSampleFour = () => {
    let p0_1 = parseFloat(sam4P0_1.value);
    let p0_2 = parseFloat(sample4P0_2.value);
    let p0_3 = parseFloat(sample4P0_3.value);
    let p30_1 = parseFloat(sample4P30_1.value);
    let p30_2 = parseFloat(sample4P30_2.value);
    let p30_3 = parseFloat(sample4P30_3.value);
    const resultP0 = document.querySelector("div.four .result-P0");
    const resultP30 = document.querySelector("div.four .result-P30");
    const result_sample_4 = document.querySelector(
      "div.four .perCent .result-sample-4"
    );
    const countSmaple4p0 = new Count(p0_1, p0_2, p0_3);
    const countSmaple4p30 = new Count(p30_1, p30_2, p30_3);
    resultP0.textContent = countSmaple4p0.p();
    resultP30.textContent = countSmaple4p30.p();
    const result = new PerCent(
      parseFloat(resultP0.textContent),
      parseFloat(resultP30.textContent)
    );
    result_sample_4.textContent = result.CountPerCent() + " %";
    if (result.CountPerCent() <= 49) {
      result_sample_4.style.setProperty("color", "red");
    } else {
      result_sample_4.style.setProperty("color", "black");
    }
  };
  showResultSampleFour.addEventListener("click", ResultSampleFour);

  //sample five
  const sam5P0_1 = document.querySelector("div.five .p0-1");
  const sample5P0_2 = document.querySelector("div.five .p0-2");
  const sample5P0_3 = document.querySelector("div.five .p0-3");
  const sample5P30_1 = document.querySelector("div.five .p30-1");
  const sample5P30_2 = document.querySelector("div.five .p30-2");
  const sample5P30_3 = document.querySelector("div.five .p30-3");
  const showResultSampleFive = document.querySelector("div.five .perCent");
  const ResultSampleFive = () => {
    let p0_1 = parseFloat(sam5P0_1.value);
    let p0_2 = parseFloat(sample5P0_2.value);
    let p0_3 = parseFloat(sample5P0_3.value);
    let p30_1 = parseFloat(sample5P30_1.value);
    let p30_2 = parseFloat(sample5P30_2.value);
    let p30_3 = parseFloat(sample5P30_3.value);
    const resultP0 = document.querySelector("div.five .result-P0");
    const resultP30 = document.querySelector("div.five .result-P30");
    const result_sample_5 = document.querySelector(
      "div.five .perCent .result-sample-5"
    );
    const countSmaple5p0 = new Count(p0_1, p0_2, p0_3);
    const countSmaple5p30 = new Count(p30_1, p30_2, p30_3);
    resultP0.textContent = countSmaple5p0.p();
    resultP30.textContent = countSmaple5p30.p();
    const result = new PerCent(
      parseFloat(resultP0.textContent),
      parseFloat(resultP30.textContent)
    );
    result_sample_5.textContent = result.CountPerCent() + " %";
    if (result.CountPerCent() <= 49) {
      result_sample_5.style.setProperty("color", "red");
    } else {
      result_sample_5.style.setProperty("color", "black");
    }
  };
  showResultSampleFive.addEventListener("click", ResultSampleFive);

  //Date after click
  const DateSquare = document.querySelectorAll("td.data");
  // for old browsers like chrome on Windows XP
  for (var i = 0; i < DateSquare.length; i++) {
    DateSquare[i].addEventListener("click", function () {
      for (var j = 0; j < DateSquare.length; j++) {
        DateSquare[j].textContent = new Date().toLocaleDateString();
      }
    });
  }

  // DateSquare.forEach(function (DS) {
  //     DS.addEventListener("click", function () {
  //         DS.textContent = new Date().toLocaleDateString(); // date in square where was clicked
  //         DateSquare.forEach((SDS) => {
  //             SDS.textContent = new Date().toLocaleDateString(); // date in each date-square
  //         })
  //     })
  // });

  class AddDetails {
    constructor(nameDatails, values) {
      this.nameDatails = nameDatails;
      this.values = values;
    }
    addContent() {
      if (event.keyCode == 13) {
        if (this.values.value == "") {
          alert("This field is required");
        }
        for (var i = 0; i < this.nameDatails.length; i++) {
          this.nameDatails[i].textContent = this.values.value;
        }
        // this.nameDatails.forEach(detail => {
        //   detail.textContent = this.values.value;
        // });
      }
    }
  }
  const Supplier = document.querySelector("td.supp input");
  const orderNumber = document.querySelector("td.orderNumber input");
  const gradeName = document.querySelector("td.grade input");

  const supplierNames = document.querySelectorAll("td.supplier");
  const orderNumbers = document.querySelectorAll("td.orderNo");
  const gradeNames = document.querySelectorAll("td.grade-name");

  Supplier.addEventListener("keypress", () => {
    const supplierName = new AddDetails(supplierNames, Supplier);
    supplierName.addContent(event);
  });

  orderNumber.addEventListener("keypress", () => {
    const orderNumberFields = new AddDetails(orderNumbers, orderNumber);
    orderNumberFields.addContent(event);
  });

  gradeName.addEventListener("keypress", () => {
    const gradesNames = new AddDetails(gradeNames, gradeName);
    gradesNames.addContent(event);
  });
});