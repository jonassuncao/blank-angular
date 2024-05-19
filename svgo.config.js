module.exports = {
  multipass: true,
  // js2svg: {
  //   indent: 2,
  //   pretty: false,
  // },
  plugins: [
    'cleanupIds',
    'minifyStyles',
    'removeComments',
    'removeDesc',
    'removeDimensions',
    'removeDoctype',
    'removeElementsByAttr',
    'removeEmptyAttrs',
    'removeUselessStrokeAndFill',
    'removeEmptyContainers',
    'removeEmptyText',
    'removeMetadata',
    'removeScriptElement',
    'removeStyleElement',
    'removeTitle',
    'removeUnknownsAndDefaults',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(class|id)',
        preserveCurrentColor: true,
      },
    },
    'convertStyleToAttrs',
    {
      name: 'convertColors',
      params: {
        currentColor: true,
        names2hex: true,
      },
    },
    {
      name: 'inlineStyles',
      params: {
        onlyMatchedOnce: false,
      },
    },
  ],
};
