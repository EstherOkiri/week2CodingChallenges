let parent = document.getElementById('parent-list');
let sublist = document.getElementById('sub-list');

parent.addEventListener('click',function(){
    if (sublist.style.display === 'none'){
        sublist.style.display = 'block';
    }else{
        sublist.style.display = 'none';
    }
})