// need to add a function to randomize the quotes

// need to create an array maybe an object of quotes and the authors

window.onload = () => {
    document.querySelector("#bttn").addEventListener("click", () => {
      document.querySelector("#quote-box").innerHTML = generateExcuse();
    });
    let generateExcuse = () => {
      let quote = ["The dog", "My grandma", "His turtle", "My bird"];
      let author = ["ate", "peed", "crushed", "broke"];
      
      let quoteIndex = Math.floor(Math.random() * who.length);
      let authorIndex = Math.floor(Math.random() * action.length);
    
      return (
        quote[quoteIndex] +
        " " +
        author[authorIndex] +
        " ");
    };
  };