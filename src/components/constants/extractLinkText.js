function extractLinkText(str) {
  let link = "";
  let text = "";
  let checkLink;
  str &&
    str.split(" ").forEach((item) => {
      if (item.includes("https://")) {
        link += item;
        text += `${item} `;
        checkLink = true;
      } else {
        text += `${item} `;
      }
    });

  let idx = text.split(" ").indexOf(link);
  let filteredText = text.split(" ");
  filteredText.splice(idx, 1);
  filteredText.splice(idx - 1, 0, link);

  // let res = filteredText.join(" ");

  return link ;
}

export { extractLinkText };
