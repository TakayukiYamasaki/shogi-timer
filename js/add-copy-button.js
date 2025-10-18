// ページ内すべての <pre><code> に「コピー」ボタンを追加するスクリプト

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre code").forEach((codeBlock) => {
    // ボタン作成
    const button = document.createElement("button");
    button.textContent = "コピー";
    button.style.cssText = `
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 0.8em;
      padding: 4px 8px;
      color: white;
      background-color: #4CAF50;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    `;

    // ラッパーdivで位置調整
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";

    // <pre> を wrapper に置き換え
    const preElement = codeBlock.parentNode;
    preElement.parentNode.replaceChild(wrapper, preElement);
    wrapper.appendChild(preElement);
    wrapper.appendChild(button);

    // クリック時のコピー動作
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        button.textContent = "コピーしました!";
        setTimeout(() => (button.textContent = "コピー"), 1500);
      });
    });
  });
});