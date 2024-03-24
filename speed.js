//This code defines speedcheck(function) which takes one argument speed which checks if it's <=70.
    //if speed is <=70 it should print OK.
    function speedCheck(speed) {
        if (speed <= 70) {
          console.log("OK");
          return;
        }
        let demeritPoints = 0;
        while (speed > 70) {
          demeritPoints += Math.floor((speed - 70) / 5);
          if (demeritPoints > 12) {
            console.log("License Suspended");
            return;
          } else {
            console.log(`Points: ${demeritPoints}`);
            return;
          }
        }
        return demeritPoints;
      }
      let Points = speedCheck(140);