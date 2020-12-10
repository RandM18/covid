    var
    elementsFixed = document.querySelectorAll('.contentFixedElement'),
    blockFixed = document.querySelectorAll('.block-fixed'), 
    textFixed = document.querySelectorAll('.text-fixed'),
    heightFixedElement = document.querySelectorAll('.heightFixedElement'),
    init = [],
    end = [],
    initImg = [],
    endImg = [],
    imgsFixed = [],
    parrafFixed = [],
    diff = 0,
    last = 0;

window.addEventListener('scroll', function(e) {

    var scrollTop = window.pageYOffset;

    elementsFixed.forEach((elementF, i) => {

        init[i] = elementsFixed[i].offsetTop;
        end[i] = elementsFixed[i].offsetTop + elementsFixed[i].offsetHeight - window.innerHeight;
        
        if (scrollTop > init[i]) {
            initFixedElements();
            if (scrollTop < end[i] ) {

                blockFixed[i].classList.remove('absolute_bottom');
                blockFixed[i].classList.add('fixed_top');

                if (imgsFixed[i]) {

                    last = imgsFixed[i].length - 1;

                    for (var x = 0; x < imgsFixed[i].length; x++) {
                        imgsFixed[i][x].classList.remove('visible');
                        if (scrollTop > initImg[i][x] - window.innerHeight*1.3 && scrollTop < endImg[i][x]) {
                            imgsFixed[i][x].classList.add('visible');
                        } else {
                            imgsFixed[i][x].classList.remove('visible');
                        }
                    }
                }

            } else {

                blockFixed[i].classList.remove('fixed_top');
                blockFixed[i].classList.add('absolute_bottom');
            }

        } else {
            blockFixed[i].classList.remove('absolute_bottom');
            blockFixed[i].classList.remove('fixed_top');
        }
    });
});

function initFixedElements() {

    elementsFixed.forEach((elementF, i) => {

        initImg[i] = new Array(2);
        endImg[i] = new Array(2);
        parrafFixed[i] = new Array(2);

        var heightBlockFixed = textFixed[i].offsetHeight;

        init[i] = elementsFixed[i].offsetTop;
        end[i] = init[i] + textFixed[i].offsetHeight - window.innerHeight;

        elementsFixed[i].style.height = heightBlockFixed + 'px';

        imgsFixed[i] = elementF.children[0].children[0].children;

        for (var x = 0; x < textFixed[i].children.length; x++) {

            parrafFixed[i][x] = textFixed[i].children[x];

            initImg[i][x] = parrafFixed[i][x].offsetTop + init[i];
            endImg[i][x] = initImg[i][x] + parrafFixed[i][x].offsetHeight;
        }
    });
}


window.onload = function () {
  initFixedElements();
};

// window.resize = function () {
// 	initFixedElements();
// };


