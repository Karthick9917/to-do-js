(function () {
    
    const category = document.getElementsByClassName('sidebar-listbox')[0];
    const selectedCategory = document.getElementsByClassName('center-top-block-left')[0];
    const currentDate = document.getElementsByClassName("date")[0];
    var categoryList = [
        {id:1, name: 'My Day', icon: 'fa-regular fa-sun'},
        {id:2, name: 'Important', icon: 'fa-regular fa-star'},
        {id:3, name: 'Planned', icon: 'fa-solid fa-calendar-days'},
        {id:4, name: 'Assigned to me', icon: 'fa-regular fa-user'},
        {id:5, name: 'Tasks', icon: 'fa-solid fa-house'}
    ]

    function init() {
        renderCategory();
        listener();
        date();
    }
    
    function date() {
    let now = new Date().toLocaleDateString('en-us', { weekday: 'long',  month: "long", day: "numeric" });
    currentDate.innerText = now;
    }

    function renderCategory() {
        category.innerHTML = "";
        for(let i=0;i<categoryList.length;i++) {
            addCategory(categoryList[i]);
        }
    }

    function listener() {
        category.addEventListener('click',selectCategory);
    }

    function selectCategory(event) {
        event.target.className = "select-category";
        let SelectedItem = generateElement("li", { className: 'Selected-category-heading'});
        let icon = event.target.getElementsByTagName('i')[0].innerText;
        let heading = event.target.getElementsByTagName('p')[0].innerText;
        selectedCategory.innerHTML = '';
        SelectedItem.appendChild(icon);
        SelectedItem.appendChild(heading);
        selectedCategory.appendChild(SelectedItem);
        }

    function addCategory(singleCategory) {
        let item = generateElement("li", { className: 'sidebar-center-content'});
        let icon = generateElement("i", { className: singleCategory.icon });
        let text = generateElement("p", { content: singleCategory.name });
        item.appendChild(icon);
        item.appendChild(text);
        category.appendChild(item);
    }
    
    function generateElement(element, attributes) {
        var createdElement = document.createElement(element);
        if (attributes.className !== undefined) {
          createdElement.className = attributes.className;
        }
        if (attributes.content !== undefined) {
          createdElement.innerText = attributes.content;
        }
        return createdElement;
    }

    init();

}());