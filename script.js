var $dc = {};

$dc.categories = ['Lunch', 'Dinner', 'Sushi', 'Dessert', 'Beverages'];

$dc.loadMenuItems = function() {
    // Choose a random category
    var randomCategory = $dc.categories[Math.floor(Math.random() * $dc.categories.length)];
    console.log("Loading menu items for category: " + randomCategory);
    
    // Simulate an AJAX call to fetch menu items
    setTimeout(function() {
        var menuItems = $dc.getMenuItems(randomCategory);
        $dc.displayMenuItems(menuItems);
    }, 500);
};

$dc.getMenuItems = function(category) {
    // Placeholder for fetching menu items based on category
    // In a real application, you would fetch this data from a server
    var menuItems = {
        'Lunch': ['Sandwich', 'Salad', 'Soup'],
        'Dinner': ['Steak', 'Pasta', 'Fish'],
        'Sushi': ['California Roll', 'Tuna Roll', 'Salmon Sashimi'],
        'Dessert': ['Ice Cream', 'Cake', 'Cookies'],
        'Beverages': ['Coffee', 'Tea', 'Juice']
    };
    return menuItems[category] || [];
};

$dc.displayMenuItems = function(items) {
    var menuItemsDiv = document.getElementById('menu-items');
    menuItemsDiv.innerHTML = '';
    if (items.length > 0) {
        var ul = document.createElement('ul');
        items.forEach(function(item) {
            var li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        menuItemsDiv.appendChild(ul);
    } else {
        menuItemsDiv.textContent = 'No items found for this category.';
    }
};
