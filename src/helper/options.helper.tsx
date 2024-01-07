export const OptionsTextHighlight = ({
  text,
  textMatch,
}: {
  text: string;
  textMatch: string;
}) => {
  const arrAux = text.toLocaleLowerCase().split(" ");
  const element = document.createElement("div");

  arrAux.forEach((item) => {
    if (item === textMatch) {
      const span = document.createElement("span");
      span.innerHTML = item;
      span.classList.add("highlight");
      span.setAttribute("data-testid", "highlight");
      element.appendChild(span);
    } else {
      element.innerHTML += ` ${item} `;
    }
    return element.textContent;
  });
  return <div dangerouslySetInnerHTML={{ __html: element.innerHTML }} />;
};
