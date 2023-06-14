export function toggleMenu(menuVisible:boolean){
    console.log('<useToggler> Funciona el toggleButton', menuVisible);
    menuVisible=!menuVisible;
    console.log('<useToggler> Resultado el toggleButton', menuVisible);
    return menuVisible;
}