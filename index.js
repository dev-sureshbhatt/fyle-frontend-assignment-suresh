console.log("hi")




$(document).ready(function() {
    const carouselItems = $('.carousel-item');
    const carouselData = [{
        icon: "",
        title: "Web Development",
        description: "Web development services",
        link: "www.fyle.com"

    }, {
        icon: "",
        title: "Search Engine Optimization",
        description: "Full Suite SEO services",
        link: "www.fyle.com"

    }, {
        icon: "",
        title: "Search Engine Marketing",
        description: "Full suite search engine marketing services",
        link: "www.fyle.com"

    }, {
        icon: "",
        title: "Performance Marketing",
        description: "Pay only for conversion marketing tactics for maximum revenue",
        link: "www.fyle.com"

    }, {
        icon: "",
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
        const newContent = `<span>Icon</span><h1>${carouselData[index-1].title}</h1><p>this is p</p><button>Read More</button>`;

        item.on('mouseenter', function() {
            item.html(newContent);
        });

        item.on('mouseleave', function() {
            item.html(originalContent);
        });
    });
});