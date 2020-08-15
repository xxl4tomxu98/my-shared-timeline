class DirectoryTreeNode {
  constructor(name, type, lastModifiedTime) {
    this.name = name;
    this.type = type;
    this.lastModifiedTime = lastModifiedTime;
    this.children = [];
  }

  addChild(child) {
    child.parent = this;
    this.children.push(child);
  }

  clearChildren() {
    this.children = [];
  }

  find(path) {
    if (path === "") return this;

    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    let slashIndex = path.indexOf('/');
    if (slashIndex === -1) {
      slashIndex = path.length;
    }
    const targetName = path.substring(0, slashIndex);
    const remainingPath = path.substring(slashIndex);

    for (let child of this.children) {
      if (child.name === targetName) {
        return child.find(remainingPath);
      }
    }
  }

  getFullPath() {
    if (this.name === undefined) {
      return '';
    }
    let parentPath = '';
    if (this.parent !== undefined) {
      parentPath = this.parent.getFullPath();
    }
    return `${parentPath}/${this.name}`;
  }

  getIconTypeName() {
    if (this.type === 'directory') {
      return this.name;
    }

    if (this.type === 'file') {
      const dotIndex = this.name.lastIndexOf('.');
      if (dotIndex >= 0) {
        return this.name.substring(dotIndex + 1).toLowerCase();
      }
      return this.name;
    }

    return '';
  }
}

function updateVisualTree(element, directoryTreeNode) {
  const ul = document.createElement('ul');
  ul.classList.add('tree');
  if (directoryTreeNode !== dataTreeRoot) {
    ul.classList.add('tree--nested');
  }
  for (let child of directoryTreeNode.children) {
    const li = document.createElement('li');
    li.classList.add('tree__entry');
    if (child.type === 'file') {
      li.innerHTML = `
        <div></div>
        <img class="tree__entry-icon" src="/icons/file_type_${child.getIconTypeName()}.svg">
        <div data-path-name="${child.getFullPath()}" class="tree__entry-file-name">${child.name}</div>
        <div>${child.lastModifiedTime}</div>
      `;
    } else if (child.type === 'directory') {
      li.innerHTML = `
        <div data-path-name="${child.getFullPath()}" class="tree__entry--closed"></div>
        <img class="tree__entry-icon" src="/icons/folder_type_${child.getIconTypeName()}.svg">
        <div data-path-name="${child.getFullPath()}" class="tree__entry-directory-name">${child.name}</div>
        <div>${child.lastModifiedTime}</div>
      `;
    }
    ul.appendChild(li);
  }
  element.appendChild(ul);
}

// Root of the data tree in memory
const dataTreeRoot = new DirectoryTreeNode();

window.addEventListener('DOMContentLoaded', async () => {
  const fileSection = document.querySelector('#file-section');
  const moveFile = document.querySelector('#move-a-file');
  let fileMoving = [];
  let isMovingFile = false;

  document.querySelector('#tree-section').addEventListener('click', async (event) => {
    const { target } = event;
    if (isMovingFile) {
      if (target.classList.contains('tree__entry-file-name') || target.classList.contains('tree__entry-directory-name')) {
        if (fileMoving.length === 0) {
          return fileMoving.push(target.dataset.pathName);
        }
        if (!target.classList.contains('tree__entry-file-name')) {
          const body = JSON.stringify({ destination: target.dataset.pathName });
          const url = `http://localhost:3001/api/entry${fileMoving[0]}`;
          const response = await fetch(url, {
            body,
            headers: new Headers({'Content-Type': 'application/json'}),
            method: 'PATCH',
          });
          if (response.ok) {
            window.location.reload();
          }
        }
        fileMoving = [];
        isMovingFile = false;
        moveFile.disabled = false;
      }
    } else if (target.classList.contains('tree__entry--closed')) {
      target.classList.remove('tree__entry--closed');
      target.classList.add('tree__entry--opened');
      const directoryName = event.target.dataset.pathName;
      const response = await fetch(`/api/path${directoryName}`);
      if (response.ok) {
        const entries = await response.json();
        const parent = dataTreeRoot.find(directoryName);
        target.nextElementSibling.src = `/icons/folder_type_${parent.getIconTypeName()}_opened.svg`;
        for (let entry of entries) {
          const { name, type, lastModifiedTime } = entry;
          const node = new DirectoryTreeNode(name, type, lastModifiedTime);
          parent.addChild(node);
        }
        updateVisualTree(target.parentElement, parent);
      }
    } else if (target.classList.contains('tree__entry--opened')) {
      target.classList.add('tree__entry--closed');
      target.classList.remove('tree__entry--opened');
      const directoryName = event.target.dataset.pathName;
      const parent = dataTreeRoot.find(directoryName);
      target.nextElementSibling.src = `/icons/folder_type_${parent.getIconTypeName()}.svg`;
      parent.clearChildren();
      target.parentElement.querySelector('.tree').remove();
    } else if (target.classList.contains('tree__entry-file-name')) {
      const fileName = event.target.dataset.pathName;
      const node = dataTreeRoot.find(fileName);
      const fileType = node.getIconTypeName().toLowerCase();
      if (['gif', 'jpg', 'png', 'svg'].includes(fileType)) {
        fileSection.innerHTML = `
          <img src="http://localhost:3001/api/file${fileName}">
        `;
        fileSection.classList.add('file-section--show');
      } else if (['css', 'html', 'js', 'md', 'rb', 'text', 'txt'].includes(fileType)) {
        const response = await fetch(`http://localhost:3001/api/file${fileName}`);
        if (response.ok) {
          const text = await response.text();
          fileSection.innerHTML = `
            <pre class="file-section__text">${text}</pre>
          `;
        }
        fileSection.classList.add('file-section--show');
      }
    }
  });

  moveFile.addEventListener('click', () => {
    isMovingFile = true;
    moveFile.disabled = true;
  });

  fileSection.addEventListener('click', () => {
    fileSection.classList.remove('file-section--show');
  });

  const overlay = document.getElementById('loading-overlay');
  try {
    const response = await fetch('/api/path');
    if (response.ok) {
      const entries = await response.json();
      for (let entry of entries) {
        const { name, type, lastModifiedTime } = entry;
        const node = new DirectoryTreeNode(name, type, lastModifiedTime);
        dataTreeRoot.addChild(node);
      }
      overlay.classList.add('overlay--hidden');
    }

    const uiTreeRoot = document.querySelector('#tree-section');
    updateVisualTree(uiTreeRoot, dataTreeRoot);
  } catch (e) {
    console.error(e);
    overlay.classList.add('overlay--error');
  }

});
