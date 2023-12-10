import OpenAI from "openai";
const openai = new OpenAI();

  //API

  document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("myForm").addEventListener("submit", submitForm);
    });

    async function submitForm() {

      try {
        const firstName = document.getElementById('firstName').value;
        const dob = document.getElementById('dob').value;
        const url = 'https://guess-personality.onrender.com/submit'

        const response = await fetch(url, {
          method: "POST",
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify({ firstName, dob }),
        });

        const resultContainer = document.getElementById('result');
        resultContainer.textContent = '';

        if (response.ok) {
          console.log('response ok');
          const jsonData = await response.json();
          const message = jsonData.horoscope;
          document.getElementById("result").innerHTML = message;
          main(message);
        } else {resultContainer.textContent = "Error in submitting data.";}
      } catch (error) {
        console.log(error.message);
        return '';
      }
    }

    //GPT

    // const openai = new OpenAI();

    // async function main(zodiac) {
    //   const completion = await openai.chat.completions.create({
    //     messages: [{ role: "system", content: "Hello" }],
    //     model: "gpt-3.5-turbo",
    //   });

    //   console.log(completion.choices[0]);
    // }