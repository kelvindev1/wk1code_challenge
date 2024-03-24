    // prompt the user for input (outside the code block)
    const basicSalary = prompt("Enter monthly basic Salary:");
    const benefits = prompt("Enter monthly benefits:");

    //declare constants with the rates for TAX, NSSF and NHIF.

    //KRA tax rates based on mothly basic salary.
    const KraTaxRates = [
      [(0, 0.1)],
      [(24001, 0.25)],
      [(32334, 0.3)],
      [(500001, 0.325)],
      [(800000, 0.35)],
    ];

    //NSSF Rates based on monthly basic salary.
    const NssfRate = basicSalary * 0.06;

    //NHIF rates based on monthly basic salary.
    const NhifMonthlyRates = [
      [(0, 150)],
      [(6000, 300)],
      [(8000, 400)],
      [(12000, 500)],
      [(15000, 600)],
      [(20000, 750)],
      [(25000, 850)],
      [(30000, 900)],
      [(35000, 950)],
      [(40000, 1000)],
      [(45000, 1100)],
      [(50000, 1200)],
      [(60000, 1300)],
      [(70000, 1400)],
      [(80000, 1500)],
      [(90000, 1600)],
      [(100000, 1700)],
    ];

    //parseFloat to check if basicSalary or benefits isNaN and incase it isn't should print Invalid inputs.
    //There should be a process exit to prevent further execution of the program with Invalid inputs.
    if (isNaN(parseFloat(basicSalary)) || isNaN(parseFloat(benefits))) {
      console.log("Invalid inputs");
      alert("invalid input.Enter a number");
      exit();
    } else {
      //let calculate tax based on basicSalary that will be entered.
      //   let tax = ;
      let taxableIncome = parseFloat(basicSalary) + parseFloat(benefits) - 0;
      for (let i = 0; i < KraTaxRates.length; i++) {
        if (
          taxableIncome >= KraTaxRates[i][0] &&
          taxableIncome <= KraTaxRates[i][1]
        ) {
          tax = taxableIncome * KraTaxRates[i][2];
          break;
        }
      }

      // let calculate the NSSF deducts based on basicSalary that will be entered.
      const NssfDeducts = parseFloat(basicSalary) * NssfRate;

      //let calculate NHIF deducts based on basicSalary that's entered.
      let NhifDeducts = 0;
      for (let i = 0; i < NhifMonthlyRates.length; i++) {
        if (
          taxableIncome >= NhifMonthlyRates[i][0] &&
          taxableIncome <= NhifMonthlyRates[i][1]
        ) {
          NhifDeducts = NhifMonthlyRates[i][2];
          break;
        }
      }

      //results printing
      console.log("Taxableincome:", taxableIncome);
      console.log("NSSF Deducts:", NssfRate);
      console.log("NHIF Deducts:", NhifMonthlyRates);
    }