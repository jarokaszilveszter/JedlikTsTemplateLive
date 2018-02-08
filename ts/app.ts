
namespace Jedlik {

    export class MyApplication  {

        constructor() {
            const element = document.createElement("h1");
            element.innerHTML = "Hellorld! 234";
            element.setAttribute("style", "color:Red");
            document.body.appendChild(element);
        }
    }
}

window.onload = () => {
    const app = new Jedlik.MyApplication();
};