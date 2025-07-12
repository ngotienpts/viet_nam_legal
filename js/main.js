document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const backTop = document.querySelector("#back-top");

    // xử lý sự kiện chuyển tab
    function handleChangeTab () {
        const changTabs = document.querySelectorAll('.js__changeTab')

        if (changTabs.length === 0) return;

        changTabs.forEach((changTab)=>{
            const tabs = changTab.querySelectorAll(".js__tabItem");
            const panes = changTab.querySelectorAll(".js__tabPane");

            tabs.forEach((tab,index)=>{
                tab.onclick = function() {
                    pane = panes[index]

                    changTab.querySelector('.js__tabItem.active').classList.remove('active')
                    changTab.querySelector('.js__tabPane.active').classList.remove('active')

                    this.classList.add('active')
                    pane.classList.add('active')
                }
            })
        })
    }

    // Xử lý video tỉ lệ 16:9
     function handleVideo_16x9() {
        const video169s = document.querySelectorAll(".js__video169");
        if (video169s.length === 0) return;
        video169s.forEach((video169) => {
            var videos = video169.querySelectorAll("iframe");
            if (videos.length === 0) return;
            videos.forEach((video) => {
                var w = video.offsetWidth;
                video.style.height = (w * 9) / 16 + "px";
            });
        });
    }

    // xử lý sự kiện collapse
    function handleCollapse () {

        const collapseContainers = document.querySelectorAll('.js__collapseContainer')
        if (collapseContainers.length === 0) return;
        
        let activeItem = null;
        
        collapseContainers.forEach((collapseContainer)=>{
            const collapses = collapseContainer.querySelector('.js__collapse')
            collapses.onclick = function() {
                // khi item đang mở
                if (activeItem === collapseContainer) {
                    collapseContainer.classList.remove('active'); 
                    activeItem = null; 
                } else {
                    // khi không có item nào mở
                    if (activeItem) {
                        activeItem.classList.remove('active');
                    }
                    collapseContainer.classList.add('active');
                    activeItem = collapseContainer; 
                    
                }  
                 
            }
           
        })
    }

    // xử lý sự kiện active
    function handleActiveElement() {
        const activeContainers = document.querySelectorAll('.js__activeContainer')
        if (activeContainers.length === 0) return;
        
        
        activeContainers.forEach((activeContainer)=>{
            
            const activeElements = activeContainer.querySelectorAll('.js__activeItem')
            
            if (activeElements.length === 0) return;

            activeElements.forEach((activeElement)=>{

                activeElement.onclick = function() {
                    activeContainer.querySelector('.js__activeItem.active').classList.remove('active')
                    this.classList.add('active');
                }
            })
           
        })
    }


    // Khởi tạo slider với một item
    function initSliderOneItems() {
        const oneSlides = document.querySelectorAll(".js__oneSlidesContainer");
        if (oneSlides) {
            oneSlides.forEach((item) => {
                var slider = item.querySelector(".js__oneSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");

                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                });
            });
        }
    }

    // khởi tạo slider với 3 item
    function initSliderThreeItems() {
        const threeSlides = document.querySelectorAll(".js__threeSlidesContainer");
        if (threeSlides) {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__threeSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        }
                    },
                });
            });
        }
    }
    // khởi tạo slider với 4 item
    function initSliderFourItems() {
        const fourSlides = document.querySelectorAll(".js__fourSlidesContainer");
        if (fourSlides) {
            fourSlides.forEach((item) => {
                var slider = item.querySelector(".js__fourSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    },
                });
            });
        }
    }
    // khởi tạo slider với 5 item
    function initSliderFiveItems() {
        const fiveSlides = document.querySelectorAll(".js__fiveSlidesContainer");
        if (fiveSlides) {
            fiveSlides.forEach((item) => {
                var slider = item.querySelector(".js__fiveSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        }
                    },
                });
            });
        }
    }

    // khởi tạo slider gallery primary
    function initSliderGalleryPrimary() {
        const gallerryPrimary = document.querySelectorAll(
            ".js__swiperGalleryContainerPrimary"
        );
        gallerryPrimary.forEach((item) => {
            var sliderLarge = item.querySelector(".js__swiperGalleryLarge");
            var sliderSmall = item.querySelector(".js__swiperGallerySmall");
            var next = item.querySelector(".swiper-button-next");
            var prev = item.querySelector(".swiper-button-prev");

            var small = new Swiper(sliderSmall, {
                spaceBetween: 15,
                slidesPerView: 2, 
                slidesPerGroup: 2,
                grid: {
                    rows: 1,      
                    fill: 'row',
                },
                watchSlidesProgress: true,
                watchOverflow: true,
                freeMode: false, 
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: next || null,
                    prevEl: prev || null,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        grid: {
                            rows: 1,
                            fill: 'row',
                        },
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        grid: {
                            rows: 2,
                            fill: 'row',
                        },
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        grid: {
                            rows: 2,
                            fill: 'row',
                        },
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        grid: {
                            rows: 2,
                            fill: 'row',
                        },
                    },
                },
            });
            var large = new Swiper(sliderLarge, {
                spaceBetween: 10,
                slidesPerView: 1,
                slidesPerGroup: 1,
                observer: true,
                    observeParents: true,
                    grabCursor: true,
              
                thumbs: {
                    swiper: small,
                },
            });

            small.on('click', function () {
                large.slideTo(small.clickedIndex);
            });

        });
    }
    // khởi tạo slider gallery secondary
    function initSliderGallerySecondary() {
        const gallerrySecondary = document.querySelectorAll(
            ".js__swiperGalleryContainerSecondary"
        );
        gallerrySecondary.forEach((item) => {
            var sliderLarge = item.querySelector(".js__swiperGalleryLarge");
            var sliderSmall = item.querySelector(".js__swiperGallerySmall");
            var next = item.querySelector(".swiper-button-next");
            var prev = item.querySelector(".swiper-button-prev");

            var small = new Swiper(sliderSmall, {
                spaceBetween: 15,
                slidesPerView: 5, 
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                watchOverflow: true,
                freeMode: false, 
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: next || null,
                    prevEl: prev || null,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                    },
                },
            });
            var large = new Swiper(sliderLarge, {
                spaceBetween: 10,
                slidesPerView: 1,
                slidesPerGroup: 1,
                observer: true,
                    observeParents: true,
                    grabCursor: true,
              
                thumbs: {
                    swiper: small,
                },
            });

            small.on('click', function () {
                large.slideTo(small.clickedIndex);
            });

        });
    }

    // khởi tạo slider scale center
    function initSliderScaleCenter() {
        const scaleCenters  = document.querySelectorAll(".js__swiperScaleCenterContainer");
        if (scaleCenters ) {
            scaleCenters .forEach((item) => {
                var slider = item.querySelector(".js__sliderScaleCenter");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    centeredSlides: true,
                    loop: true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    },
                });
            });
        }
    }
    
    // xử lý sự kiện show menu mobile
    function handleMenuMobile () {
        // show menu
        const bod = document.querySelector('body')
        const clickShowMenuMbs = document.querySelectorAll('.js__clickShowMenuMb');
        const closeSubMenuMb = document.querySelector('.js__closeSubMenuMb');
        const subMenuMb = document.querySelector('.js__subMenuMb');

        if(clickShowMenuMbs.length === 0 && !closeSubMenuMb) return;
        clickShowMenuMbs.forEach((clickShowMenuMb)=>{
            clickShowMenuMb.onclick = function() {
                subMenuMb.classList.add('active');
                bod.classList.add('hidden')
            }
        })
        closeSubMenuMb.onclick = function(){
            subMenuMb.classList.remove('active');
            bod.classList.remove('hidden')
        }

        const subMenuMbContainers = document.querySelectorAll('.js__subMenuMbContainer');

        if (subMenuMbContainers.length === 0 ) return;
        
        subMenuMbContainers.forEach((subMenuMbContainer)=>{

            const subMenuMbItems = subMenuMbContainer.querySelectorAll('.js__subMenuMbItem');
            const subMenuMbDropdowns = subMenuMbContainer.querySelectorAll('.js__subMenuMbDropdown');
            
            if (subMenuMbItems.length === 0 ) return;
            
            subMenuMbItems.forEach((subMenuMbItem)=>{
                const showSubMenuMbItem = subMenuMbItem.querySelector('.js__showSubMenuMbItem');
                
                if(!showSubMenuMbItem) return

                showSubMenuMbItem.onclick = function() {
                    subMenuMbItem.classList.toggle('active')
                }
            });

            if (subMenuMbDropdowns.length === 0 ) return;

            subMenuMbDropdowns.forEach((subMenuMbDropdown)=>{
                const showSubMenuMbDropdown = subMenuMbDropdown.querySelector('.js__showSubMenuMbDropdown');
                
                if(!showSubMenuMbDropdown) return

                showSubMenuMbDropdown.onclick = function() {
                    subMenuMbDropdown.classList.toggle('active')
                }
            });

            

        });

    }

    // xử lý sự kiện show search desk
    function handleShowSearchMb () {
        const searchMbs = document.querySelectorAll(".js__searchMb");
        if (searchMbs.length === 0) return;
        searchMbs.forEach((searchMb) => {
            var closeSearchMb =
                document.querySelector(".js__closeSearchMb");
            var formSearchMb = document.querySelector(".js__formSearchMb");
            const focusElement =
                formSearchMb.querySelector(".js__focusSearchMb");
            searchMb.onclick = function () {
                formSearchMb.classList.add("active");
                focusElement.focus();
                
            };
            closeSearchMb.onclick = function () {
                formSearchMb.classList.remove("active");
                focusElement.value = "";
            };
        });
        
    }

    // xử lý sự kiện để show popup
    function handleShowPopup() {
        const popupContainers = document.querySelectorAll(".js__popupContainer");
        
        if(popupContainers.length === 0) return 
        
        popupContainers.forEach((popupContainer)=>{
            
            const showPopup = popupContainer.querySelector(".js__showPopup");
            const popupContent = popupContainer.querySelector(".js__popupContent");
            const closePopup = popupContainer.querySelector(".js__closePopup");
            const overlay = popupContainer.querySelector(".js__overlay");
            
            showPopup.onclick = function() {
                popupContent.classList.add('active')
                overlay.classList.add('active')
                document.querySelector("body").style.overflow = "hidden";
            }
    
            closePopup.onclick = function () {
                document.querySelector("body").style.overflow = "auto";
                popupContent.classList.remove('active')
                overlay.classList.remove('active')
            };
    
            overlay.onclick = function () {
                this.classList.remove("active");
                document.querySelector("body").style.overflow = "auto";
                popupContent.classList.remove('active');
            };

            })

    }


    // Khởi tạo fancybox
    function initFancybox() {
        const fancyboxes = document.querySelectorAll(".fancybox-full");
        if (fancyboxes) {
            fancyboxes.forEach(function () {
                $(".fancybox-full a").fancybox();
            });
        }
    }

    // Xử lý thanh header dính
    function handleStickyHeader() {
        const stickyHeaderPC = document.querySelector(".js__stickyHeader");
        if (stickyHeaderPC) {
            const isSticky = scrollY > 300;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }

    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
    
        if (!backTop) return;

        backTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

    }

    // Xử lý hiển thị nút backTop dựa trên vị trí cuộn trang
    function handleBackTopVisibility() {
        if (backTop) {
            if (
                document.body.scrollTop > 300 ||
                document.documentElement.scrollTop > 300
            ) {
                backTop.style.opacity = 1;
                backTop.style.visibility = "visible";
            } else {
                backTop.style.opacity = 0;
                backTop.style.visibility = "hidden";
            }
        }
    }

    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        handleStickyHeader();
        handleBackTopVisibility()
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleShowSearchMb();
        handleMenuMobile();
        // slide
        initSliderOneItems();
        initSliderThreeItems();
        initSliderFourItems();
        initSliderFiveItems();
        initSliderGalleryPrimary();
        initSliderGallerySecondary();
        initSliderScaleCenter();
        // end slide
        handleBackTop();
        initFancybox();
        handleShowPopup();
        handleCollapse();
        handleChangeTab();
        handleActiveElement();
        // handleVideo_16x9();
        window.addEventListener('scroll',handleWindowScroll);
        window.addEventListener('resize',handleWindowScroll);
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});