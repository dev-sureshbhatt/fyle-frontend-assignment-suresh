console.log("hi");

$(document).ready(function() {
    const carouselItems = $('.carousel-item');
    const carouselData = [{
        icon: '<i class="fa-solid fa-code"></i>',
        title: "Web Development",
        description: "Web development services",
        link: "https://www.fyle.com"
    }, {
        icon: '<i class="fa-solid fa-search"></i>',
        title: "Search Engine Optimization",
        description: "Full Suite SEO services",
        link: "https://www.fyle.com"
    }, {
        icon: '<i class="fa-solid fa-bullhorn"></i>',
        title: "Search Engine Marketing",
        description: "Full suite search engine marketing services",
        link: "https://www.fyle.com"
    }, {
        icon: '<i class="fa-solid fa-chart-line"></i>',
        title: "Performance Marketing",
        description: "Pay only for conversion marketing tactics for maximum revenue",
        link: "https://www.fyle.com"
    }, {
        icon: '<i class="fa-solid fa-shield"></i>',
        title: "Web Security",
        description: "Web security services at your doorstep",
        link: "https://www.fyle.com"
    }];

    carouselItems.each(function() {

        const item = $(this);
        const itemId = item.attr('id');
        const fetchIdNumber = itemId.split("-");
        const index = fetchIdNumber[fetchIdNumber.length - 1] - 1;

        const originalContent = item.html();
        const newContent = `<div class='bg-carousel'><span>${carouselData[index].icon}</span><h1>${carouselData[index].title}</h1><p>${carouselData[index].description}</p><a href="https://www.fylehq.com/" target="_blank"><button class='bg-carousel-btn'>Read More</button></a></div>`;

        item.on('mouseenter', function() {
            console.log(`Mouse entered on item ${index + 1}`);
            item.html(newContent);
            console.log("New HTML content: ", item.html());  // Log the new HTML to ensure it's being added
        });


        item.on('mouseleave', function() {
            console.log(`Mouse left item ${index + 1}`);
            item.html(originalContent);
        });
    });

    
});
