function weaponList(){
    for(let i = 0; i < 4; i++) {
        fetch("https://eldenring.fanapis.com/api/weapons?limit=100&page=" + i)
            .then(data => data.json())
            .then(response => {
                var select = document.getElementById("myDropdown")
                if (i < 3) {
                    for(let j = 0; j < 100; j++) {
                        var el = document.createElement("a");
                        el.className = "aweapon";
                        el.textContent = response.data[j].name;
                        console.log(response.data[j].name)
                        el.setAttribute("href", '#' + response.data[j].name + "Header");
                        select.appendChild(el);
                    }
                } else {
                    for(let j = 0; j < 7; j++) {
                        var el = document.createElement("a");
                        el.className = "aweapon";
                        el.textContent = response.data[j].name;
                        console.log(response.data[j].name)
                        el.setAttribute("href", '#' + response.data[j].name + "Header");
                        select.appendChild(el);
                    }
                }
        })
    }
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}