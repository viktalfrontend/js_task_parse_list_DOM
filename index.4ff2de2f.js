var t,r,e=document.querySelector("ul");function a(t){return Number(t.replace(/[^0-9.-]+/g,""))}e&&((t=Array.from(e.querySelectorAll("li"))).sort(function(t,r){var e=a(t.getAttribute("data-salary"));return a(r.getAttribute("data-salary"))-e}),r=t.map(function(t){return t.outerHTML}).join(""),e.innerHTML=r,function(t){Array.from(t.querySelectorAll("li")).map(function(t){return{name:t.textContent.trim(),position:t.getAttribute("data-position"),salary:a(t.getAttribute("data-salary")),age:a(t.getAttribute("data-age"))}})}(e));
//# sourceMappingURL=index.4ff2de2f.js.map
