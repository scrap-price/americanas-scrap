require('es6-promise').polyfill();
var request = require('request');
var cheerio = require('cheerio');

exports.getProduct = function(url) {
    return new Promise(function(fulfill, reject) {
        request(url, function(error, response, html) {
            if(!error) {
                var $ = cheerio.load(html);
                var product = {title:"", price:"", thumbnail:""};

                
                var mpTitle = $('.mp-title');

                product.title = mpTitle.children('.prodTitle').children('span[itemprop=name]').text();

                product.price = $('span[itemprop="price/salesPrice"]').attr('content');

                var mpPhotos = $('.mp-photos');
                product.thumbnail = mpPhotos.children('.a-carousel').children('.a-carousel-list').children().first().children('img[itemprop=thumbnail]').attr('data-szimg');
                if (product.thumbnail == null) {
                    product.thumbnail = mpPhotos.children('.a-carousel').children('.a-carousel-list').children().first().children('img[itemprop=thumbnail]').attr('src');
                }
                
                fulfill(product);
            } else {
                reject({error:"Cannot get product"});
            }
        });
    });
};