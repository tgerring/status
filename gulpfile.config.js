
var GLOBSTAR = '**/*';

var basePaths = {
    src: 'src/',
    dest: 'build/'
};

var typeMap = {
    // templates
    jade:       ['*.jade'],

    // styles
    css:        [GLOBSTAR + '.css'],
    less:       [GLOBSTAR + '.less'],

    // scripts
    js:         [GLOBSTAR + '.js', '!dist/**/*.js'],
    coffee:     [GLOBSTAR + '.coffee'],
    jslibs:     ['dist/**/*.js'],

    // images
    png:        [GLOBSTAR + '.png'],
    jpg:        [GLOBSTAR + '.jpg', GLOBSTAR + '.jpeg'],
    gif:        [GLOBSTAR + '.gif'],
    ico:        [GLOBSTAR + '.ico'],

    // extras
    extras:   [GLOBSTAR]
};

module.exports = {
  SERVER_PORT: 1337,
  GLOBSTAR: GLOBSTAR,
  basePaths: basePaths,


  typePaths: {
    templates: {
      src: basePaths.src + 'templates/',
      dest: basePaths.dest + ''
    },
    styles: {
      src: basePaths.src + 'styles/',
      dest: basePaths.dest + 'styles/'
    },
    scripts: {
      src: basePaths.src + 'scripts/',
      dest: basePaths.dest + 'scripts/'
    },
    images: {
      src: basePaths.src + 'images/',
      dest: basePaths.dest + 'images/'
    },
    extras: {
      src: basePaths.src + 'extras/',
      dest: basePaths.dest + '/'
    }
  },

  typeMap: typeMap,

  appFiles: {
    templates:  typeMap.jade,
    styles:     typeMap.css.concat(typeMap.less),
    scripts:    typeMap.js.concat(typeMap.coffee),
    images:     typeMap.png.concat(typeMap.gif).concat(typeMap.jpg).concat(typeMap.ico),
    extras:     typeMap.extras
  },

  vendorFiles: {
    scripts:    typeMap.jslibs
  },

  scriptOrder: [    

  ],

  styleOrder: [
    'bootstrap.min.css',
  ]
};
