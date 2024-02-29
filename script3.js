let parent = document.getElementById('parent-list');



parent.addEventListener('click',function(event){
    if(event.target.tagName === 'BUTTON'){
        let sublist = event.target.nextElementSibling;
        if(sublist.style.display === 'none' || sublist.style.display === ' '){
            sublist.style.display = 'block';
        }else{
            sublist.style.display = 'none';
        }
    }
    
});