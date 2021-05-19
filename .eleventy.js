module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('styles')
  return {
    passthroughFileCopy: true
  }
}

// source: https://michaelsoolee.com/add-css-11ty/