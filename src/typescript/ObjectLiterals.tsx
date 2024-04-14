interface Persona{
    firstName:string;
    lastName : string;
    age:number;
    address:Address;
    isAlive?:boolean;
    
}

interface Address{
    country:string;
    houseNo:string;
}


export const ObjectLiterals = () => {
    const person:Persona={
        age: 37,
        firstName: "Giancarlo",
        lastName: "Alvarez",
        isAlive:true,
        address:{
            country:'Peru',
            houseNo:'302'
        }
    };


return (
    <>
    <h3>Objectos Literales</h3>
    <pre>
    {JSON.stringify(person,null,2)}
    </pre>
    </>
  )
}
