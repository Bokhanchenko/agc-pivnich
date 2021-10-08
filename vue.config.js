module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/var.scss";
          @import "@/styles/material_palette.scss";
        `
      }
    }
  }
};
