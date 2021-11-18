// Importamos la función scraper de la carpeta utils
//const scraper = require('../utils/scraper') // ---Descomenta esta línea---

module.exports = {
    getHello: async (req, res) => {
            res.status(200).json({"mensaje":"La prueba funciona"});
    },
    getProducts: async (req, res) => {
        try {
            // ---Descomenta las 2 siguientes líneas para hacer scraping---
            // const products = await scraper.scrap("https://www.coolmod.com/novedades/"); 
            // res.status(200).json(products);
            res.status(200).json({"mensaje":"Aquí irán los productos"}); // ---Comenta esta línea---

        } catch (error) {
            res.status(404).json({})
        }

    }
    
}