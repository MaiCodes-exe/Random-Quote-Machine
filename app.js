// need to add a function to randomize the quotes

// need to create an array maybe an object of quotes and the authors

window.onload = () => {
    document.querySelector("#new-quote").addEventListener("click", () => {
      document.querySelector("#quote").innerHTML = generateExcuse();

    });
    let generateExcuse = () => {
      let quote = ["Believe you can and you’re halfway there. - Theodore Roosevelt", "Success is not final, failure is not fatal: it is the courage to continue that counts.” - Winston Churchill", "We cannot help everyone, but everyone can help someone. - Ronald Reagan",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    
    ];
      
      let quoteIndex = Math.floor(Math.random() * quote.length);
    
      return (
        quote[quoteIndex]);
    };
  };