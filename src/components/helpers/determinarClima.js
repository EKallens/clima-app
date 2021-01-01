import soleado from '../../images/soleado.png';
import nublado from '../../images/nublado.png';
import lluvioso from '../../images/lluvioso.png';

export const determinarClima = (clima) => {

    let imagen;

    switch(clima){
        case 'Clouds': imagen = nublado;
            break;
        case 'Clear': imagen = soleado;
            break;
        case 'Rain': imagen = lluvioso;
            break;
        default: imagen = soleado;
            break;
    }

    return imagen;

}