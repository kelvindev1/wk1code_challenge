//declared array of objects with (thresshold) and (rate) as property for each object.
//threshold reps the limit for a certain rate.
const NhifMonthlyRates = [{
    threshold: 0,
    rate: 0
  },
  {
    threshold: 5999,
    rate: 150
  },
  {
    threshold: 7999,
    rate: 300
  },
];

//tax rates based on income thresholds.
const KraTaxRates = [{
    threshold: 0,
    rate: 0
  },
  {
    threshold: 24000,
    rate: 0.1
  },
  {
    threshold: 32333,
    rate: 0.25
  },
  {
    threshold: 500000,
    rate: 0.3
  },
  {
    threshold: 800000,
    rate: 0.325
  },
  {
    threshold: Infinity,
    rate: 0.35
  }
];


//NSSF Rates based on monthly income.
const NssfRate = 0.06;

//calculate the monthly deduction-NHIF for a certain month.
function calculateNHIFDeductions(income) {

  let deduction = 0;

  for (let i = 0; i < NhifMonthlyRates.length; i++) {
    const nhifRate = NhifMonthlyRates[i];

    if (income <= nhifRate.threshold) {
      deduction = nhifRate.rate;
      break;
    }
  }

  return deduction;
}


//calculate the monthly tax of you income.
function calculateTax(income, TaxRates) {
  let tax = 0;

  for (let i = 0; i < TaxRates.length; i++) {
    const rate = TaxRates[i];

    if (income <= rate.threshold) {
      break;
    }

    tax += (rate.threshold - (i > 0 ? TaxRates[i - 1].threshold : 0)) * rate.rate;
  }

  tax += (income - tax) * TaxRates[TaxRates.length - 1].rate;
  return tax;
}


// calculate NSSF-Deductions from your monthly income.
function calculateNSSFDeductions(income) {
  return income * NssfRate;
}


//Gross salary totals should be inclusive of the benefits and salary.
function calculateGrossIncome(salary, benefits) {
  return salary + benefits;
}

// Net salary should be the Gross salary lessing ALL the Deductions
function calculateNetSalary() {
  const salaryInput = prompt("Enter your Monthly basic salary:"); //prompt to enter monthly salary
  const salary = parseFloat(salaryInput);

  const benefitsInput = prompt("Enter your Monthly total benefits:"); //prompt to enter monthly benefits
  const benefits = parseFloat(benefitsInput);
  if (isNaN(salary) || isNaN(benefits)) {
    console.log("Invalid inputs");
    alert("invalid input.Please Enter a number"); // alert incase you Entered NaN.
    return;
  }
  const grossIncome = calculateGrossIncome(salary, benefits);
  const nhifDeductions = calculateNHIFDeductions(salary);
  const tax = calculateTax(grossIncome, KraTaxRates);
  const nssfDeductions = calculateNSSFDeductions(salary);
  const netSalary = grossIncome - tax - nhifDeductions - nssfDeductions;

  alert(`Your net salary is: ${netSalary}`);
}

calculateNetSalary();