
function getIcon(id){

    let icon;
    
    switch (id.toString()[0]) {
        case "2":
            icon="ion:thunderstorm-outline"
            break;
        case "3":
            icon="carbon:rain-drizzle"
            break;
        case "5":
            icon="carbon:rain-heavy"
            break;
        case "6":
            icon="bi:snow"
            break;
        case "7":
            icon="mi:fog"
            break;
        
        default:
            icon=""
        break;
    }

    if(id.toString()[0]==="8"){
        if(id===800){
            icon="grommet-icons:sun"
        }
        else if(id===801){
            icon="bi:cloud-sun"
        }
        else{
            icon="bi:clouds"
        }
    }

    return icon
}


function getIconColor(id){

    let iconColor
    
    switch (id.toString()[0]) {
        case "2":
            iconColor="grey"
            break;
        case "3":
            iconColor="grey"
            break;
        case "5":
            iconColor="grey"
            break;
        case "6":
            iconColor="#A5C6F7"
            break;
        case "7":
            iconColor="grey"
            break;
        
        default:
            iconColor=""
        break;
    }

    if(id.toString()[0]==="8"){
        if(id===800){
            iconColor="#FDC500"
        }
        else{
            iconColor="grey"
        }
    }

    return iconColor
}


export {getIcon, getIconColor}