const hamburger = document.getElementById("hamburger");
  const icons = document.querySelector(".row-of-icons");

  hamburger.addEventListener("click", () => {
    icons.classList.toggle("active");
  });

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

    const buildAndShowCategoriesHTML = function (categories){
        $ajaxUtils.sendGetRequest(
            categoryTemplate,
            function(categoryTemplate){
                const categoriesViewHtml = buildCategoriesViewHtml(categories, categoryTemplate);
                innerHtml("#context-fon", categoriesViewHtml);
            },
            false
        );
    }

    const buildCategoriesViewHtml = function (categories, categoryTemplate){
        let finalHtml = '<div id="content-place"><div>';
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
        let secret = Math.floor(Math.random() * categories.length);
        let html = categoryTemplate;
        const name = "" + categories[secret].name;
        html = insertProperty(html, "name", name);            
        html = insertProperty(html, "shortname", "Specials");
        html = insertProperty(html, "notes", "Випадкова категорія");
        html = insertProperty(html, "image_name", "particle-style-question-mark-background-design-query_1017-43011.avif");
        finalHtml += html;
        finalHtml += "</div></div>";
        return finalHtml;
    }
    simar.loadCatalogCatagories = function(){
        $ajaxUtils.sendGetRequest(allCategories, buildAndShowCategoriesHTML);
    };

    const buildAndShowItemsHTML = function (items){
        $ajaxUtils.sendGetRequest(
            itemTemplate,
            function(itemTemplate){
                const categoriesViewHtml = buildItemsViewHtml(items, itemTemplate);
                innerHtml("#content-place", categoriesViewHtml);
            },
            false
        );
    }

    const buildItemsViewHtml = function (items, categoryTemplate){
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


 const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dots = document.querySelectorAll('.dot');

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateCarousel(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots[index].classList.add('active');
  }

  function goToNextSlide() {
    dots[currentIndex].classList.remove('active')
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(currentIndex);
  }

  function goToPrevSlide() {
    dots[currentIndex].classList.remove('active')
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel(currentIndex);
  }

  let slideInterval = setInterval(goToNextSlide, 10000);

  nextBtn.addEventListener('click', () => {
    goToNextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    goToPrevSlide();
    resetInterval();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      if(currentIndex || currentIndex === 0){
        dots[currentIndex].classList.remove('active');
      }
      currentIndex = parseInt(dot.getAttribute('data-index'));
      updateCarousel(currentIndex);
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(goToNextSlide, 10000);
  }

  updateCarousel(currentIndex);
