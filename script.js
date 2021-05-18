const form = document.getElementById("my-form");

const inputs = document.querySelectorAll("input, textarea");

const getCheckboxes = (name) => {
  return Array.from(form.querySelectorAll(`input[name='${name}']`))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const objectForm = Array.from(inputs).reduce((obj, field) => {
    obj[field.name] =
      field.type === "checkbox" ? getCheckboxes(field.name) : field.value;

    return obj;
  }, {});

  console.log(objectForm);
});
