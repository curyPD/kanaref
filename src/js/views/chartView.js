const chart = document.getElementById('chart');
const characters = chart.querySelectorAll('[data-char]');
const heading = document.getElementById('heading-primary');

export const displayScript = function (data) {
  characters.forEach(character => {
    const { char } = character.dataset;
    character.textContent = data.characters[char][data.script];
  });
  heading.textContent = `${data.script.replace(
    data.script[0],
    data.script[0].toUpperCase()
  )} Chart`;
};
