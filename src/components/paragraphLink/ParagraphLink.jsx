//importar hojas de estilos 
import '../../styles/paragraphLink/paragraph-link.css'
//Props: Comunica los componentes padres con los componentes hijos.
import PropTypes from 'prop-types';


const ParagraphLink = ({href,color="gray",children}) => {
    //{clave:valor, href:" "} lo de props entra como objeto
    //console.log(props);


  const myParagraph = (
    <>
      <a 
      className="color-anchor"
      id="anchor-paragraph"
      style={{color:color}} 
      href= {href} 
      target="_blank" rel="noreferrer"
      >
        <p className="content">{children}</p>
      </a>
      
    </>
  );

  return myParagraph; //retornando el jsx. Primer componente hecho wuuu uwu 
};

ParagraphLink.propTypes = {
    href : PropTypes.string.isRequired
}


//style={{textDecoration:none}} cualquier estilo se debe colocar como Objeto usando camel case en lugar de "-"(guion)
export default ParagraphLink; //exportacion


/*Desestructuracion 
const [varA,varB] = [23,45];

const {varC, varD} = {varC,varF,varD}; //variables = objetos
 */


