export const BasicTypes = () => {

  const name :string ='Giancarlo';
  const age:number=23;
  const isActive:boolean =true;

  const powers : string[] =['React','React Native','Angular','Vue']

  powers.push('Next') 
  return (
    <>
    <h3>Tipos Basicos</h3>
    {name}{age}{isActive ? 'True' : 'False'}
    <br />
    {powers.join(' , ')}
    </>
  )
}
