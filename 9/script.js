function ToDoList () {
    let main = document.createElement('div');
    main.classList.add('main');
    document.body.appendChild(main);

    let header = document.createElement('div');
    header.classList.add('header');
    main.appendChild(header);
    
    let taskList = document.createElement('div');
    taskList.classList.add('taskList');
    main.appendChild(taskList);
    
    let button = document.createElement('button');
    button.innerHTML = 'Очистить';
    button.classList.add('button');
    main.appendChild(button);
    button.addEventListener('click' , (event) =>{
        clear();
    });
    
    let h1 = document.createElement('h1');
    h1.innerHTML = 'ToDoList';
    h1.classList.add('h1');
    header.appendChild(h1);

    let input = document.createElement('input');
    input.setAttribute('placeholder' , 'Введите новую задачу');
    input.setAttribute('type' , 'text');
    input.setAttribute('name' , 'getList');
    header.appendChild(input);
    input.addEventListener('keydown' , (event) =>{
        if (event.key === 'Enter' && input.value !== '' ){
            addList(event.target.value)
            input.value ='';
        };
    });

    let ul = document.createElement('ul');
    ul.setAttribute('id' , 'getList');
    taskList.appendChild(ul);
}

ToDoList ();

function addList (text) {
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type' , 'checkbox');
    checkbox.setAttribute('name' , 'Checkbox');
    checkbox.setAttribute('id' , 'Checkbox');
    
    let item = document.createElement('li');
    let item_li = document.createElement('span');
    let item_button = document.createElement('button');
    item_li.innerHTML = text;
    item_button.innerHTML = 'Удалить';
    item.prepend (checkbox);
    item.append (item_li);
    item.append (item_button);
   
    checkbox.addEventListener('click' , (event) =>{
        active (item_li); 
    });

    item_button.addEventListener('click' , (event) =>{
        item.remove();
    });

    document.querySelector('#getList').prepend(item);
};



function clear () {
    document.querySelector('#getList').innerHTML = '';
};

function active (span) {
    span.classList.toggle('active');
};
