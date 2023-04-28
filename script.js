const evaluatedText = document.getElementById("evaluatedText");
      const letterCount = document.getElementById("letterCount");
      
      evaluatedText.addEventListener("input", function() {
        letterCount.innerHTML = evaluatedText.value.length;
      });