

function generator1(){
    const links = [
        {
          label: "Week1",
          url: "https://github.com/abrasil321/WWD330/tree/main/js/week01"
        },
        {
          label: "Week2",
          url: "https://github.com/abrasil321/WWD330/blob/main/js/week2"
        },
        {
          label: "Week3",
          url: "https://github.com/abrasil321/WWD330/tree/main/js/week3"
        },
        {
          label: "Week4",
          url: "https://github.com/abrasil321/WWD330/tree/main/js/week4"
        },
        {
          label: "Week5",
          url: "https://github.com/abrasil321/WWD330/tree/main/js/week5"
        },
        {
          label: "Week6",
          url: "https://github.com/abrasil321/WWD330/tree/main/js/week6"
        },
        {
          label: "Week7",
          url: "https://github.com/abrasil321/WWD330/tree/master/js/week7"
        },
        {
          label: "Week8",
          url: "https://github.com/abrasil321/WWD330/tree/master/js/week8"
        },
        {
          label: "Week8",
          url: "https://github.com/abrasil321/WWD330/tree/master/js/week9"
        }
      ];
    let display = "";
    for(let i = 0; i < links.length; i++){
      display += "<li><a href='" + links[i].url + "'>" + links[i].label + "</a></li><br>";
    }
    document.getElementById("links").innerHTML = display;
}

generator1();

