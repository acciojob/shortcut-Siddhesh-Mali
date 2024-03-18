function shortcut(s1,s2){
        const first = s1.trim().charAt(0);
        const second = s2.trim().charAt(0);
        if(first==""||second==""){
                return "";
        }
        return first+second;
}


// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
