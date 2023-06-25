// const chengeCount = (action,element) =>{
//     let busket_item = element.parentNode.parentNode.parentNode
//     let count_html = busket_item.querySelector('.lis','.trac','count')
//     let count = parseInt(count_html.innerHTML)

//     if(lis <= 3){
//         count = lis * trac * 2000
//     }
//     else{
//         count +=1
//     }

//     count_html.innerHTML = count
// }

document.addEventListener("DOMContentLoaded", function() {
    var lisInput = document.querySelector(".lis");
    var tracInput = document.querySelector(".trac");
    var countParagraph = document.querySelector(".count");

    lisInput.addEventListener("input", updateCount);
    tracInput.addEventListener("input", updateCount);

    function updateCount() {
      var lisValue = parseFloat(lisInput.value) || 0;
      var tracValue = parseFloat(tracInput.value) || 0;
      
      if(lisValue <= 3){
        sum = lisValue * tracValue * 2000
      }
      else{
        if(lisValue <= 5){
            sum = lisValue * tracValue * 1800
          }
          else{
            sum = lisValue * tracValue * 1680
          }
      }
      

      countParagraph.textContent = sum;
    }
  });