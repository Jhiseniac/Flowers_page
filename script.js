document.getElementById("calculate-btn").addEventListener("click", function() {
    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);
    const age = Number(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
  
    let bmr = 0;
    if (gender === "male") {
      bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    } else if (gender === "female") {
      bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }
  
    document.getElementById("result").innerHTML = `Tu gasto calórico diario es de aproximadamente ${bmr.toFixed(
      2
    )} calorías.`;
    document.getElementById("result").style.display = "block";
  
    event.preventDefault();
  });
  
  document.getElementById("weight").addEventListener("input", function() {
    document.getElementById("result").style.display = "none";
  });
  
  document.getElementById("height").addEventListener("input", function() {
    document.getElementById("result").style.display = "none";
  });
  
  document.getElementById("age").addEventListener("input", function() {
    document.getElementById("result").style.display = "none";
  });
  
  document.getElementById("gender").addEventListener("change", function() {
    document.getElementById("result").style.display = "none";
  });
  