



function modalToggle() {
    const bodyWrapper = document.querySelector('.body-wrapper');
    const tileButtons = document.querySelectorAll('.tile-btn');
    const modalWindow = document.querySelector('.modal-fs');
    const modalWrappers = document.querySelectorAll('.modal-wrapper');
    console.log(modalWrappers);
    const modalFluid = document.querySelector('.modal-fluid');
    for (let btn of tileButtons) {
        btn.addEventListener('click', (event) => {
                let currentWrapper;
                let currentModalFluid;
                for (let wrapper of modalWrappers) {
                    if (wrapper.getAttribute('laboratoryId') == btn.getAttribute('laboratoryId')) {
                        
                        currentWrapper = wrapper;
                        console.log(wrapper)
                        currentModalFluid = currentWrapper.querySelector('.modal-fluid');
                        break;
                    }
                }
              
                currentWrapper.classList.toggle('modal-opened');
                currentModalFluid.addEventListener('click', () => {
                    console.log('1')
                    currentWrapper.classList.remove('modal-opened');
            })
        })
    }
}
        

modalToggle();
