const fs = require("fs");


function dynamicallyLoadRoutes(app) {
   //read the file name in folder and apply the fnc to each of them 
    fs.readdirSync(__dirname).forEach(function (file) {
        //skip all non js files
        if (
            file === "index.js" ||
            file.substr(file.lastIndexOf(".") + 1) !== "js"
        )

            return;
        //name of the file
        let name = file.substr(0, file.indexOf("."));
        require("./" + name)(app);

    });

}



module.exports = dynamicallyLoadRoutes;
