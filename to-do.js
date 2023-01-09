(function () {

  const category = document.getElementsByClassName('sidebar-listbox')[0];
  const selectListCategory = document.getElementsByClassName('new-list-category')[0];
  const newListCategory = document.getElementsByClassName('new-list-category')[0];
  const selectedCategoryName = document.getElementsByClassName('heading')[0];
  const selectedCategoryIcon = document.getElementById('center-heading-icon');
  const currentDate = document.getElementsByClassName("date")[0];
  const getNewList = document.getElementById('text');
  const getAddTask = document.getElementById('task');
  const menu = document.getElementsByClassName('menu-button')[0];
  const hideLeftColumn = document.getElementsByClassName('left-column')[0];
  const addtask = document.getElementsByClassName('new-task')[0];
  const leftCategoryList = document.getElementsByClassName('sidebar-center-content');
  // const pageReload = document.getElementsByClassName('app-name')[0];
  // const refresh = document.getElementsByClassName('main')[0];

  var categoryList = [
    { id: 1, name: 'My Day', icon: 'fa-regular fa-sun' },
    { id: 2, name: 'Important', icon: 'fa-regular fa-star' },
    { id: 3, name: 'Planned', icon: 'fa-solid fa-calendar-days' },
    { id: 4, name: 'Assigned to me', icon: 'fa-regular fa-user' },
    { id: 5, name: 'Tasks', icon: 'fa-solid fa-house' }
  ]

  var newCategoryList = [
  ]

  var newTaskList = [
  ]

  function init() {
    renderCategory();
    newListRender();
    listener();
    date();
  }

  function listener() {
    category.addEventListener('click', chooseCategory);
    selectListCategory.addEventListener('click', selectedListCategory);
    getNewList.addEventListener('keydown', addList);
    getAddTask.addEventListener('keydown', addTask)
    menu.addEventListener('click', hideMenu);
    selectedCategoryIcon.addEventListener('click', openMenu);
    // pageReload.addEventListener('click', pageRefresh);
  }

  function date() {
    let now = new Date().toLocaleDateString('en-us', { weekday: 'long', month: "long", day: "numeric" });
    currentDate.innerText = now;
  }

  function renderCategory() {
    category.innerHTML = "";
    for (let i = 0; i < categoryList.length; i++) {
      addCategory(categoryList[i]);
    }
  }

  function chooseCategory(event) {
    let selectedCategory = selectCategory(event);
    for (let i = 0; i < categoryList.length; i++) {
      if (selectedCategory.innerText == categoryList[i].name) {
        selectedCategoryName.innerText = categoryList[i].name;
        selectedCategoryIcon.className = categoryList[i].icon;
      }
    }
    if (selectedCategory.innerText != 'My Day') {
      currentDate.innerHTML = '';
    } else {
      date();
    }
  }

  function selectCategory(event) {
    var chooseCategory;
    const selectedCategory = document.getElementsByClassName("select-category");
    if (selectedCategory.length > 0) {
      selectedCategory[0].className = "sidebar-center-content";
    }
    if (event.target.tagName == 'LI') {
      event.target.className = "select-category";
      chooseCategory = document.getElementsByClassName("select-category")[0];
    } else {
      event.target.parentElement.className = "select-category";
      chooseCategory = document.getElementsByClassName("select-category")[0];
    }
    return chooseCategory;
  }

  function selectedListCategory(event) {
    let selectedCategory = selectCategory(event);
    for (let i = 0; i < newCategoryList.length; i++) {
      if (selectedCategory.innerText == newCategoryList[i].name) {
        selectedCategoryName.innerText = newCategoryList[i].name;
        selectedCategoryIcon.className = newCategoryList[i].icon;
      }
    }
    if (selectedCategory.innerText != 'My Day') {
      currentDate.innerHTML = '';
    } else {
      date();
    }
  }

  function addCategory(singleCategory) {
    let item = generateElement("li", { className: 'sidebar-center-content' });
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

  function addList(event) {
    if (event.key == "Enter") {
      newCategoryList.push({ name: getNewList.value, icon: 'fa-solid fa-list-ul' });
      getNewList.value = "";
      newListRender();
    }
  }

  function newListRender() {
    newListCategory.innerHTML = "";
    for (let i = 0; i < newCategoryList.length; i++) {
      addNewListCategory(newCategoryList[i]);
    }
  }

  function addNewListCategory(singleCategory) {
    let item = generateElement("li", { className: 'sidebar-center-content' });
    let icon = generateElement("i", { className: singleCategory.icon });
    let text = generateElement("p", { content: singleCategory.name });
    item.appendChild(icon);
    item.appendChild(text);
    newListCategory.appendChild(item);
  }

  function addTask(event) {
    if (event.key == "Enter") {
      newTaskList.push({ name: getAddTask.value, icon: 'fa-regular fa-circle' });
      newTaskList.value = '';
      addTaskRender();
    }
  }

  function addTaskRender() {
    addtask.innerHTML = "";
    for (let i = 0; i < newTaskList.length; i++) {
      addNewTask(newTaskList[i]);
    }
  }

  function addNewTask(task) {
    let item = generateElement("li", { className: 'add-task' });
    let icon = generateElement("i", { className: task.icon });
    let text = generateElement("p", { content: task.name });
    item.appendChild(icon);
    item.appendChild(text);
    addtask.appendChild(item);
  }

  function hideMenu() {
    hideLeftColumn.className = "hide-left-column";
    selectedCategoryIcon.className = "fa-solid fa-bars";
  }

  function openMenu() {
    const OpenLeftColumn = document.getElementsByClassName('hide-left-column')[0];
    OpenLeftColumn.className = 'left-column';
    selectedCategoryIcon.className = 'fa-solid fa-list-ul';
    for (let i = 0; i < categoryList.length; i++) {
      if (selectedCategoryName.innerText == categoryList[i].name) {
        selectedCategoryIcon.className = categoryList[i].icon;
      } 
    }
    // const normalCenterColumn = document.getElementsByClassName('center-column');
    // normalCenterColumn.className = 'center-column';
    // console.log(selectCategory.icon);
    // //selectedCategoryIcon.className = categoryList[0].icon;
    // selectCategory.icon = selectedCategoryIcon.className;
  }

  init();

}());