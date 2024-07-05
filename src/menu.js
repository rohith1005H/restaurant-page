function createMenuPage() {
    const menu = document.createElement('div');
    menu.classList.add('tab-content');
    
    const h1 = document.createElement('h1');
    h1.textContent = "Our Menu";
    
    const menuItems = [
        { name: "Gourmet Burger", description: "Angus beef patty with artisanal cheese and truffle mayo" },
        { name: "Wild Mushroom Risotto", description: "Creamy Arborio rice with a medley of forest mushrooms" },
        { name: "Seared Ahi Tuna", description: "Sesame-crusted tuna with wasabi aioli and pickled ginger" }
    ];
    
    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        
        const itemName = document.createElement('h2');
        itemName.textContent = item.name;
        
        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;
        
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDesc);
        menu.appendChild(itemDiv);
    });
    
    return menu;
}

export default createMenuPage;