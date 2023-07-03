const input = document.getElementById("text-input");

const showToast = () => {
  toast.style.opacity = 1;

  setTimeout(() => {
    toast.style.opacity = 0;
  }, 1000);
};

const clearInput = () => {
  input.value = "";
  toast.textContent = "cleared";
  showToast();
};

const toast = document.getElementById("toast");
const copyText = async () => {
  try {
    await navigator.clipboard.writeText(input.value);
    toast.textContent = "copied";
    showToast();
  } catch (err) {
    toast.textContent = "failed to copy!";
  }
};

const convertUppercase = () => {
  input.value = input.value.toUpperCase();
};

const convertLowercase = () => {
  input.value = input.value.toLowerCase();
};

const convertSentence = () => {
  input.value = input.value
    .split(/\s/)
    .filter((e) => !!e)
    .join(" ")
    .toLowerCase()
    .replace(/(\. |\! |\? )(\w)/g, (_, p1, p2) => p1 + p2.toUpperCase())
    .replace(/(^.)/g, (_, p) => p.toUpperCase());
};

const alternatingCase = () => {
  let text = input.value.split("");

  for (let i = 1; i < text.length; i++) {
    if (text[i - 1].match(/\W|\s/)) {
      text[i] = i % 2 ? text[i].toUpperCase() : text[i].toLowerCase();
    } else {
      text[i] = i % 2 ? text[i].toLowerCase() : text[i].toUpperCase();
    }
  }

  text = text.join("");
  text = text.charAt(0).toUpperCase() + text.slice(1);

  input.value = text;
};

const convertKebab = () => {
  input.value = input.value.toLowerCase().replace(/\s/g, "-");
};

const convertPascal = () => {
  input.value = input.value
    .toLowerCase()
    .replace(/\b\w/g, (match) => match.toUpperCase())
    .split(" ")
    .join("");
};

const convertCamel = () => {
  convertPascal();
  input.value = input.value.charAt(0).toLowerCase() + input.value.slice(1);
};
