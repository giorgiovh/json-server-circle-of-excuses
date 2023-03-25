// function that formats the excuse name with a hashtag, hyphens, and 'tho' so that it can be used as the card title in ImgMediaCard.js
export const addHashtagAndTho = (str) => {
  let arr = str.split(' ');
  let newStr = arr.map((word, idx) => {
    if (idx === 0) {
      return `#${word}`;
    } else {
      return `-${word}`;
    }
  }).join('');
  return newStr + '-tho';
}

// function that formats the excuse name so that it can be used as the image name in the image reference in ImgMediaCard.js
export const addUnderscores = (str) => {
  return str.split(' ').join('_');
}

// function that checks if the excuse is a user created excuse or a preset excuse. Returns true if it's a user created excuse and false if it's a preset excuse
export const checkIfUserExcuse = (excuse) => {
  return excuse.hasOwnProperty("uid")
}

