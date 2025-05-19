(function(global){
    const simar = {};
    const categoryTemplate = "category-snippet.html";
    const allCategories = "categories.json";
    const itemTemplate = "item-snippet.html";
    const itemsFolder = "items";
    //Function, that add html into a certain place by selector
    const innerHtml = function(selector, html){
        const targetHtml = document.querySelector(selector);
        targetHtml.innerHTML  = html;
    };

    const insertProperty = function(string, propName, propValue){
        const propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    }

    //first content on the page
    document.addEventListener("DOMContentLoaded", function(event){
            //on first load
            $ajaxUtils.sendGetRequest(categoryTemplate, 
                function(resposeText){
                    document.querySelector("#content-place").innerHTML = resposeText;
                },
                false
            );
    })

    function buildAndShowCategoriesHTML(categories){
        $ajaxUtils.sendGetRequest(
            categoryTemplate,
            function(categoryTemplate){
                const categoriesViewHtml = buildCategoriesViewHtml(categories, categoryTemplate);
                innerHtml("#content-place", categoriesViewHtml);
            },
            false
        );
    }

    function buildCategoriesViewHtml(categories, categoryTemplate){
        let finalHtml = "<div>";
        for(let i = 0;i < categories.length;i++){
            let html = categoryTemplate;
            const name = "" + categories[i].name;
            const shortname = "" + categories[i].shortname;
            const notes = "" + categories[i].notes;
            const image_name = "" + categories[i].image_name;
            html = insertProperty(html, "name", name);            
            html = insertProperty(html, "shortname", shortname);
            html = insertProperty(html, "notes", notes);
            html = insertProperty(html, "image_name", image_name);
            finalHtml += html;
        }
        finalHtml += "</div>";
        return finalHtml;
    }
    simar.loadCatalogCatagories = function(){
        $ajaxUtils.sendGetRequest(allCategories, buildAndShowCategoriesHTML);
    };

    function buildAndShowItemsHTML(items){
        $ajaxUtils.sendGetRequest(
            itemTemplate,
            function(itemTemplate){
                const categoriesViewHtml = buildItemsViewHtml(items, itemTemplate);
                innerHtml("#content-place", categoriesViewHtml);
            },
            false
        );
    }

    function buildItemsViewHtml(items, categoryTemplate){
        let finalHtml = "<div>";
        finalHtml += "<h4>" + items.categoryName + "</h4>";
        for(let i = 0;i < items.categoryItems.length;i++){
            let html = categoryTemplate;
            const name = "" + items.categoryItems[i].name;
            const shortname = "" + items.categoryItems[i].shortname;
            const description = "" + items.categoryItems[i].description;
            const image_name = "" + items.categoryItems[i].image_path;
            html = insertProperty(html, "name", name);
            html = insertProperty(html, "description", description);
            html = insertProperty(html, "image_name", image_name);
            finalHtml += html;
        }
        finalHtml += "</div>";
        return finalHtml;
    }

    simar.loadCatalogItems = function(categoryName){
        $ajaxUtils.sendGetRequest(itemsFolder + "/" + categoryName+'.json', buildAndShowItemsHTML);
    }

    global.$simar = simar;

})
(window);

$simar.loadCatalogCatagories();