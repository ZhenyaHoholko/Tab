//создание модуля, который позволяет скрыть данные внутренней логики в консоли на сайте (function(){})()
(function () {
    const tabs=document.querySelectorAll('.tab-head__item');
    const contents=document.querySelectorAll('.tab-content__item');
    
    tabs.forEach((tab, index)=>{
        tab.onclick=()=>{
            changeTab(index);
        };
    });
    
    function changeTab(index) {
        setAtiveClass(tabs,index);
        setAtiveClass(contents, index);
    }
    function setAtiveClass(arr,index) {
        for (let el of arr){
            el.classList.remove("active");
        }    
        arr[index].classList.add('active');
    }
    // Добавдение класса ACTIVE нажатому Tab и удаление с предыдущего 
})();