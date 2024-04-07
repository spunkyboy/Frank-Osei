
    const timeContainer = document.getElementById("time-container");
    const BIRTH_DAY = "2023-12-06";
    const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
      let now = new Date();
      const difference = Number(Math.floor(
        (now.getTime() -  BIRTH_DAY_DATE.getTime()) / 1000
       
      ));
      
      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);


   