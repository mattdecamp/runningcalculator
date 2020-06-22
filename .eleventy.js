module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/js/");
    
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
    
};
