module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('public')
  return {
    passthroughFileCopy: true
  }
}

// source: https://michaelsoolee.com/add-css-11ty/