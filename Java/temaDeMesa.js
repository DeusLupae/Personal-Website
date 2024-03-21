function lightTheme() {
    document.getElementById('mainFormat').href = "../Formatting/light.css"
    const wrongButton = document.getElementById('lightButton') 
    wrongButton.remove();
    const darkButton2 = document.createElement("button");
    const node = document.createTextNode("Ver en Modo Oscuro");
    darkButton2.appendChild(node);
    const element = document.getElementById('themeDiv')
    const child = document.getElementById("testTheme");
    element.insertBefore(darkButton2,child);
    darkButton2.setAttribute('id','darkButton')
    darkButton2.setAttribute('onclick','darkTheme();')
    document.getElementById('tableFormat').href = "../Formatting/scheduleLight.css"
}

function darkTheme() {
    document.getElementById('mainFormat').href = "../Formatting/center.css"
    const wrongButton = document.getElementById('darkButton') 
    wrongButton.remove();
    const lightButton2 = document.createElement("button");
    const node = document.createTextNode("Ver en Modo Blanco");
    lightButton2.appendChild(node);
    const element = document.getElementById('themeDiv')
    const child = document.getElementById("testTheme");
    element.insertBefore(lightButton2,child);
    lightButton2.setAttribute('id','lightButton')
    lightButton2.setAttribute('onclick','lightTheme()')
    document.getElementById('tableFormat').href = "../Formatting/schedule.css"
}