function createContactPage() {
    const contact = document.createElement('div');
    contact.classList.add('tab-content');
    
    const h1 = document.createElement('h1');
    h1.textContent = "Contact Us";
    
    const p = document.createElement('p');
    p.textContent = "Get in touch with us for reservations or inquiries:";
    
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@gourmetsdelight.com</p>
        <p>Address: 123 Culinary Lane, Foodie City, FC 12345</p>
    `;
    
    contact.appendChild(h1);
    contact.appendChild(p);
    contact.appendChild(contactInfo);
    
    return contact;
}

export default createContactPage;