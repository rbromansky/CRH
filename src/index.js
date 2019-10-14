function createElement(teg, styles, data) {
  let element = document.createElement(teg);

  if (styles !== undefined) {
    element = React.addStyle(element, styles);
  }

  if (Array.isArray(data)) {
    data.map((el) => element.append(el));
  } else if (data !== undefined) {
    element.textContent = data;
  }

  return element;
}

function addStyle(element, styles) {
  for (const [name, style] of Object.entries(styles)) {
    if (typeof style === 'object' && style !== null) {
      for (const [key, prop] of Object.entries(style)) {
        element[name][key] = prop;
      }
    } else {
      element[name] = style;
    }
  }

  return element;
}

function render(value, element) {
  element.append(value);
}

const React = {
  createElement,
  render,
  addStyle,
};

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ],
);

React.render(app, document.getElementById('app'));
