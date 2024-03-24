const zodiacSigns = {
  aries:
    "Aries is known for being confident, enthusiastic, and assertive. They are natural-born leaders and tend to be adventurous and competitive.",
  taurus:
    "Taurus is characterized by their practicality, reliability, and strong determination. They are often grounded, patient, and enjoy the finer things in life.",
  gemini:
    "Gemini individuals are known for their versatility, curiosity, and excellent communication skills. They are social, adaptable, and often have a youthful and playful nature.",
  cancer:
    "Cancer is associated with emotional sensitivity, intuition, and strong nurturing qualities. They are known to be loyal, caring, and family-oriented.",
  leo: "Leos are confident, charismatic, and natural-born leaders. They have a strong presence, enjoy being in the spotlight, and are often generous and warm-hearted.",
  virgo:
    "Virgos are known for their attention to detail, practicality, and analytical nature. They have a strong sense of responsibility, are often organized, and strive for perfection.",
  libra:
    "Libras are diplomatic, harmonious, and seek balance in their relationships and surroundings. They value fairness, enjoy socializing, and have a strong sense of justice.",
  scorpio:
    "Scorpios are characterized by their intensity, passion, and emotional depth. They are often mysterious, determined, and have a strong intuition.",
  sagittarius:
    "Sagittarius individuals are adventurous, optimistic, and have a love for freedom and exploration. They have a philosophical nature and are known for their honesty.",
  capricorn:
    "Capricorns are ambitious, disciplined, and have a strong work ethic. They are often practical, responsible, and strive for long-term success.",
  aquarius:
    "Aquarius is associated with individuality, intellect, and a humanitarian nature. They are often progressive, open-minded, and value freedom of expression.",
  pisces:
    "Pisces individuals are known for their empathy, sensitivity, and imagination. They often have a creative and dreamy nature, and they are compassionate and intuitive.",
};

const zodiacSignsImgLinks = {
  aries: "./assets/aries.png",
  taurus: "./assets/taurus.png",
  gemini: "./assets/gemini.png",
  cancer: "./assets/cancer.png",
  leo: "./assets/leo.png",
  virgo: "./assets/virgo.png",
  libra: "./assets/libra.png",
  scorpio: "./assets/scorpio.png",
  sagittarius: "./assets/sagittarius.png",
  capricorn: "./assets/capricorn.png",
  aquarius: "./assets/aquarius.png",
  pisces: "./assets/pisces.png",
};



/* 
    Aries: March 21 - April 19
    Taurus: April 20 - May 20
    Gemini: May 21 - June 20
    Cancer: June 21 - July 22
    Leo: July 23 - August 22
    Virgo: August 23 - September 22
    Libra: September 23 - October 22
    Scorpio: October 23 - November 21
    Sagittarius: November 22 - December 21
    Capricorn: December 22 - January 19
    Aquarius: January 20 - February 18
    Pisces: February 19 - March 20
*/
const getZodiacSign = function (month, day) {
  switch (month) {
    case 1:
      if (day < 20) {
        return "Capricorn";
      } else {
        return "Aquarius";
      }
    case 2:
      if (day < 19) {
        return "Aquarius";
      } else {
        return "Pisces";
      }
    case 3:
      if (day < 21) {
        return "Pisces";
      } else {
        return "Aries";
      }
    case 4:
      if (day < 20) {
        return "Aries";
      } else {
        return "Taurus";
      }
    case 5:
      if (day < 21) {
        return "Taurus";
      } else {
        return "Gemini";
      }
    case 6:
      if (day < 21) {
        return "Gemini";
      } else {
        return "Cancer";
      }
    case 7:
      if (day < 23) {
        return "Cancer";
      } else {
        return "Leo";
      }
    case 8:
      if (day < 23) {
        return "Leo";
      } else {
        return "Virgo";
      }
    case 9:
      if (day < 23) {
        return "Virgo";
      } else {
        return "Libra";
      }
    case 10:
      if (day < 23) {
        return "Libra";
      } else {
        return "Scorpio";
      }
    case 11:
      if (day < 22) {
        return "Scorpio";
      } else {
        return "Sagittarius";
      }
    case 12:
      if (day < 22) {
        return "Sagittarius";
      } else {
        return "Capricorn";
      }
  }
}

const usrDate = document.querySelector("#datepicker-input");
const output = document.querySelector(".main-output");

usrDate.addEventListener("change", () => {
  if (usrDate.checkValidity()) {
    const date = new Date(usrDate.value);

    const zodiacSign = getZodiacSign(date.getMonth() + 1, date.getDate());
    const trait = zodiacSigns[zodiacSign.toLowerCase()];
    const imgLink = zodiacSignsImgLinks[zodiacSign.toLowerCase()];
    const info = `You are ${zodiacSign.charAt(0).toLowerCase() === "a" ? "an" : "a"} ${zodiacSign}! ${trait}`;

    output.innerHTML = `<img src="${imgLink}" alt="An image of the ${zodiacSign} zodiac sign"/><p>${info}</p>`
  }
})

