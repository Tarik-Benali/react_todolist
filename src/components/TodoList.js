import React from 'react';
//import Langue from './Langue';
import Programation from './Programation';

function TodoList(){
    return(

        <div>
            <h1>
                20 ans d'études ^^ !
            </h1>
            <ul>Parmi ses explois :
                <li>
                    <Programation action="React.js" wakt="soirée"/>
                </li>
                <li>
                    <Programation action="Flutter" wakt="Seconde"/>
                </li>
                <li>
                    <Programation action="PHP" wakt="Heure"/>
                </li>
                <li>
                    <Programation action="Node.js" wakt="Semaine"/>
                </li>
            </ul>
        </div>
    );
}

export default TodoList;