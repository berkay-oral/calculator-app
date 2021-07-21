import React, {useState} from 'react'
import './MyNewApp.css'

const  MyNewApp = () =>  {

    //DEĞİŞKNELERİMİZ DEĞİŞKENFUNCTİLARIMIZ(GUNCEELME)   BAŞLANGIÇDEĞERLERİMİ<
    const  [valueA, setValueA] = useState(0);
    const  [valueB, setValueB] = useState(0);
    const  [operation, setOperation] = useState('+')
    const  [result, setResult] = useState(0)



    const handleSubmit = () => {
         if(operation === '+'){
                        
             setResult( parseInt(valueA) + parseInt(valueB));
         }
         if(operation === '-'){
            setResult( valueA - valueB);
         }
         if(operation === '*'){
            setResult( valueA * valueB);
         }
         if(operation === '/'){
            setResult( valueA / valueB);
         }
    }

    return (
        <div className="container border">
  
            <div className="calculatorArea text-center">

           
             <h1>CALCULATOR APP</h1>
             <h3> RESULT : {result}</h3>

             <div>                                            {/* onChnage(yazılan değerle değiştir 0'ı)input kısmına girilen texti değer olarak göster ve hedefle*/}
                 <input type="text" value={valueA} onChange={ (e) => setValueA(e.target.value)}/>
                 <br/> <h3>{operation}</h3>
                 <input type="text" value={valueB} onChange={ (e) => setValueB(e.target.value)}/>
                 <br/>
                 <button onClick={handleSubmit}>RESULT</button>
             </div>

             <button onClick={() => setOperation('+')}>+</button>
             <button onClick={() => setOperation('-')}>-</button>
             <button onClick={() => setOperation('*')}>x</button>
             <button onClick={() => setOperation('/')}>/</button>

           </div>
        
          
     
        </div>
    )
}

export default MyNewApp
