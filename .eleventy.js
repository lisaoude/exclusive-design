module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('styles')
  return {
    pssthroughFileCopy: true
  }
}

// source: https://michaelsoolee.com/add-css-11ty/