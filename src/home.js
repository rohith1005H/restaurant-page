function createHomePage() {
    const content = document.getElementById('content');
    
    const h1 = document.createElement('h1');
    h1.textContent = "Rohiths Ass";
    
    const p1 = document.createElement('p');
    p1.textContent = "Here here take rohith's ass";
    
    const p2 = document.createElement('p');
    p2.textContent = "Our award-winning chefs craft each dish with the finest, locally-sourced ingredients, bringing you a taste of luxury in every bite. From our cozy ambiance to our exquisite menu, we promise an unforgettable dining experience.";
    
    const p3 = document.createElement('p');
    p3.textContent = "Join us for an evening of gastronomic adventure and let your taste buds dance with joy!";
    
    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
}

export default createHomePage;