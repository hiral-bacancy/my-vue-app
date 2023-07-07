const MyPlugin = {
    install: (app, options) => {
        console.log("plugin installed: ", app, options)
        app.config.globalProperties.$helper = {
        sunOfTwo
       }
    }
}; 

const sunOfTwo = (num1, num2) => {
    return num1+num2;
}
  
  export default MyPlugin