

const loader = () => {
  const eleLoad = document.getElementById("global-loader");
  if(!eleLoad) return;
  eleLoad.style.display = "flex";
}

const removeLoader = () => {
  const eleLoad = document.getElementById("global-loader");
  if(!eleLoad) return;
  eleLoad.style.display = "none";
}
window.addEventListener("pageshow", (event) => {
  if (event.persisted == true) removeLoader();
});

window.addEventListener("beforeunload", (event) => {
  loader();
});

const activeLinkSidebar = () => {
  const listLink = document.querySelectorAll("li a");
  if(listLink.length == 0) return;
  console.log(location);
  
  listLink.forEach(link => {
    const href = link.getAttribute("href");
    if(href && href == location.pathname){
      let submenu = link.closest(".submenu")
      if(submenu){
        link.classList.add("active")
        // submenu.querySelector("a").classList.add("subdrop active")
        console.log(submenu.querySelector("a"));
        const title = submenu.querySelector("a")
        title.classList.add("subdrop", "active")
      }
      else{
        link.parentElement.classList.add("active")
      }
      // Scroll to active link with better options
      link.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
      
    }
    
  })
}

document.addEventListener('readystatechange', event => { 
  if (event.target.readyState === "complete") activeLinkSidebar()
});