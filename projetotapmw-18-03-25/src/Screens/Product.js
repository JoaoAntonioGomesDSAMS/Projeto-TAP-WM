import { useState, useEffect } from 'react';
import styles from './Product.module.css';
import Register from './Register';

const Product = () => {

    return (
        <div>
            <h2>Cadastre a loja!</h2>
            <form>
                <label>
                    <span>
                        Nome:
                    </span>
                    <input type="text" name="displayNomeLoja" required placeholder="Nome da Loja" 
                     />
                </label>
                <label>
                    <span>
                        Endereço:
                    </span>
                    <input type="text" name="displayEnderecoLoja" required placeholder="Endereço da Loja" 
                    />
                </label>
                <label>
                    <span>
                        Cidade:
                    </span>
                    <input type="text" name="displayCidadeLoja" required placeholder="Cidade" 
                    />
                </label>
                <label>
                    <span>
                        Estado:
                    </span>
                    <input type="text" name="displayEstadoLoja" required placeholder="Estado" 
                    />
                </label>
                {<button className="btn">Cadastrar Loja</button>}
            </form>
        </div>
    )
}
 
export default Product