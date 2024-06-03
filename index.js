console.log("hi")




$(document).ready(function() {
    const carouselItems = $('.carousel-item');
    const carouselData = [{
        icon: '<i class="fa-solid fa-code"></i>',
        title: "Web Development",
        description: "Web development services",
        link: "www.fyle.com"

    }, {
        icon: '<i class="fa-solid fa-search"></i>',
        title: "Search Engine Optimization",
        description: "Full Suite SEO services",
        link: "www.fyle.com"

    }, {
        icon: '<i class="fa-solid fa-bullhorn"></i>',
        title: "Search Engine Marketing",
        description: "Full suite search engine marketing services",
        link: "www.fyle.com"

    }, {
        icon: '<i class="fa-solid fa-chart-line"></i>',
        title: "Performance Marketing",
        description: "Pay only for conversion marketing tactics for maximum revenue",
        link: "www.fyle.com"

    }, {
        icon: '<i class="fa-solid fa-shield"></i>',
        title: "Web Security",
        description: "Web security services at your doorstep",
        link: "www.fyle.com"

    }];


    carouselItems.each(function() {
        
        
        const item = $(this);
        const itemId = item.attr('id')
        const fetchIdNumber = itemId.split("-")
        const index = fetchIdNumber[fetchIdNumber.length - 1]
        
        const originalContent = item.html();
        const newContent = `<div class='bg-carousel'><span>${carouselData[index-1].icon}</span><h1>${carouselData[index-1].title}</h1><p>${carouselData[index-1].description}</p><button>Read More</button></div>`;

        item.on('mouseenter', function() {
            item.html(newContent)
        });

        item.on('mouseleave', function() {
            item.html(originalContent);
        });
    });
});